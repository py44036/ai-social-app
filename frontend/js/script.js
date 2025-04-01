// JavaScript Code for Interactivity
document.addEventListener("DOMContentLoaded", function () {
    console.log("AI Social App Loaded!");

    let navLinks = document.querySelectorAll("nav ul li a");
    navLinks.forEach(link => {
        link.addEventListener("click", function (event) {
            alert("Navigating to " + link.innerText);
        });
    });
});// Header ko dynamically load karne ka function
document.addEventListener("DOMContentLoaded", function () {
    fetch("/components/header.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("header").innerHTML = data;
        })
        .catch(error => console.error("Error loading header:", error));
});// Messages Page ke liye
document.addEventListener("DOMContentLoaded", function () {
    const messagesContainer = document.getElementById("usersContainer");
    if (messagesContainer) {
        messagesContainer.innerHTML = "<p>Loading messages...</p>";

        setTimeout(() => {
            messagesContainer.innerHTML = `
                <ul>
                    <li>📩 Message 1: Hello! How are you?</li>
                    <li>📩 Message 2: Let's catch up tomorrow.</li>
                    <li>📩 Message 3: Meeting at 5 PM.</li>
                </ul>
            `;
        }, 2000); // Simulating data load after 2 seconds
    }
});