function ajustarScroll () {

   let ancho = window.screen.width;

   let op1, op2, op3, op4, op5;

    if (ancho <= 435) {
        op1 = {
            top: 0,
            left: 0,
            behavior: 'smooth'
        }
        
        op2 = {
            top: 400,
            left: 0,
            behavior: 'smooth'
        }
        
        op3 = {
            top: 1710,
            left: 0,
            behavior: 'smooth'
        }
        
        op4 = {
            top: 2830,
            left: 0,
            behavior: 'smooth'
        }
        
        op5 = {
            top: 10000,
            left: 0,
            behavior: 'smooth'
        }
    } else if (ancho <= 615) {
        op1 = {
            top: 0,
            left: 0,
            behavior: 'smooth'
        }
        
        op2 = {
            top: 380,
            left: 0,
            behavior: 'smooth'
        }
        
        op3 = {
            top: 1510,
            left: 0,
            behavior: 'smooth'
        }
        
        op4 = {
            top: 2590,
            left: 0,
            behavior: 'smooth'
        }
        
        op5 = {
            top: 10000,
            left: 0,
            behavior: 'smooth'
        }
    } else if (ancho <= 768 || ancho <= 1024) {
        op1 = {
            top: 0,
            left: 0,
            behavior: 'smooth'
        }
        
        op2 = {
            top: 580,
            left: 0,
            behavior: 'smooth'
        }
        
        op3 = {
            top: 1790,
            left: 0,
            behavior: 'smooth'
        }
        
        op4 = {
            top: 3200,
            left: 0,
            behavior: 'smooth'
        }
        
        op5 = {
            top: 10000,
            left: 0,
            behavior: 'smooth'
        }
    }
    else {
        op1 = {
            top: 0,
            left: 0,
            behavior: 'smooth'
        }
        
        op2 = {
            top: 700,
            left: 0,
            behavior: 'smooth'
        }
        
        op3 = {
            top: 1500,
            left: 0,
            behavior: 'smooth'
        }
        
        op4 = {
            top: 3200,
            left: 0,
            behavior: 'smooth'
        }
        
        op5 = {
            top: 10000,
            left: 0,
            behavior: 'smooth'
        }
    }
    
    let inicio = document.getElementById('inicio');
    
    inicio.addEventListener('click', function () {
        window.scroll(op1);
    });
    
    
    let quienes = document.getElementById('quienes');
    
    quienes.addEventListener('click', function () {
        window.scroll(op2);
    });
    
    
    let clases = document.getElementById('clases');
    
    clases.addEventListener('click', function () {
        window.scroll(op3);
    });
    
    
    let novedades = document.getElementById('novedades');
    
    novedades.addEventListener('click', function () {
        window.scroll(op4);
    });
    
    
    let contacto = document.getElementById('contacto');
    
    contacto.addEventListener('click', function () {
        window.scroll(op5);
    });
}

window.addEventListener('resize', ajustarScroll);

ajustarScroll();