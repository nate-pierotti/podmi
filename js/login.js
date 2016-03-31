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
            window.alert("successful");
            window.location.assign("https://senior-design-nate-pierotti.c9users.io/user.homepage.html");
        }
    });
}