

const carousel = document.querySelector('#carrusel');

carousel.addEventListener('wheel', (i) => {
    e.preventDefault();

    carousel.scrollBy({
        left: e.deltaY < 0 ? -300 : 300,
    });
});
/*
const imageContainers = document.querySelectorAll
('figure')

const observer = new IntersectionObserver(callback, {
    threshold: .8
})

function callback(entries){

    entries.forEach(entry => {
        
        const image = entry.target.querySelector('img');
        image.classList.toggle('unset', entry.
            isIntersecting);

    });
}

imageContainers.forEach(container =>{
    observer.observe(container);
})
<<<<<<< HEAD
const texto1 = document.getElementById("miTexto");  
let visible = true;  

function parpadearTexto() {  
  texto1.style.opacity = visible ? 1 : 0; 
  visible = !visible; 
  
  setTimeout(() => {  
    requestAnimationFrame(parpadearTexto);  
  }, 1000); }  

requestAnimationFrame(parpadearTexto); 
=======
*/
>>>>>>> 42c59811f42b5df87db9b47418d28c409f40ebf0
