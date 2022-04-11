require("@nomiclabs/hardhat-waffle");
require('dotenv').config();


process.env.METER_PRIVATE_KEY ? console.log("METER_PRIVATE_KEY: True") : console.log("METER_PRIVATE_KEY: False");;


module.exports = {
  solidity: "0.8.4",

  networks: {
    meter_testnet: {
      url: "https://rpctest.meter.io",
      accounts: [`${process.env.METER_PRIVATE_KEY}`]
    },
    meter_mainnet: {
      url: "https://rpc.meter.io",
      accounts: [`${process.env.METER_PRIVATE_KEY}`]
    }
  },
  
  // optimizer helps with the Warning: Contract code size exceeds 24576 bytes (a limit introduced in Spurious Dragon)
  solidity: {
    version: "0.8.4",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  },
  
};
