# NFT Sample

Using [Hardhat](https://hardhat.org/getting-started/) Ethereum development environment

# Setup project with hardhat

1. Install hardhat `npm install --save-dev hardhat`
2. Install packages: `npm install`
3. Install shorthand: `npm i -g hardhat-shorthand` after install can run hardhat command by `hh` instead of `npx hardhat`

# Compile, deploy and verify smart contract

Get native coin for gas purpose at: 
  - [rinkeby faucet](https://faucet.rinkeby.io/)
  - [ropsten faucet](https://faucet.ropsten.be/)
  - [goerli faucet](https://faucet.goerli.mudit.blog/)
  - [kovan faucet](https://gitter.im/kovan-testnet/faucet) or [chain.link](https://kovan.chain.link/)
  - [polygon faucet](https://faucet.polygon.technology/)
  - [bsc faucet](https://testnet.binance.org/)
  - [one faucet](https://faucet.pops.one/)

Networks supported:
  - ropsten
  - goerli
  - matic
  - matic_testnet
  - bsc
  - bsc_testnet

env vars:
  | key                                      | description                                                                                                                                                        |
|------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `PRIVATE_KEY`                            | private key of deployer's account, ignore if when deploy on hardhat local. The account should have native coin to run deploy contract scripts                     |
| `ROPSTEN_URL`, `RINKEBY_URL`, `GOERLI_URL` | network gateway, get at: [infura](https://infura.io/) [moralis](https://moralis.io/)                                                                               |
| `ETHERSCAN_API_KEY`                      | explorer api key, get at:  [etherscan](https://etherscan.io/myapikey), [bscscan](https://bscscan.com/myapikey), [polygonscan](https://polygonscan.com/myapikey)... |
| `DEPLOY_TOKEN_NAME`                      | token name                                                                                                                                                         |
| `DEPLOY_TOKEN_SYMBOL`                    | token symbol                                                                                                                                                       |

### Deploy:

1. Set env vars: `DEPLOY_TOKEN_NAME`, `DEPLOY_TOKEN_SYMBOL`
2. Deploy contract: `hh run scripts/001_deploy.js --network <network>`
3. Verify contract: `hh verify <contract_address> <token_name> <token_symbol> --contract contracts/NFTSample.sol:NFTSample --network bsc_testnet`

# Testing

`hh test`
