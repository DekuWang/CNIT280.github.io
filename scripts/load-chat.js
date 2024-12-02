AI_CHAT_URL = "http://43.135.166.229:8088/api/v1/sync/sapi-m6UjmN6Ub3u6/s?user_message=";
CORS_Solution = "https://cors-anywhere.herokuapp.com/";

// load-chat.js
function loadChat() {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "chat-window.html", true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            document.body.insertAdjacentHTML('beforeend', xhr.responseText);
        }
    };
    xhr.send();
}

document.addEventListener("DOMContentLoaded", loadChat);

// Existing chat functions
function toggleChat() {
    const chatContent = document.getElementById("chat-content");
    if (chatContent.style.display === "block") {
        chatContent.style.display = "none";
    } else {
        chatContent.style.display = "block";
    }
}

function sendMessage() {
    const input = document.getElementById("chat-input");
    const message = input.value.trim();
    if (message) {
        const messagesDiv = document.querySelector(".messages");
        const newMessage = document.createElement("p");
        newMessage.textContent = message;
        messagesDiv.appendChild(newMessage);
        input.value = ""; // Clear the input field
        messagesDiv.scrollTop = messagesDiv.scrollHeight; // Auto-scroll
        responseMessage(newMessage);
    }
}

function responseMessage(message_input) {
    const messagesDiv = document.querySelector(".messages");
    const newMessage = document.createElement("p"); 
    
    console.log(message_input.textContent);
    fetch(CORS_Solution + AI_CHAT_URL + message_input.textContent, {
        method: "GET",
        headers: {
            "Origin": AI_CHAT_URL + message_input.textContent
        }
    }).then(function (response) {
        return response.json();
    }).then(function (data) {
        newMessage.textContent = data.content;
        console.log(data.content);
        messagesDiv.appendChild(newMessage);
        messagesDiv.scrollTop = messagesDiv.scrollHeight; // Auto-scroll
    });
}
