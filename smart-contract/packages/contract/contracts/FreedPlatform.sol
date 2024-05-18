// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import "@openzeppelin/contracts/utils/ReentrancyGuard.sol";
import "@openzeppelin/contracts/utils/Pausable.sol";
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

error EXPIRED();

contract Freed is Pausable, ReentrancyGuard, Ownable {
    ERC20 private _nativeToken;
    uint256 public proposalCount;
    uint256 public joblistingId;
    uint8 public recruiterId;
    uint256 public totalJobListings;

    struct Freelancer {
        address freelancer;
        string imageIPFSHash;
        bool isregistered;
        bool isverified;
    }

    struct Recruiter {
        uint8 id;
        string name;
        string description;
        string imageHash;
        string location;
    }

    struct Proposal {
        uint256 proposalId;
        address freelancer;
        string description;
        string title;
        ProposalStatus status;
        string imageIPFSHash;
        bool approved;
    }

    struct JobListing {
        uint256 tokenId;
        uint256 deadline;
        address lister;
        bool active;
        mapping(address => bool) verifiedApplicants;
        address[] applicants;
    }

    enum ProposalStatus {
        Pending,
        Approved,
        Denied,
        Closed,
        Executed
    }

    Proposal[] public pendingProposals;
    Proposal[] public approvedProposals;
    mapping(uint8 => Freelancer) public freelancers;
    mapping(uint8 => Recruiter) public recruiters;
    mapping(uint256 => JobListing) public joblistings;
    mapping(address => Proposal) public proposalByAddress;
    mapping(address => bool) public isFreelancer;
    mapping(address => bool) public revoked;

    event MemberRegistered(address indexed freelancer,string indexed imageIPFSHash);
    event JobListingCreated(uint256 indexed joblistingId);
    event JobListingEdited(uint256 indexed joblistingId);
    event ProposalCreated(uint256 indexed proposalId,string description,address indexed member);
    event ProposalExecuted(uint256 indexed proposalId,ProposalStatus indexed status);
    event Revoked(address indexed joblistingAddress, uint256 timestamp);
    event Status(uint256 indexed proposalId, ProposalStatus indexed status);
    event JobListingExecuted(uint256 indexed joblistingId, string tokenUri);
    event JobListingApplied(uint256 indexed joblistingId,address indexed applicant);
    event JobListingApplicantVerified(uint256 indexed joblistingId,address indexed applicant);
    event JobListingUpdated(uint256 indexed joblistingId);
    event JobListingApplicantAccepted(uint256 indexed joblistingId,address indexed applicant);

    modifier validFreelancer() {
        require(isFreelancer[msg.sender], "Not a member");
        _;
    }

    modifier notRevoked() {
        require(!revoked[msg.sender], "Revoked");
        _;
    }

    modifier onlyOwnerOrEscrow() {
        require(msg.sender == owner(), "Not authorized");
        _;
    }

    constructor(address nativeToken) Ownable(msg.sender) {
        _nativeToken = ERC20(nativeToken);
    }

    receive() external payable {}

    function registerFreelancer(string memory _imageIPFSHash) external {
        require(!isFreelancer[msg.sender], "Member is already registered");
        require(
            bytes(_imageIPFSHash).length > 0,
            "Image IPFS hash must not be empty"
        );

        isFreelancer[msg.sender] = true;
        Freelancer storage freelancer = freelancers[uint8(proposalCount)];
        freelancer.freelancer = msg.sender;
        freelancer.imageIPFSHash = _imageIPFSHash;

        emit MemberRegistered(msg.sender, _imageIPFSHash);
    }

    function registerRecruiter(
        string memory _name,
        string memory _description,
        string memory _imageHash,
        string memory _location
    ) external {
        require(bytes(_name).length > 0, "Name must not be empty");
        require(
            bytes(_description).length > 0,
            "Description must not be empty"
        );
        require(bytes(_imageHash).length > 0, "Image hash must not be empty");
        require(bytes(_location).length > 0, "Location must not be empty");

        recruiterId++;
        recruiters[recruiterId] = Recruiter({
            id: recruiterId,
            name: _name,
            description: _description,
            imageHash: _imageHash,
            location: _location
        });
    }
function createJobListing(uint256 durationInDays) external {
    uint256 deadline = block.timestamp + (durationInDays * 1 days);
    totalJobListings++;

    JobListing storage newJobListing = joblistings[totalJobListings];
    newJobListing.tokenId = totalJobListings;
    newJobListing.deadline = deadline;
    newJobListing.lister = msg.sender;
    newJobListing.active = true;

    emit JobListingCreated(totalJobListings);
}

function initializeJobListing(uint256 _joblistingId,uint256 _deadline,address _lister, bool _active
) external pure returns (uint256, uint256, address, bool) {
    return (_joblistingId, _deadline, _lister, _active);
}
    
function executeJobListing(uint256 _joblistingId, string calldata tokenUri) external nonReentrant
    {
        require(
            _joblistingId > 0 && _joblistingId <= joblistingId,
            "Invalid job listing ID"
        );
        JobListing storage listing = joblistings[_joblistingId];
        require(listing.lister != address(0), "Listing not existent");

        if (block.timestamp > listing.deadline) {
            listing.active = false;
            revert EXPIRED();
        }
        listing.active = false;
        emit JobListingExecuted(_joblistingId, tokenUri);
    }

    function editJobListing(uint256 _joblistingId, bool _active) external {
        require(
            _joblistingId > 0 && _joblistingId <= joblistingId,
            "Invalid job listing ID"
        );
        JobListing storage joblisting = joblistings[_joblistingId];
        require(joblisting.lister == msg.sender, "Not your listing");
        require(joblisting.lister != address(0), "Listing not existent");
        require(joblisting.active, "Listing not active");

        joblisting.active = _active;

        emit JobListingEdited(_joblistingId);
    }

    function createProposal(
        string memory _title,
        string memory _description,
        string memory _imageIPFSHash
    ) external validFreelancer returns (uint256 id) {
        require(!revoked[msg.sender], "You are revoked due to offence");

        Proposal storage proposal = proposalByAddress[msg.sender];
        proposal.proposalId = proposalCount;
        proposal.freelancer = msg.sender;
        proposal.description = _description;
        proposal.title = _title;
        proposal.imageIPFSHash = _imageIPFSHash;
        proposal.status = ProposalStatus.Pending;

        pendingProposals.push(proposal);

        emit ProposalCreated(proposalCount, _description, msg.sender);
        proposalCount += 1;
        id = proposal.proposalId;
    }

  function updateJobListing(uint256 _joblistingId, bool _active) external {
    require(
        _joblistingId > 0 && _joblistingId <= joblistingId,
        "Invalid job listing ID"
    );
    JobListing storage joblisting = joblistings[_joblistingId];
    require(joblisting.lister == msg.sender, "Not your listing");
    require(joblisting.active, "Listing not active");

    joblisting.active = _active;

    emit JobListingUpdated(_joblistingId);
}


    function approveProposal(uint256 _proposalId) external onlyOwner {
        require(_proposalId < pendingProposals.length, "Invalid proposal ID");

        Proposal storage proposal = pendingProposals[_proposalId];
        require(
            proposal.status == ProposalStatus.Pending,
            "Proposal not pending"
        );

        proposal.status = ProposalStatus.Approved;

        emit ProposalExecuted(_proposalId, ProposalStatus.Approved);
    }

    function getPendingProposals() external view returns (Proposal[] memory) {
        return pendingProposals;
    }

    function getApprovedProposals() external view returns (Proposal[] memory) {
        return approvedProposals;
    }

    function verifyJobListingApplicant(
        uint256 _joblistingId,
        address _applicant
    ) external onlyOwner {
        require(
            _joblistingId > 0 && _joblistingId <= joblistingId,
            "Invalid job listing ID"
        );
        JobListing storage joblisting = joblistings[_joblistingId];
        require(joblisting.lister == msg.sender, "Not your listing");

        // Verify the applicant
        joblisting.verifiedApplicants[_applicant] = true;

        emit JobListingApplicantVerified(_joblistingId, _applicant);
    }

    function acceptJobListingApplicant(
        uint256 _joblistingId,
        address _applicant
    ) external onlyOwner {
        require(
            _joblistingId > 0 && _joblistingId <= joblistingId,
            "Invalid job listing ID"
        );
        JobListing storage joblisting = joblistings[_joblistingId];
        require(joblisting.lister == msg.sender, "Not your listing");

        // Ensure the applicant is verified
        require(
            joblisting.verifiedApplicants[_applicant],
            "Applicant not verified"
        );

        // Mark the applicant as accepted
        // Additional logic can be added here, such as transferring funds or NFTs
        emit JobListingApplicantAccepted(_joblistingId, _applicant);
    }

    function getFreelancer(address) external view returns (Freelancer memory) {
        return freelancers[uint8(proposalCount)];
    }

    function getRecruiter(uint8 _recruiterId)
        external
        view
        returns (Recruiter memory)
    {
        require(_recruiterId <= recruiterId, "Recruiter does not exist");
        return recruiters[_recruiterId];
    }
    function applyJobListing(uint256 _joblistingId)
        external
        validFreelancer
        notRevoked
    {
        require(
            _joblistingId > 0 && _joblistingId <= joblistingId,
            "Invalid job listing ID"
        );
        JobListing storage joblisting = joblistings[_joblistingId];
        require(joblisting.active, "Job listing not active");

        // Check if the freelancer has already applied
        require(!joblisting.verifiedApplicants[msg.sender], "Already applied");

        // Add the freelancer to the list of applicants
        joblisting.applicants.push(msg.sender);

        emit JobListingApplied(_joblistingId, msg.sender);
    }
   function getAllJobListings() external view returns (uint256[] memory, uint256[] memory, address[] memory, bool[] memory) {
    uint256[] memory tokenIds = new uint256[](totalJobListings);
    uint256[] memory deadlines = new uint256[](totalJobListings);
    address[] memory listers = new address[](totalJobListings);
    bool[] memory actives = new bool[](totalJobListings);
    
    for (uint256 i = 1; i <= totalJobListings; i++) {
        tokenIds[i - 1] = joblistings[i].tokenId;
        deadlines[i - 1] = joblistings[i].deadline;
        listers[i - 1] = joblistings[i].lister;
        actives[i - 1] = joblistings[i].active;
    }
    
    return (tokenIds, deadlines, listers, actives);
}



    function revokeProposal(uint256 _proposalId) external onlyOwner {
        require(_proposalId < pendingProposals.length, "Invalid proposal ID");

        delete pendingProposals[_proposalId];

        emit Status(_proposalId, ProposalStatus.Closed);
    }

    function updateProposalStatus(uint256 _proposalId, ProposalStatus _status)
        external
        onlyOwner
    {
        require(_proposalId < pendingProposals.length, "Invalid proposal ID");

        Proposal storage proposal = pendingProposals[_proposalId];
        proposal.status = _status;

        emit Status(_proposalId, _status);
    }
}
