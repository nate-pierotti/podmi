function login() {
    
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    
    var ref = new Firebase("https://vivid-fire-1244.firebaseio.com/");
    ref.authWithPassword({
        email: email,
        password: password
    }, function(error, userData) {
        if (error) {
            console.log("Login Failed!", error);
        } else {
            console.log("Authenticated successfully with payload:", authData);
        }
    });
}