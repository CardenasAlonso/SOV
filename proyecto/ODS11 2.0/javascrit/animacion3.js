document.addEventListener("DOMContentLoaded", function() {  
    const texto = document.getElementById("texto");  
    
    // Esperar un momento antes de iniciar la animación  
    setTimeout(() => {  
        texto.style.transform = 'translateY(0)'; // Regresa a su posición original  
        texto.style.opacity = 1; // Cambia la opacidad a 1 para hacerlo visible  
    }, 700); // Cambia el intervalo a tiempo que desees (en milisegundos)  
});