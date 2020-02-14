
 //Your web app's Firebase configuration
 var firebaseConfig = {
   apiKey: "AIzaSyBH__osJseRkkYYIfdacIHn2Rpkz_dYVjk",
   authDomain: "contactform-8a5ed.firebaseapp.com",
   databaseURL: "https://contactform-8a5ed.firebaseio.com",
   projectId: "contactform-8a5ed",
   storageBucket: "contactform-8a5ed.appspot.com",
   messagingSenderId: "260071292649",
   appId: "1:260071292649:web:6ebfce9372787a52003a78",
   measurementId: "G-EGYLGQNN33"
 };
 // Initialize Firebase
 firebase.initializeApp(firebaseConfig);
  
  // Reference messages collection
  var messagesRef = firebase.database().ref('messages');
  
  // Listen for form submit
  document.getElementById('contactForm').addEventListener('submit', submitForm);
  
  // Submit form
  function submitForm(e){
    e.preventDefault();
  
    // Get values
    var name = getInputVal('name');
    var phone = getInputVal('contact number');
    var email = getInputVal('email');
    var message = getInputVal('message');
  
    // Save message
    saveMessage(name, phone, email, message);
  
    // Show alert
    document.querySelector('.alert').style.display = 'block';
  
    // Hide alert after 3 seconds
    setTimeout(function(){
      document.querySelector('.alert').style.display = 'none';
    },3000);
  
    // Clear form
    document.getElementById('contactForm').reset();
  }
  
  // Function to get get form values
  function getInputVal(id){
    return document.getElementById(id).value;
  }
  
  // Save message to firebase
  function saveMessage(name, phone, email, message){
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
      name: name,
      phone:phone,
      email:email,
      message:message
    });
  }
