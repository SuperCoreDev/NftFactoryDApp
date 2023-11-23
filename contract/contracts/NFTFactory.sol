// SPDX-License-Identifier: MIT
pragma solidity ^0.8.10;

import {Album} from "./Album.sol";

contract NFTFactory {
    event GetCollectionInfo(address indexed _new, string _name,uint256 indexed _uid);
    function createAlbum(string memory name_, string memory symbol_)
        public
        returns (address)
    {
        Album newAlbum = new Album(name_, symbol_);
        emit GetCollectionInfo(address(newAlbum) ,name_, newAlbum.getTokenId());
        return address(newAlbum);
    }
}