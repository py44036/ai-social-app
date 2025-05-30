document.addEventListener('DOMContentLoaded', function() {
    const uploadForm = document.getElementById('uploadForm');
    const messageDiv = document.getElementById('message');
    const previewDiv = document.getElementById('preview');

    if (uploadForm) {
        uploadForm.addEventListener('submit', async function(event) {
            event.preventDefault();

            const formData = new FormData(uploadForm);

            try {
                const response = await fetch('http://localhost:3000/upload', {
                    method: 'POST',
                    body: formData
                });

                const result = await response.json();

                if (result.fileUrl) {
                    messageDiv.innerHTML = `<span style="color: green;">Image uploaded successfully!</span>`;

                    // Show image preview
                    previewDiv.innerHTML = `
                        <img src="${result.fileUrl}" alt="Uploaded Image" style="max-width: 300px; border-radius: 8px; margin-top: 20px;" />
                        <p><a href="${result.fileUrl}" target="_blank">View Full Image</a></p>
                    `;
                } else {
                    messageDiv.innerHTML = `<span style="color: red;">Upload failed: ${result.message}</span>`;
                }
            } catch (error) {
                console.error('Error:', error);
                messageDiv.innerHTML = `<span style="color: red;">Error uploading image.</span>`;
            }
        });
    }
});