const  div = document.querySelector(".nombreods"),
  texto = "Ciudades Y Comunidades Sostenibles";

function efectoTextTyping (elemento,texto,i = 0){
    elemento.textContent += texto[i];

if (i == texto.length - 1) return;

    setTimeout(() => efectoTextTyping(div,texto,i + 1) ,20);
   
}

efectoTextTyping(div, texto)