// ✅ Backend ka API URL
const backendURL = "http://localhost:3000"; // Yeh aapke backend ka base URL hai

// ✅ API Call Function
async function fetchUsers() {
    try {
        const response = await fetch(`${backendURL}/api/users`); // Backend se users ka data fetch karega
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        const data = await response.json();
        displayUsers(data);
    } catch (error) {
        console.error("Error fetching users:", error);
    }
}

// ✅ API Response Ko HTML Me Show Karna
function displayUsers(users) {
    const usersContainer = document.getElementById("usersContainer");
    usersContainer.innerHTML = ""; // Purana data clear karein
    users.forEach(user => {
        const userDiv = document.createElement("div");
        userDiv.textContent = `ID: ${user.id} - Name: ${user.name}`;
        usersContainer.appendChild(userDiv);
    });
}

// ✅ Button Click Event Listener
document.getElementById("loadUsers").addEventListener("click", fetchUsers);
// ✅ Image Upload Function
function uploadImage() {
    const fileInput = document.getElementById("imageUpload");
    const profilePic = document.getElementById("profilePic");

    const file = fileInput.files[0];
    if (!file) {
        alert("Please select an image file!");
        return;
    }

    const formData = new FormData();
    formData.append("image", file);

    fetch("http://localhost:3000/upload", {
        method: "POST",
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            profilePic.src = data.imageUrl; // ✅ Show uploaded image
        } else {
            alert("Image upload failed!");
        }
    })
    .catch(error => console.error("Error:", error));
}
