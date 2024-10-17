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
        responseMessage();
    }
}

function responseMessage() {
    const messagesDiv = document.querySelector(".messages");
    const newMessage = document.createElement("p");
    newMessage.textContent = "I'm sorry, I don't understand.";
    messagesDiv.appendChild(newMessage);
    messagesDiv.scrollTop = messagesDiv.scrollHeight; // Auto-scroll
}
