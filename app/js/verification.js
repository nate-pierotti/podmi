var ref = new Firebase("https://blinding-torch-889.firebaseio.com/");
var authData = ref.getAuth();

if (authData) {
    console.log("User " + authData.uid + " is logged is");
} else {
    console.log("User is not logged in");
    window.alert("You must be logged in to view this page.");
    window.location.assign("https://blinding-torch-889.firebaseapp.com/login.html");
}