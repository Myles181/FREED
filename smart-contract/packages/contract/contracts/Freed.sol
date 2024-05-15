// SPDX-Licence-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract Freed is ERC20 {
    constructor() ERC20("Freed", "FREED") {}

    function faucetMint(address recipient) public {
        return _mint(recipient, 1000 * 10 ** 18);
    }
}
