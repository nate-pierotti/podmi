function signup() {

    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var email = document.getElementById("email").value;
    var state = document.getElementById("state").value;
    
    var ref = new Firebase("https://popping-heat-9236.firebaseio.com/");
    ref.createUser({
        username: username,
        password: password,
        email: email,
        state: state
    }, function(error, userData) {
        if (error) {
            console.log("Error creating user:", error);
        } else {
            console.log("Successfully created user account with uid:", userData.uid);
            alert("Successfully Created Account!");
            window.location = "https://senior-design-nate-pierotti.c9user.io/index.html";
        }
    });
}