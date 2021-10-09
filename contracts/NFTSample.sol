//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.7;

import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

contract NFTSample is 
    Ownable,
    ERC721URIStorage
{
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIdCounter;

    constructor(string memory name_, string memory symbol_) ERC721(name_, symbol_) {}

    function supportsInterface(bytes4 interfaceId) public view override(ERC721) returns (bool){
        return super.supportsInterface(interfaceId);
    }

    function tokenURI(uint256 tokenId) public view override(ERC721URIStorage) returns (string memory){
        return super.tokenURI(tokenId);
    }

    function safeMint(address to, string memory uri) public {
        uint256 tokenID = _tokenIdCounter.current();
        _safeMint(to, tokenID);
        _setTokenURI(tokenID, uri);
        _tokenIdCounter.increment();
    }
}
