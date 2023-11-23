// SPDX-License-Identifier: MIT
pragma solidity ^0.8.10;

import {ERC721} from "@openzeppelin/contracts/token/ERC721/ERC721.sol";

contract Album is ERC721 {
    // The tokenId of the token to be minted.
    uint256 private _tokenId;
    string private _tokenName;
    event Mint(address indexed to, string tokenName, uint256 tokenId);
    constructor(string memory name_, string memory symbol_)
        payable
        ERC721(name_, symbol_)
    {
        _tokenId = 0;
        _tokenName = name_;
    }

    function mint() external returns (uint256) {
        _tokenId += 1;
        _mint(msg.sender, _tokenId);
        emit Mint(msg.sender, _tokenName,_tokenId);
        return _tokenId;
    }

    function getTokenId() external view returns (uint256) {
        return _tokenId;
    }
}