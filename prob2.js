let bidArray = [5, 6, 12, 20];

function showBids() {
    // Create a function that will add the array of bids to the element
    console.log(bidArray);
}

function deleteBids() {
    bidArray = [];
}

function addBid(inputID) {
    // Create a function that will take the text in an input box and add it to the array of bids
    let inputElement = document.getElementById(inputID);
    let bidInput = Number.parseFloat(inputElement.value);

    bidArray.push(bidInput);

    document.getElementById(inputID).value = "";
}

function saveBids() {
    // Create a function that will save the array of bids to localStorage
}

function retrieveBids() {
    // Create a function that will retrieve the array of bids from localStorage
}