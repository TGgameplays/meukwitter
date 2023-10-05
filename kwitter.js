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
function addUser() {

    user_name = document.getElementById("user_name").value;
  
    localStorage.setItem("user_name", user_name);
    
      window.location = "kwitter_room.html";
  }