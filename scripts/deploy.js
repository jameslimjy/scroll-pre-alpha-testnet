const hre = require("hardhat");

async function main() {
  const counterFactory = await hre.ethers.getContractFactory("Counter");
  const counter = await counterFactory.deploy();
  await counter.deployed();

  console.log(`contract address: ${counter.address}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
