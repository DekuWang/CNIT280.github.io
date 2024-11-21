// Login API : http://150.158.98.116:8088/api/v1/sync/sapi-JhlaSSieDOpw/s?
// password=INPUT_BY_CALLER&input_username=INPUT_BY_CALLER

// var cors_solution = `https://cors-anywhere.herokuapp.com/`
var cors_solution = ``

function validateLogin() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    var login_request = `http://150.158.98.116:8088/api/v1/sync/sapi-JhlaSSieDOpw/s?input_username=${username}&password=${password}`;

    console.log(cors_solution + login_request);

    fetch(cors_solution + login_request, {headers: {
        'origin' : 'http://150.158.98.116:8088/api/v1/sync/sapi-JhlaSSieDOpw/s'
    }
    })
    .then(response => response.json())
    .then(data => {
        const userDB = data;

        // success_code = 5000
        if (userDB["code"] == 5000) {
            alert("login_success");
            document.cookie = `username=${userDB["username"]}; expires = ${1}`;
            document.cookie = `shownname=${userDB["shownname"]}`;
            redirection(userDB["username"], userDB["shownname"]);
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
    var email = document.getElementById("email").value;
    var shownname = document.getElementById("preferred-name").value;

    var register_request = `http://150.158.98.116:8088/api/v1/sync/sapi-3uLhKWhTX19z/s?email=${email}&password=${password}&shownname=${shownname}&input_username=${username}`;

    fetch(cors_solution + register_request, {headers: {
        'origin' : 'http://150.158.98.116:8088/api/v1/sync/sapi-3uLhKWhTX19z/s'
    }})
    .then(response => response.json())
    .then(data => {
        const result = data;

        // success_code = 5000
        if (result["code"] == 5000) {
            alert(result["message"]);
            // redirection(username);
            window.location.href = `index.html`;
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



function redirection(username = NaN, shownname = NaN) {
    window.location.href = `customer_portal.html?username=${username}&shownname=${shownname}`;
}

function test(){
    fetch("./users.json")
    .then(response => response.json())
    .then(data => {
        console.log(data);
        console.log(data["admin"]["password"]);
    })
}
