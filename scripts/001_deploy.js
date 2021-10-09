const hre = require("hardhat");

if (!process.env.DEPLOY_TOKEN_NAME) {
  console.error("Please set DEPLOY_TOKEN_NAME");
  process.exit(0);
}

if (!process.env.DEPLOY_TOKEN_SYMBOL) {
  console.error("Please set DEPLOY_TOKEN_SYMBOL");
  process.exit(0);
}

async function main() {
  const contractClass = "NFTSample";
  const contractFactory = await hre.ethers.getContractFactory(contractClass);

  const initArgs = [
    process.env.DEPLOY_TOKEN_NAME,
    process.env.DEPLOY_TOKEN_SYMBOL,
  ];
  const contract = await contractFactory.deploy(...initArgs);
  await contract.deployed();

  console.log(contractClass, contract.address);
  console.log("-----------------Verify Contract-----------------");
  console.log(
    "hh verify",
    contract.address,
    JSON.stringify(initArgs)
      .replace(/[\[\]]/g, "")
      .replace(/[,]/g, " "),
    "--contract contracts/" +
      contractClass +
      ".sol:" +
      contractClass +
      " --network",
    hre.network.name
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
