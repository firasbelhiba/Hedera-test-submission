const fs = require("fs");
const {
  Client,
  ContractCallQuery,
  ContractExecuteTransaction,
  ContractCreateFlow,
  ContractFunctionParameters,
} = require("@hashgraph/sdk");

// Read the compiled contract bytecode and ABI
const contractData = fs.readFileSync("HelloHedera.json", "utf-8");
const { bytecode, abi } = JSON.parse(contractData);

async function main() {
  const myAccountId = "0.0.14994973";
  const myPrivateKey =
    "3030020100300706052b8104000a042204209bd456df9b6687091be7f209683e815d067284163a88477e34ad613c87200b00";

  const client = Client.forTestnet();
  client.setOperator(myAccountId, myPrivateKey);

  const contractID = await deployContract(client);

  await callGetAddress(client, contractID.toString());

  await callSetAddress(
    client,
    contractID.toString(),
    "0x98e268680db0ff02dfa8131a4074893c464aaaaa"
  );

  await callGetAddress(client, contractID.toString());
}

async function deployContract(client) {
  const contractCreate = new ContractCreateFlow()
    .setGas(100000)
    .setConstructorParameters(
      new ContractFunctionParameters().addAddress(
        "0x98e268680db0ff02dfa8131a4074893c464aeacd"
      )
    )
    .setBytecode(bytecode);

  const txResponse = await contractCreate.execute(client);
  const receipt = await (await txResponse).getReceipt(client);
  const newContractId = await receipt.contractId;

  console.log("The new contract id is " + newContractId);
  return newContractId;
}

async function callSetAddress(client, contractId, newAddress) {
  const contractExecTx = new ContractExecuteTransaction()
    .setContractId(contractId)
    .setGas(100000)
    .setFunction(
      "set_address",
      new ContractFunctionParameters().addAddress(newAddress)
    );

  const submitExecTx = await contractExecTx.execute(client);
  const receipt = await submitExecTx.getReceipt(client);

  console.log("The transaction status is " + receipt.status.toString());
}

async function callGetAddress(client, contractId) {
  const getAddress = new ContractCallQuery()
    .setContractId(contractId)
    .setGas(210000)
    .setFunction("get_address");

  const contractCallResult = await getAddress.execute(client);
  const address = contractCallResult.getAddress();

  console.log("Address:", address);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
