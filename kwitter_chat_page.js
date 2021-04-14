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
console.log(firebase_message_id);
console.log(message_data);
user_name= message_data["Username"];
message= message_data["Message"];
like= message_data["Like"];

name_with_tag= "<h4>"+user_name+"</h4>";
message_with_tag= "<h4 class='message_h4'>"+message+"</h4>";
like_button= "<button class='btn btn-warning' id="+firebase_message_id+" value="+like+" onclick='update_like(this.id)'>";
span_with_tag= "<span class='glyphicon glyphicon-thumbs-up'> Like:"+like+"</span></button><hr>";
row= name_with_tag+message_with_tag+like_button+span_with_tag;
document.getElementById("output").innerHTML+= row;
//End code
    } });  }); }
getData();

function update_like(message_id){
    console.log("Clicked on like button -  " +message_id);
    button_id= message_id;
    likes= document.getElementById(button_id).value;
    updated_likes= Number(likes)+ 1;
    console.log(updated_likes);
    firebase.database().ref(room_name).child(message_id).update({
          Like: updated_likes    
    });
}

function logout(){
    window.location = "index.html";
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
}
