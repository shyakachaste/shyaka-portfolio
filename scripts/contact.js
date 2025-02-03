document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('hire-form');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const formData = new FormData(form);
        const name = formData.get('name');
        const contact = formData.get('contact');
        const message = formData.get('message');

        const emailBody = `
            Name: ${name}\n
            Contact Info: ${contact}\n
            Message: ${message}
        `;

        window.location.href = `mailto:shyakachaste1@gmail.com?subject=Hire%20Me%20Request&body=${encodeURIComponent(emailBody)}`;
    });
});