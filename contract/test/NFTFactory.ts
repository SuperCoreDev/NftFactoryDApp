// test/NFTFactory.test.js (using Hardhat)

describe("NFTFactory contract", function () {
  let nftFactory:any;
  let albumContract;
  beforeEach(async function() {
    const Album = await ethers.getContractFactory("Album");
    albumContract = await Album.deploy("MyAlbums", "ALB");
    await albumContract.deployed();
    const NFTFactory = await ethers.getContractFactory("NFTFactory");
    nftFactory = await NFTFactory.deploy();
    await nftFactory.deployed();
  });
  it("should create new albums with unique address and tokenId", async function () {
    const tx = await nftFactory.createAlbum("MyAlbum", "ALB");
    const albumAddress = tx.logs[0].args._new;
    const albumContract = await ethers.getContractAt("Album", albumAddress);
    const tokenId = await albumContract.getTokenId();
    expect(await albumContract.name()).to.equal("MyAlbum");
    expect(await albumContract.symbol()).to.equal("ALB");
    expect(tokenId.toNumber()).to.equal(0); // initial tokenId should be 0
    await albumContract.mint();
    const newTokenId = await albumContract.getTokenId();
    expect(newTokenId.toNumber()).to.equal(1); // after minting, tokenId should be 1
    // add more tests as needed...
  });
});
