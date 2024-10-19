// Login API : http://150.158.98.116:8088/api/v1/sync/sapi-JhlaSSieDOpw/s?
// password=INPUT_BY_CALLER&input_username=INPUT_BY_CALLER

function validateLogin() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    var login_request = `http://150.158.98.116:8088/api/v1/sync/sapi-JhlaSSieDOpw/s?input_username=${username}&password=${password}`;

    fetch(login_request)
    .then(response => response.json())
    .then(data => {
        const userDB = data;

        // success_code = 5000
        if (userDB["code"] == 5000) {
            alert("login_success");
            redirection(userDB["username"]);
        } 
        else {
            alert("login_fail");
        }
    }
)
}

function registerUser() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    var register_request = `http://150.158.98.116:8088/api/v1/sync/sapi-3uLhKWhTX19z/s?password=${password}&input_username=${username}`;

    fetch(register_request)
    .then(response => response.json())
    .then(data => {
        const result = data;

        // success_code = 5000
        if (result["code"] == 5000) {
            alert(result["message"]);
            redirection(username);
        } 
        else {
            alert(result["message"]);
        }
    }
)
}

//     fetch("./database/users.json")
//     .then(response => response.json())
//     .then(data => {
//         const userDB = data;

//         // Simple validation logic
//         if (userDB[username] && userDB[username]["password"] == password) {
//             alert("login_success");
//             redirection(userDB[username]["shown_name"]);
//         } else {
//             alert("login_fail");
//         }
//     }
// )
// }



function redirection(username = NaN){
    window.location.href = `customer_portal.html?username=${username}`;
}

function test(){
    fetch("./users.json")
    .then(response => response.json())
    .then(data => {
        console.log(data);
        console.log(data["admin"]["password"]);
    })
}
