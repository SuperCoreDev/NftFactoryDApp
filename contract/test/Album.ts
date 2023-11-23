// test/Album.test.js (using Hardhat)
const { expect } = require('chai');
const {ethers} = require('ethers');
describe("Album contract", function () {
  let albumContract : any;
  beforeEach(async function() {
    const Album = await ethers.getContractFactory("Album");
    albumContract = await Album.deploy("MyAlbums", "ALB");
    await albumContract.deployed();
  });
  it("should have the correct name and symbol", async function () {
    expect(await albumContract.name()).to.equal("MyAlbums");
    expect(await albumContract.symbol()).to.equal("ALB");
  });
  it("should mint new tokens correctly", async function () {
    let tokenId = await albumContract.getTokenId();
    expect(tokenId.toNumber()).to.equal(0); // initial tokenId should be 0
    await albumContract.mint();
    tokenId = await albumContract.getTokenId();
    expect(tokenId.toNumber()).to.equal(1); // after minting, tokenId should be 1
    // add more tests as needed...
  });
});
