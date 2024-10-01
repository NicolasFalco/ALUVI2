document.getElementById('whatsappForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Evitar que el formulario se envíe de forma tradicional
    var mensaje = document.getElementById('mensaje').value;
    
    // Codificar el mensaje para que sea compatible con la URL
    var mensajeCodificado = encodeURIComponent(mensaje);
    
    // Número de WhatsApp y creación del enlace
    var numero = '5493571666993'; // Reemplazar con el número de destino
    var url = `https://wa.me/${numero}?text=${mensajeCodificado}`;
    
    // Redirigir al enlace de WhatsApp
    window.open(url, '_blank');
});
