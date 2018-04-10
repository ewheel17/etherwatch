
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

var database = firebase.database();

$("#initialSignUp").on("click", () => {
  var firstName = ;
  var lastName = ;
  var email = ;
  var password = ;
  
  firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // ...
      console.log("authworked");
    });
});

//Login Auth
$("#submit-auth").on("click", function(event){
    event.preventDefault();
  
    var email = $("#email-input").val().trim();
    var password = $("#password-input").val().trim();
  
    firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
  
    });
  
    //Auth Check
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        window.location.replace("../dashboard.html");
      }
    });
});

// //Auth Check & User Log
// var pathname = window.location.pathname;

// if (pathname != "/index.html") {
//   firebase.auth().onAuthStateChanged(function(user) {
//     if (user) {} else {
//       window.location.replace("../index.html");
//     }
//   });
// }
