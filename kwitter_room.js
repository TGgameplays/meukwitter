
//ADICIONE SEUS LINKS DO FIREBASE

const firebaseConfig = {
    apiKey: "AIzaSyDOKaoP1XDrmR_QrGhzXLgyeK7PjX3mV3I",
    authDomain: "rede-ad0f6.firebaseapp.com",
    databaseURL: "https://rede-ad0f6-default-rtdb.firebaseio.com",
    projectId: "rede-ad0f6",
    storageBucket: "rede-ad0f6.appspot.com",
    messagingSenderId: "646212663894",
    appId: "1:646212663894:web:1dea451d0a681cb08f19f7"
  };
  
  
  
  
  
      firebase.initializeApp(firebaseConfig);
    
  user_name = localStorage.getItem("user_name");
  
  document.getElementById("user_name").innerHTML = "Bem-vindo(a) " + user_name + "!";
  
  function addRoom()
  {
    room_name = document.getElementById("room_name").value;
  
    firebase.database().ref("/").child(room_name).update({
      purpose : "adicionando nome da sala"
    });
  
      localStorage.setItem("room_name", room_name);
      
      window.location = "kwitter_page.html";
  }
  
  function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
         Room_names = childKey;
         console.log("Nome da Sala - " + Room_names);
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
      window.location = "kwitter_page.html";
  }
  
  function logout() {
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
      window.location = "inde.html";
  }