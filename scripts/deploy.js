// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
const hre = require("hardhat");

async function main() {
  // Hardhat always runs the compile task when running scripts with its command
  // line interface.
  //
  // If this script is run directly using `node` you may want to call compile
  // manually to make sure everything is compiled
  // await hre.run('compile');

  // We get the contract to deploy
  const SuperMarioWorldOZ = await hre.ethers.getContractFactory("SuperMarioWorldOZ");
  const superMarioWorldOZ = await SuperMarioWorldOZ.deploy("SuperMarioWorldOZ", "SPRMO"); // pass in the contract constructors arguments

  await superMarioWorldOZ.deployed();

  console.log("Super Mario World OpenZepplin  deployed to:", superMarioWorldOZ.address);

  await superMarioWorldOZ.mint("https://ipfs.io/ipfs/QmXtvVELp6bp4xmQktBjABb1sr3JTXggRWRmRwYuyYLiBH")

  console.log("NFT Minted !!!")
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
