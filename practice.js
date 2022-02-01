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
//ADD YOUR FIREBASE LINKS HERE
function addUser()
{
    user_name=document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose:"addinguser"
    })
}