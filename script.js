function validateLogin() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;


    fetch("./database/users.json")
    .then(response => response.json())
    .then(data => {
        const userDB = data;

        // Simple validation logic
        if (userDB[username] && userDB[username]["password"] == password) {
            alert("login_success");
            redirection(userDB[username]["shown_name"]);
        } else {
            alert("login_fail");
        }
    }
)}
function redirection(username = NaN){
    window.location.href = `after_login.html?username=${username}`;
}

function test(){
    fetch("./users.json")
    .then(response => response.json())
    .then(data => {
        console.log(data);
        console.log(data["admin"]["password"]);
    })
}
