// const hre = require("hardhat");
const { ethers } = require("hardhat");
// import contract from "../artifacts/contracts/Counter.sol/Counter.json";
// import contract from "./Counter.json";
require("dotenv").config();

const contractAddr = "0x034676E7B787BC8D670BA77E4e1e2aB6a82B7a13";
// const abi = contract.abi;
const abi = [
  {
    inputs: [],
    name: "addCount",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "currentCount",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

async function main() {
  // get signer
  const provider = new ethers.providers.JsonRpcProvider("https://prealpha-rpc.scroll.io/l2");
  const signer = new ethers.Wallet(process.env.PRIVATE_KEY, provider);

  // get contract
  const counterContract = new ethers.Contract(contractAddr, abi, signer);
  const countBefore = await counterContract.currentCount();
  console.log("count before: ", countBefore);

  // add count
  const tx = await counterContract.addCount();
  await tx.wait();
  const countAfter = await counterContract.currentCount();
  console.log("count after: ", countAfter);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
