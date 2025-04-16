document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contact');

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        alert('submitted successfully!');
        form.reset();
    });
});
