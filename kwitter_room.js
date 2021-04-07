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

  user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = user_name;

function add_room() {
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose: "adding room name"
      });
      localStorage.setItem("room_name", room_name);
      window.location = "kwitter_page.html";
      document.getElementById("room_name").value = "";
}

function getData() {
      firebase.database().ref("/").on('value', function (snapshot) {
            document.getElementById("output").innerHTML = "";
            snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  Room_names = childKey;
                  //Start code
                  console.log(Room_names);
                  row="<div class='room_name' id="+Room_names+" onclick='redirect_to_room_name(this.id)'> #"+ Room_names+ "</div> <hr>";
                  document.getElementById("output").innerHTML += row;
                  //End code
            });
      });
}
getData();

function redirect_to_room_name(name){
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_chat_page.html";
}

function logout(){
      window.location = "index.html";
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
}