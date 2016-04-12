$(document).ready(function() {
  var ref = new Firebase("https://blinding-torch-889.firebaseio.com/");
  var authData = ref.getAuth();
  
  $("#user-dropdown").text(authData.uid); 
});

function logout() {
    ref.unauth();
}