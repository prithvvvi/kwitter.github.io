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
user_name=localStorage.getItem("user_name");
user_name=localStorage.getItem("room_name");
document.getElementById("user_name").innerHTML="welcome "+user_name+" !"

function addUser()
{
    user_name=document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose:"addinguser"
    })
}
function addRoom()
{
      room_name = document.getElementById("room_name").value;
      friebase.document().ref("/").child(room_name).update({
            purpose : "addingroom name"
      });
      localStorage.setitem("room_name",room_name);
      window.location = "kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("roomname: "+Room_names);
      row="<div class='room_name' id='+Room_names+' onclick='redirectToRoomName(this.id)'>#" +Room_names +"</div><hr>";
      document.getElementById("output").innerHTML+=row;
      //End code
      });});}
getData();
function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name",name);
      window.location="kwitter_page.html";
}
function logout()
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
}
function send(){
      msg=document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            Name:user_name,
            message:msg,
            like:0
      });

      document.getElementById("msg").value = "";
}