document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting the traditional way
    const nombre = document.getElementsByName('nombre')[0].value;
    const email = document.getElementsByName('email')[0].value;
    const asunto = document.getElementsByName('asunto')[0].value;
    const mensaje = document.getElementsByName('mensaje')[0].value;

    const mailtoLink = `mailto:arizajuliane@gmail.com?subject=${encodeURIComponent(asunto)}&body=${encodeURIComponent(`Nombre: ${nombre}\nEmail: ${email}\n\nMensaje:\n${mensaje}`)}`;
    document.getElementById('enviar').href = mailtoLink;
    document.getElementById('enviar').click();
});

