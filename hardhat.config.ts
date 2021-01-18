import { task, HardhatUserConfig } from "hardhat/config";
import "@nomiclabs/hardhat-waffle";
import "hardhat-typechain";

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (args, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more
/**
 * @type import('hardhat/config').HardhatUserConfig
 */
const config: HardhatUserConfig = {
  // Your type-safe config goes here
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {
      accounts: {
        mnemonic: "cook is a great asset management platform cook benefits transparent accessible secure",
      }
    }
  },
  solidity: "0.5.16",
};

export default config;
