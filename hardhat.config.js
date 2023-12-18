/** @type import('hardhat/config').HardhatUserConfig */
require('dotenv').config();
module.exports = {
  solidity: "0.8.4",
  defaultNetwork: "goerli",
  networks: {
    hardhat:{},
    goerli:{
      url: process.env.ALCHEMY_GOERLI_URL
    }
  }
};
