//YOUR FIREBASE LINKS
// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyD2My0ZHla_v0G7faugNM0eAEQoLRoU3s0",
      authDomain: "kwitter-class-test-29bd7.firebaseapp.com",
      databaseURL: "https://kwitter-class-test-29bd7-default-rtdb.firebaseio.com",
      projectId: "kwitter-class-test-29bd7",
      storageBucket: "kwitter-class-test-29bd7.appspot.com",
      messagingSenderId: "74246776114",
      appId: "1:74246776114:web:e7592ed4cdb9c66b58232b"
    };
    
    // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
