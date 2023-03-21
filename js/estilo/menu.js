// Asignar alto de la pantalla del dispositivo al menu de navegacion
function redimencionar() {
    let alto = window.screen.height;

    const elemento = document.getElementById("menu");

    // console.log(`height: ${alto}`);

    elemento.style.height = `${alto + 200}px`;
}

redimencionar();

window.addEventListener('resize', redimencionar);