# Hedera Certification Test

This repository contains the code for the Hedera Certification Test, which consists of three tasks related to Hedera Hashgraph. The code provided demonstrates the creation of a new topic, updating the topic memo, and submitting a message to the topic.

## Prerequisites
Before running the code, make sure you have the following prerequisites installed:

- Node.js (version 12 or higher)
- Git

## Getting Started
To get started with the Hedera Certification Test, follow these steps:

1. Clone the repository:

2. Navigate to the project directory:

3. Install dependencies:



4. Set up environment variables:
- Create a file named `.env` in the project directory.
- Add the following lines to the `.env` file and replace the values with your own:
  ```
  HEDERA_ACCOUNT_ID=<your_account_id>
  HEDERA_PRIVATE_KEY=<your_private_key>
  ```

5. Run the code:



## Code Explanation
The code provided demonstrates the usage of the `@hashgraph/sdk` library to interact with the Hedera Hashgraph network. Here is a breakdown of the code and its functionality:

- Import necessary modules and libraries.
- Set up the client and provide your Hedera account information.
- Create admin and submit keys.
- Create a new topic.
- Sign and execute the topic creation transaction.
- Get the topic ID from the transaction receipt.
- Query the topic info.
- Update the topic memo.
- Sign and execute the topic update transaction.
- Query the updated topic info.
- Submit a message to the topic.

Feel free to explore the code and modify it as needed for your Hedera Certification Test.

Please note that this code is intended for educational purposes and should not be used in a production environment without proper review and enhancements.

For more information on Hedera Hashgraph and the available SDKs, refer to the official [Hedera Hashgraph Documentation](https://docs.hedera.com/).

If you have any questions or need further assistance, feel free to reach out.

# Hedera Certification Test - Task 2

This repository contains the code for Task 2 of the Hedera Certification Test. The code provided demonstrates the creation of new accounts, the creation of an NFT collection, updating the collection, minting and transferring NFTs, associating accounts with NFTs, and modifying custom fees.

## Prerequisites
Before running the code, make sure you have the following prerequisites installed:

- Node.js (version 12 or higher)
- Git

## Getting Started
To get started with Task 2 of the Hedera Certification Test, follow these steps:

1. Clone the repository:


2. Navigate to the project directory:

3. Install dependencies:


4. Set up environment variables:
- Create a file named `.env` in the project directory.
- Add the following lines to the `.env` file and replace the values with your own:
  ```
  HEDERA_ACCOUNT_ID=<your_account_id>
  HEDERA_PRIVATE_KEY=<your_private_key>
  ```

5. Run the code:


## Code Explanation
The code provided demonstrates the usage of the `@hashgraph/sdk` library to interact with the Hedera Hashgraph network. Here is a breakdown of the code and its functionality:

- Import necessary modules and libraries.
- Set up the client and provide your Hedera account information.
- Create two new accounts.
- Create an NFT collection with custom royalty fees.
- Display information about the NFT collection.
- Update the NFT collection memo.
- Mint an NFT and associate it with the first account.
- Transfer the NFT from your account to the first account.
- Display the account balances.
- Modify the custom fees for the NFT collection.
- Mint a second NFT and associate it with the second account.
- Transfer the second NFT from your account to the second account.
- Display the updated account balances.

Feel free to explore the code and modify it as needed for your Hedera Certification Test.

Please note that this code is intended for educational purposes and should not be used in a production environment without proper review and enhancements.

For more information on Hedera Hashgraph and the available SDKs, refer to the official [Hedera Hashgraph Documentation](https://docs.hedera.com/).

If you have any questions or need further assistance, feel free to reach out.

# Hedera Certification Test - Task 3

This repository contains the code for Task 3 of the Hedera Certification Test. The code provided demonstrates the deployment and execution of a smart contract on the Hedera Hashgraph network.

## Prerequisites
Before running the code, make sure you have the following prerequisites installed:

- Node.js (version 12 or higher)
- Git

## Getting Started
To get started with Task 3 of the Hedera Certification Test, follow these steps:

1. Clone the repository:

2. Navigate to the project directory:

3. Install dependencies:

4. Set up environment variables:
- Create a file named `.env` in the project directory.
- Add the following lines to the `.env` file and replace the values with your own:
  ```
  HEDERA_ACCOUNT_ID=<your_account_id>
  HEDERA_PRIVATE_KEY=<your_private_key>
  ```

5. Deploy and execute the smart contract:


## Code Explanation
The code provided demonstrates the usage of the `@hashgraph/sdk` library to deploy and execute a smart contract on the Hedera Hashgraph network. Here is a breakdown of the code and its functionality:

- Import necessary modules and libraries.
- Read the compiled contract bytecode and ABI from the `HelloHedera.json` file.
- Set up the client and provide your Hedera account information.
- Deploy the smart contract using the `ContractCreateFlow` and retrieve the contract ID.
- Call the `get_address` function of the smart contract using the `ContractCallQuery`.
- Call the `set_address` function of the smart contract using the `ContractExecuteTransaction` to update the address parameter.
- Call the `get_address` function again to verify the updated address.

Please note that you need to have a compiled smart contract bytecode and ABI in the `HelloHedera.json` file in order for this code to work. Make sure to provide the correct values for your Hedera account ID and private key in the `.env` file.

Feel free to explore the code and modify it as needed for your Hedera Certification Test.

For more information on Hedera Hashgraph and the available SDKs, refer to the official [Hedera Hashgraph Documentation](https://docs.hedera.com/).

If you have any questions or need further assistance, feel free to reach out.

Happy coding!

