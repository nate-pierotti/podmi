function login() {
    
    alert("Hey");
    
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    
    var ref = new Firebase("https://popping-heat-9236.firebaseio.com/");
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