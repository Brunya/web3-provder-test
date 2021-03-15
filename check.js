require("dotenv").config();
const { wallet } = require("./wallet.json");

const Web3 = require("web3");
const web3 = new Web3(process.env.URL);

const accounts = web3.eth.accounts.wallet.decrypt(wallet, process.env.PASSWORD);

async function getCurrentBlock() {
  const currentBlock = await web3.eth.getBlockNumber();
  return currentBlock;
}

getCurrentBlock().then((data) => console.log(data));

web3.eth.net
  .isListening()
  .then((a) => console.log(a))
  .catch((e) => console.log("Wow. Something went wrong: " + e));
