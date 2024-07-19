# DegenToken Contract Summary

## Overview
DegenToken is a simple ERC20 token contract named "Degen" with the symbol "DGN". It provides basic functionalities of an ERC20 token along with additional features such as minting, burning, transferring tokens, and redeeming tokens for specific items or privileges.

## Description
The DegenToken contract is a standard ERC20 token implementation written in Solidity. It allows users to transfer tokens to other addresses, burn their own tokens to reduce the total supply, and enables the contract owner to mint new tokens as needed. Additionally, it provides functionality for token holders to redeem tokens for specific items or privileges, such as NFTs, T-shirts, or special roles on the Degen Discord server.

## Features
- **ERC20 Compliance**: The contract follows the ERC20 standard interface for fungible tokens.
- **Minting**: The owner of the contract can mint new Degen tokens and distribute them to specified addresses.
- **Burning**: Token holders can burn their tokens, removing them from circulation.
- **Transfer Tokens**: Token holders can transfer tokens to other addresses.
- **Redeem Tokens**: Token holders can redeem tokens for specific items or privileges.

## Functions
- `mint(address to, uint256 amount)`: Mint new tokens and assign them to the specified address.
- `burnTokens(uint256 amount)`: Burn tokens from the caller's balance.
- `transferTokens(address receiver, uint256 value)`: Transfer tokens from the caller's balance to the specified receiver.
- `showStoreItems()`: Display the available items for purchase.
- `redeemTokens(uint8 userChoice)`: Redeem tokens for specific items or privileges based on the user's choice.

## Usage
1. Deploy the contract to the Ethereum network.
2. Mint initial tokens if necessary.
3. Users can interact with the contract to transfer, burn, or redeem tokens for items or privileges.

## Requirements
- Solidity ^0.8.20
- OpenZeppelin Contracts library

## License
This project is licensed under the MIT License - see the LICENSE file for details.


- Contract Address: [0xA8D35fe43620762d322d97497840200848D60628](https://testnet.snowtrace.io/address/0xA8D35fe43620762d322d97497840200848D60628)

## Getting Started

### Installing
To get started with the DegenToken contract, you need to have the Solidity compiler and a development environment like Hardhat or Truffle installed.

1. Clone the repository:
   ```sh
   git clone https://github.com/yourusername/degentoken.git
   cd degentoken
   ```
2. Install dependencies:
  ```sh
  npm install
  ```
Executing Program
To deploy and interact with the DegenToken contract, follow these steps:
Compile the contract:
  ```sh
  npx hardhat compile
  ```

Deploy the contract:
  ```sh
  npx hardhat run scripts/deploy.js --network <network-name>
  ```
Transfer Tokens:
  ```sh
  await degenToken.transfer(addressTo, amount);
  ```
Burn Tokens:
  ```sh
  await degenToken.burn(amount);
  ```
Mint Tokens (only accessible to contract owner):
  ```sh
  await degenToken.mint(addressTo, amount);
  ```
Help
For common issues and troubleshooting:

Ensure you have the correct network configuration in your Hardhat or Truffle setup.
Verify that your wallet is connected and has sufficient funds for gas fees.
For more detailed help, run:

  ```sh
  npx hardhat help
  ```
Authors
James Akolo
License
This project is licensed under the MIT License - see the LICENSE.md file for details.
