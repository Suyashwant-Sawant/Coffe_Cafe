document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('feedback');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the default form submission

        // Perform any additional form validation or processing here

        // Show a prompt message
        alert('Feedback submitted successfully!');

        // Optionally, reset the form after submission
        form.reset();
    });
});
