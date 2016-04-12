function login() {
    
    var userEmail = document.getElementById("email").value;
    var userPassword = document.getElementById("password").value;
    
    var ref = new Firebase("https://blinding-torch-889.firebaseio.com");
    ref.authWithPassword({
        email: userEmail,
        password: userPassword
    }, function(error, userData) {
        if (error) {
            console.log("Login Failed!", error)
            
            window.alert("Login Failed");
        } else {
            Materialize.toast('Logging in...', 4000);
            window.location.assign("https://blinding-torch-889.firebaseapp.com/user.homepage.html");
        }
    });
}