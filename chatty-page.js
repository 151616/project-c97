var firebaseConfig = {
    apiKey: "AIzaSyADAPcceRNb3qH2h-aHJ1Sqm1PxH5PEuOc",
    authDomain: "project-97-95824.firebaseapp.com",
    databaseURL: "https://project-97-95824-default-rtdb.firebaseio.com",
    projectId: "project-97-95824",
    storageBucket: "project-97-95824.appspot.com",
    messagingSenderId: "432915363218",
    appId: "1:432915363218:web:01040802d88ae2013f3d4b"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

username = localStorage.getItem("username");
title = document.getElementById("title").innerHTML = "Welcome, " + username + "!";
user_name = localStorage.getItem("username");
document.getElementById("user_name").innerHTML = "Welcome, " + user_name + "!";

function logout(){
    window.location = "logout.html";
}

function add_room(){
    room_name = document.getElementById("room_name").value;
    firebase.database().ref("/").child(room_name).update({
          purpose: "adding room name"
    })
    localStorage.setItem("room_name", room_name);
    window.location = "chatting-page.html";
}


function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
    });
  });

}

getData();

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
    window.location = "chatting-page.html";
}