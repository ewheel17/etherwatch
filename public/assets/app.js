// Initialize Firebase
var config = {
    apiKey: "AIzaSyDmFYLuc16iNNQTPwvVBu9qkap2o4qlcQA",
    authDomain: "etherwatch-1659d.firebaseapp.com",
    databaseURL: "https://etherwatch-1659d.firebaseio.com",
    projectId: "etherwatch-1659d",
    storageBucket: "",
    messagingSenderId: "595784562003"
};

firebase.initializeApp(config);

var currencies = [
    'BTC-USD',
    'ETH-USD',
    'LTC-USD'
]
var queryURL = 'https://api.coinbase.com/v2/prices/' + currencies[0] + '/spot';
var priceList = [];
var theValue;
var allValues = [];

function runQuery(queryURL) {
    for (i in currencies) {
        queryURL = 'https://api.coinbase.com/v2/prices/' + currencies[i] + '/spot';

        $.ajax({ 
            url: queryURL, 
            method: "GET" 
        }).then(function(coinData) {
            theValue = coinData.data.amount;
            allValues.push(theValue);
            console.log(theValue);
        });
    }
};

runQuery(queryURL);

