const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("NFTSample contract", function () {
  let contract;
  let owner;
  let addrs;

  beforeEach(async function () {
    [owner, ...addrs] = await ethers.getSigners();

    const initArgs = ["NFT Sample", "NFTS"];
    const contractFactory = await ethers.getContractFactory("NFTSample");
    contract = await contractFactory.deploy(...initArgs);
  });

  describe("#name", function () {
    it("returns token name", async function () {
      expect(await contract.name()).to.equal("NFT Sample");
    });
  });

  describe("#symbol", function () {
    it("returns token symbol", async function () {
      expect(await contract.symbol()).to.equal("NFTS");
    });
  });
});
