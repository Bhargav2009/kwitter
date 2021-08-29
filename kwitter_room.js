// Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
      apiKey: "AIzaSyCZ_hFbPcrJ0Vunoi6LuQzGPNeCeYGPDcg",
      authDomain: "class-test-ece35.firebaseapp.com",
      projectId: "class-test-ece35",
      storageBucket: "class-test-ece35.appspot.com",
      messagingSenderId: "959290177626",
      appId: "1:959290177626:web:3ecc6323125a3f218cc063",
      measurementId: "G-V562RD6HJ6"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    firebase.analytics();
//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
