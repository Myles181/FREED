// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import "@openzeppelin/contracts/utils/ReentrancyGuard.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

contract Escrow is ReentrancyGuard {
    
    struct EscrowData {
        address payer;
        address payee;
        uint256 amount;
        bool paid;
        bool released;
    }

    mapping(uint256 => EscrowData) public escrows;
    uint256 public escrowCount;

    event EscrowCreated(
        uint256 indexed escrowId,
        address indexed payer,
        address indexed payee,
        uint256 amount
    );

    event EscrowReleased(uint256 indexed escrowId, address indexed payee);
    event EscrowRefunded(uint256 indexed escrowId, address indexed payer);

    modifier onlyFreelancer(uint256 _escrowId) {
        require(
            msg.sender == escrows[_escrowId].payer,
            "Only freelancer can perform this action"
        );
        _;
    }

    modifier onlyRecruiter(uint256 _escrowId) {
        require(
            msg.sender == escrows[_escrowId].payee,
            "Only recruiter can perform this action"
        );
        _;
    }

    modifier onlyFreedAgent(uint256 _escrowId) {
        require(
            msg.sender == escrows[_escrowId].payer ||
                msg.sender == escrows[_escrowId].payee,
            "Only FreedAgent can perform this action"
        );
        _;
    }

    function createEscrow(
        address _freelancer,
        address _recruiter,
        uint256 _amount
    ) external {
        require(_freelancer != address(0), "Invalid freelancer address");
        require(_recruiter != address(0), "Invalid recruiter address");
        require(_amount > 0, "Amount should be greater than 0");

        uint256 newEscrowId = escrowCount + 1;
        escrows[newEscrowId] = EscrowData(
            _freelancer,
            _recruiter,
            _amount,
            false,
            false
        );
        escrowCount++;

        emit EscrowCreated(newEscrowId, _freelancer, _recruiter, _amount);
    }

    function releaseEscrow(uint256 _escrowId) external nonReentrant onlyRecruiter(_escrowId) {
        EscrowData storage escrowData = escrows[_escrowId];
        require(!escrowData.released, "Escrow already released");

        escrowData.released = true;
        escrowData.paid = true;

        emit EscrowReleased(_escrowId, escrowData.payee);
    }

    function refundEscrow(uint256 _escrowId) external nonReentrant onlyFreedAgent(_escrowId) {
        EscrowData storage escrowData = escrows[_escrowId];
        require(!escrowData.released, "Escrow already released");

        escrowData.released = true;

        IERC20 token = IERC20(address(this));
        token.transfer(escrowData.payer, escrowData.amount);

        emit EscrowRefunded(_escrowId, escrowData.payer);
    }
}

contract FreedEscrow is Escrow {
    constructor() Escrow() {}
}
