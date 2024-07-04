require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.20",
  defaultNetwork: "fuji",
  networks: {
    hardhat: {},
    fuji: {
      url: process.env.SEPOLIA_ALCHEMY_RPC_U,
      // @ts-ignore
      accounts: [process.env.PRIVATEKEY],
    },
  },
  etherscan: {
    apiKey: process.env.ETHERSCAN_API_KEY,
  },
};
