
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
  // var firstName = ;
  // var lastName = ;
  // var email = ;
  // var password = ;
  
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
  
    // window.location.replace("../index.html");
    });
  
    //Auth Check
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        window.location.replace("../dashboard.html");
      }
    });
});

var pathname = window.location.pathname;

if (pathname != "/login.html") {
  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {} else {
       window.location.replace("../login.html");
     }
  });
}

//Signup Script
$("#ether-signup").on("click", function(event){
  event.preventDefault();

  var first_name = $("#first-name-signup").val();
  var last_name = $("#last-name-signup").val();
  var email = $("#email-signup").val();
  var password = $("#password-signup").val();

  if (email.length < 4) {
    alert('Please enter a valid email address.');
    return;
  }
  if (password.length < 4) {
    alert('Passwords must contain more than 4 characters.');
    return;
  }

  firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // ...
  });

  //Auth Check
  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      window.location.replace("../dashboard.html");
    }
  });
});
