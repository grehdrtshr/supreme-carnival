
// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyBMKM3tIn6uQaSqGzie7__2KcQCdrRm41Q",
  authDomain: "umm-what-am-i-doing-again.firebaseapp.com",
  projectId: "umm-what-am-i-doing-again",
  storageBucket: "umm-what-am-i-doing-again.appspot.com",
  messagingSenderId: "188165925125",
  appId: "1:188165925125:web:c12d78ebfeab2e58e5ef6c"
};

// Initialize Firebase
firebase . initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code

    //End code
    });});}
getData();
