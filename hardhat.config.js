require("@nomiclabs/hardhat-waffle");
require('dotenv').config();


process.env.REACT_APP_AURORA_PRIVATE_KEY ? console.log("REACT_APP_PRIVATE_KEY: True") : console.log("REACT_APP_PRIVATE_KEY: False");;


module.exports = {
  solidity: "0.8.4",

  networks: {
    testnet_aurora: {
      url: 'https://testnet.aurora.dev',
      accounts: [`0x${process.env.REACT_APP_AURORA_PRIVATE_KEY}`]
    },
    develop_aurora: {
      url: 'https://develop.rpc.testnet.aurora.dev:8545',
      accounts: [`0x${process.env.REACT_APP_AURORA_PRIVATE_KEY}`]
    },
    ropsten: {
      url: 'https://rpc.testnet.aurora.dev:8545',
      accounts: [`0x${process.env.REACT_APP_AURORA_PRIVATE_KEY}`]
    },
    alfajores: {
      url: "https://alfajores-forno.celo-testnet.org",
      accounts: {
        mnemonic: process.env.MNEMONIC,
        path: "m/44'/52752'/0'/0"
      },
      chainId: 44787
    },
    celo: {
      url: "https://forno.celo.org",
      accounts: {
        mnemonic: process.env.MNEMONIC,
        path: "m/44'/52752'/0'/0"
      },
      chainId: 42220
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
