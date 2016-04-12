function signup() {

    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var email = document.getElementById("email").value;
    var state = document.getElementById("state").value;
    
    var ref = new Firebase("https://blinding-torch-889.firebaseio.com");
    ref.createUser({
        email: email,
        password: password,
    }, function(error, userData) {
        if (error) {
            console.log("Error creating user:", error);
        } else {
            console.log("Successfully created user account with uid:", userData.uid);
            alert("Successfully Created Account!");
            window.location.assign("https://blinding-torch-889.firebaseapp.com/login.html");
        }
    });
}