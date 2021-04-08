//YOUR FIREBASE LINKS
var firebaseConfig = {
    apiKey: "AIzaSyDjlaP75R790Hcvm-expkfU_UIiukXrWIY",
    authDomain: "lets-chat-project-e9e10.firebaseapp.com",
    databaseURL: "https://lets-chat-project-e9e10-default-rtdb.firebaseio.com",
    projectId: "lets-chat-project-e9e10",
    storageBucket: "lets-chat-project-e9e10.appspot.com",
    messagingSenderId: "946618845609",
    appId: "1:946618845609:web:58a504265214ce30af5cb8",
    measurementId: "G-LTP1YGC7D9"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
user_name= localStorage.getItem("user_name");
room_name= localStorage.getItem("room_name");

function send(){
    msg= document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
          Username: user_name,
          Message: msg,
          Like: 0
    });
    document.getElementById("msg").value = "";
}


function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
       firebase_message_id = childKey;
       message_data = childData;
//Start code

//End code
    } });  }); }
getData();
