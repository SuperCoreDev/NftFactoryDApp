// import { ethers } from "hardhat";
const hre = require("hardhat");

async function main() {
  
  const Album  = await hre.ethers.getContractFactory("Album");
  const _album  = await Album.deploy("MyAlbum","Album");
  await _album.deployed();
  console.log('Simple NFT Contract deployed at', _album.address
  )
  const TokenFactory = await hre.ethers.getContractFactory("NFTFactory");
  const _tokenfactory = await TokenFactory.deploy();

  await _tokenfactory.deployed();

  console.log('NFT Factory Contract deployed at', _tokenfactory.address)
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
