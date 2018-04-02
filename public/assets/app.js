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
var queryURL = '';
var priceList = [];
var theValue;
var allValues = [];
var BTC_Val;
var ETH_Val;
var LTC_Val;

function runQuery() {
    $.ajax({ 
        url: 'https://api.coinbase.com/v2/prices/' + currencies[0] + '/spot', 
        method: "GET" 
    }).then(function(coinData) {
        BTC_Val = coinData.data.amount;
        $('#Over-BTC').html('<h5>Bitcoin: $' + coinData.data.amount + '</h5>')
    });

    $.ajax({ 
        url: 'https://api.coinbase.com/v2/prices/' + currencies[1] + '/spot', 
        method: "GET" 
    }).then(function(coinData) {
        ETH_Val = coinData.data.amount;
        $('#Over-ETH').html('<h5>Etherium: $' + coinData.data.amount + '</h5>' )
    });

    $.ajax({ 
        url: 'https://api.coinbase.com/v2/prices/' + currencies[2] + '/spot', 
        method: "GET" 
    }).then(function(coinData) {
        LTC_Val = coinData.data.amount;
        $('#Over-LTC').html('<h5>Litecoin: $' + coinData.data.amount + '</h5>' )
    });

    console.log('hey');
    }



$(document).ready(function() {
    runQuery();
    console.log('Get lost Alec!')

    $("#BTC-Tab").hide();
    $("#ETH-Tab").hide();
    $("#LTC-Tab").hide();
});

setInterval(function(){
    runQuery();
    console.log(BTC_Val)
}, 20000);


$('#BTC-Btn').click(function(){
    $('#BTC-USD').html('<h2>$ '+ BTC_Val + '</h2>');
    $('#Over-Tab').hide();
    $("#BTC-Tab").show();
    $("#ETH-Tab").hide();
    $("#LTC-Tab").hide();
})

$('#ETH-Btn').click(function(){
    $('#ETH-USD').html('<h2>$ '+ ETH_Val + '</h2>')
    $('#Over-Tab').hide();
    $("#BTC-Tab").hide();
    $("#ETH-Tab").show();
    $("#LTC-Tab").hide();
})

$('#LTC-Btn').click(function(){
    $('#LTC-USD').html('<h2>$ '+ LTC_Val + '</h2>')
    $('#Over-Tab').hide();
    $("#BTC-Tab").hide();
    $("#ETH-Tab").hide();
    $("#LTC-Tab").show();
})

