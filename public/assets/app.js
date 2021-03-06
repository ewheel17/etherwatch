// Initialize Firebase
var config = {
    apiKey: "AIzaSyDmFYLuc16iNNQTPwvVBu9qkap2o4qlcQA",
    authDomain: "etherwatch-1659d.firebaseapp.com",
    databaseURL: "https://etherwatch-1659d.firebaseio.com",
    projectId: "etherwatch-1659d",
    storageBucket: "etherwatch-1659d.appspot.com",
    messagingSenderId: "595784562003"
};

firebase.initializeApp(config);

// Sign User out of account and relocate them.
$("#signOutButton").on("click", () => {
    firebase.auth().signOut().then( () => {
        window.location.replace("../dashboard.html");
        localStorage.clear();   
    });
});

// List of Supported Currencies. Ability to add/remove currencies will be implemented in the future.
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

// Function for retrieving data from the selected API. Coinbase is currently hardcoded in. Will add more exchanges.
function runQuery() {
    $.ajax({ 
        url: 'https://api.coinbase.com/v2/prices/' + currencies[0] + '/spot', 
        method: "GET" 
    }).then(function(coinData) {
        BTC_Val = coinData.data.amount;
        $('#spread-BTC').html(coinData.data.amount)
        $('#price-BTC').html('$' + coinData.data.amount)
        $('#BTC-USD').html('<h2>$ '+ coinData.data.amount + '</h2>');
    });

    $.ajax({ 
        url: 'https://api.coinbase.com/v2/prices/' + currencies[1] + '/spot', 
        method: "GET" 
    }).then(function(coinData) {
        ETH_Val = coinData.data.amount;
        $('#spread-ETH').html(coinData.data.amount)
        $('#price-ETH').html('$' + coinData.data.amount)
        $('#ETH-USD').html('<h2>$ '+ coinData.data.amount + '</h2>');
    });

    $.ajax({ 
        url: 'https://api.coinbase.com/v2/prices/' + currencies[2] + '/spot', 
        method: "GET" 
    }).then(function(coinData) {
        LTC_Val = coinData.data.amount;
        $('#spread-LTC').html(coinData.data.amount)
        $('#price-LTC').html('$' + coinData.data.amount)
        $('#LTC-USD').html('<h2>$ '+ coinData.data.amount + '</h2>');
    });
}


// Initial bootup preferences and button functions.
$(document).ready(function() {
    runQuery();

    $("#BTC-Tab").hide();
    $("#ETH-Tab").hide();
    $("#LTC-Tab").hide();
    $('#cryptoTab').fadeIn('fast');
    $("#Over-Tab").fadeIn('slow');
    $("#spreadView").hide();
});

setInterval(function(){
    runQuery();
}, 20000);

$('.Over-Btn').click(function(){
    $('#Over-Tab').fadeIn();
    $("#BTC-Tab").hide();
    $("#ETH-Tab").hide();
    $("#LTC-Tab").hide();
})

$('.returnOver').click(function(){
    $('#Over-Tab').fadeIn();
    $("#BTC-Tab").hide();
    $("#ETH-Tab").hide();
    $("#LTC-Tab").hide();
})

$('.BTC-Btn').click(function(){
    $('#Over-Tab').hide();
    $("#BTC-Tab").fadeIn();
    $("#ETH-Tab").hide();
    $("#LTC-Tab").hide();
})

$('.ETH-Btn').click(function(){
    $('#Over-Tab').hide();
    $("#BTC-Tab").hide();
    $("#ETH-Tab").fadeIn();
    $("#LTC-Tab").hide();
})

$('.LTC-Btn').click(function(){
    $('#Over-Tab').hide();
    $("#BTC-Tab").hide();
    $("#ETH-Tab").hide();
    $("#LTC-Tab").fadeIn();
})

$('#buttonViewShow').click(function(){
    $("#buttonView").fadeIn();
    $("#spreadView").hide();
})

$('#spreadViewShow').click(function(){
    $("#buttonView").hide();
    $("#spreadView").fadeIn();
})

// Relocates the User if they arent authorized to be in the dashboard (not logged in).
var pathname = window.location.pathname;

if (pathname === "/dashboard.html") {
  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
    } else {
      window.location.replace("../login.html");
    }
  });
}