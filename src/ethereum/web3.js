import Web3 from "web3";

let web3;

window.addEventListener("load", async () => {
  if (window.ethereum) {
    window.web3 = new Web3(window.ethereum);
    try {
      // Request account access if needed
      await window.ethereum.enable();
    } catch (err) {
      console.log("## ACCESS DENIED: ", err);
    }
  } else if (window.web3) {
    // Legacy dapp browsers...
    window.web3 = new Web3(web3.currentProvider);
  }
});

if (typeof window !== "undefined" && typeof window.web3 !== "undefined") {
  console.log("Using the web3 object of the window...");
  web3 = new Web3(window.web3.currentProvider);
}

export default web3;
