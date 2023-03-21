let imagenes = [
    document.querySelector('.quienes-somos .header-image'),
    document.querySelector('.clases .header-image'),
    document.querySelector('.contacto .header-image'),
    document.querySelector('.novedades .header-image')
];

let marcos = [
    document.querySelector('.quienes-somos'),
    document.querySelector('.clases'),
    document.querySelector('.contacto'),
    document.querySelector('.novedades')
];

for (let i = 0; i < 4; i++) {
    marcos[i].addEventListener('mouseover', function() {
        let imagen = imagenes[i];
        imagen.classList.toggle('escalar');   
    });
    
    marcos[i].addEventListener('mouseout', function() {
        let imagen = imagenes[i];
        imagen.classList.toggle('escalar');   
    });
}