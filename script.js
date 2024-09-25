var userDB = {
    "admin": {
        "password": "admin",
        "Username": "Admin"},
    "user1": {
        "password": "user1",
        "Username": "User1"},
};

function validateLogin() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Simple validation logic
    if (userDB[username] && userDB[username]["password"] == password) {
        alert("login_success");
        redirection(userDB[username]["Username"]);
    } else {
        alert("login_fail");
    }
}
function redirection(username = NaN){
    window.location.href = `after_login.html?username=${username}`;
}
