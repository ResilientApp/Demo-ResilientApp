import ResilientSDK from 'https://cdn.resilientdb.com/resilient-sdk.js';

const sdk = new ResilientSDK();

// Add a message listener
sdk.addMessageListener((event) => {
    const message = event.data.data;
    var alertDiv = document.getElementById("result");
    alertDiv.className = `alert alert-${type}`;  // Set the alert type
    alertDiv.innerHTML = JSON.stringify(message);  // Set the message
    alertDiv.style.display = 'block';            // Show the alert
});

var commit = document.querySelector('[data-nexres="commit-page-script"]');
var data = document.querySelector('[data-nexres="get-data"]');
var amount = document.querySelector('[data-nexres="get-amount"]');
var address = document.querySelector('[data-nexres="get-address"]');

commit.addEventListener("click", messageContentScript);

function messageContentScript() {
    sdk.sendMessage({
      direction: "commit-page-script",
      message: data.value,
      amount: amount.value,
      address: address.value,
    });
}