# NFT Sample

ERC721 sample project using [Hardhat](https://hardhat.org/getting-started/) - Ethereum development environment - to understand how to:
  - Write ERC721 solidity smart contract with [openzeppelin library](https://github.com/OpenZeppelin/openzeppelin-contracts)
  - Deploy a contract on chain by [Hardhat](https://hardhat.org)
  - Verify contract code on [explorer](https://etherscan.io/)
  - Test a smart contract
  - Interact a smart contract by [explorer](https://rinkeby.etherscan.io/address/0x119e1fddb712df1974766822424106d0276e9855#writeContract) and [metamask chrome extension](https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn?hl=en)
  - View a [minted NFT token](https://testnets.opensea.io/assets/0x119e1fddb712df1974766822424106d0276e9855/2) on opensea

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
| `ROPSTEN_URL`, `RINKEBY_URL`, `GOERLI_URL` | network gateway, get at: [infura](https://infura.io/), [moralis](https://moralis.io/)                                                                               |
| `ETHERSCAN_API_KEY`                      | explorer api key, get at:  [etherscan](https://etherscan.io/myapikey), [bscscan](https://bscscan.com/myapikey), [polygonscan](https://polygonscan.com/myapikey)... |
| `DEPLOY_TOKEN_NAME`                      | token name                                                                                                                                                         |
| `DEPLOY_TOKEN_SYMBOL`                    | token symbol                                                                                                                                                       |

### Deploy:

1. Set env vars: `DEPLOY_TOKEN_NAME`, `DEPLOY_TOKEN_SYMBOL`
2. Deploy contract: `hh run scripts/001_deploy.js --network <network>`
3. Verify contract: `hh verify <contract_address> <token_name> <token_symbol> --contract contracts/NFTSample.sol:NFTSample --network bsc_testnet`

### Sample contracts

- [BSC testnet](https://testnet.bscscan.com/address/0x7ded348d3764dfac3906e1e15cd51575a57bec31#code)
- [rinkeby](https://rinkeby.etherscan.io/address/0x119e1fddb712df1974766822424106d0276e9855#code)


# Mint token by rinkeby explorer and view on opensea testnet

  1. Access `Write Contract` tab of sample contract on [rinkeby explorer](https://rinkeby.etherscan.io/address/0x119e1fddb712df1974766822424106d0276e9855#writeContract)
  2. Click `Connect to Web3` and select an account has some [native coins](https://faucet.rinkeby.io/) on [metamask chrome extension](https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn?hl=en)
  3. Click `safeMint` then fill `to (address)` to want to mint and token `uri (string)` - [token uri sample](https://opensea-creatures-api.herokuapp.com/api/creature/0)
  4. CLick `Write` button
  5. Click `Confirm` button on metamask popup to sign and send tx(transaction) on rinkeby testnet
  6. Click `View your transaction` to see your mint token [tx details](https://rinkeby.etherscan.io/tx/0xbc5d2893124b675f05756c325233421d6c161d9f68408559f30a20ee0608127b). You can find your `tokenID` minted at `Tokens Transferred:` row
  7. View minted token on opensea: [`https://testnets.opensea.io/assets/<contract_address>/<tokenID>`](https://testnets.opensea.io/assets/0x119e1fddb712df1974766822424106d0276e9855/2)

# Testing

`hh test`


