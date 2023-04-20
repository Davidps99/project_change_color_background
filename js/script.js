//En este array de strings, tenemos todos los colores
const colors = ['red', 'green', 'blue', 'yellow', 'pink', 'purple']


document.querySelector("button").addEventListener("click", function() {

    const randomIndice = Math.floor(Math.random() * colors.length);

    document.body.style.backgroundColor = colors[randomIndice];

});