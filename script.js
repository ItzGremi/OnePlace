const botonMenu = document.getElementById("menu-boton");
const menuCabecera = document.querySelector(".navegacion");
botonMenu.addEventListener("click", ()=>{

    menuCabecera.classList.toggle("navegacion--visible");
    
});

document.addEventListener("DOMContentLoaded", function() {
    var botonVolverArriba = document.getElementById('botonVolverArriba');

    window.addEventListener('scroll', function() {
        if (window.scrollY > 300) {
            botonVolverArriba.style.display = 'block';
        } else {
            botonVolverArriba.style.display = 'none';
        }
    });

    botonVolverArriba.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});

/* Botón modo oscuro */
const btn = document.getElementById("md");
const link = document.getElementById("estilo");

// Función para cambiar entre modo oscuro y claro
function cambiarModo() {
    // Verificar el estado actual del modo en localStorage
    const modoActual = localStorage.getItem("modo");
    
    // Si el modo actual es oscuro, cambiar a claro y viceversa
    if (modoActual === "oscuro") {
        link.href = "stylesWhite.css"; // Cambiar a estilo claro
        btn.src = "img/LunaMO.png";
        localStorage.setItem("modo", "claro"); // Guardar el estado en localStorage
        // Remover eventos de mouseenter y mouseleave
        logo.removeEventListener("mouseenter", logoMouseEnterHandler);
        logo.removeEventListener("mouseleave", logoMouseLeaveHandler);
        logo.addEventListener("mouseenter", logoClaroMouseEnterHandler);
        logo.addEventListener("mouseleave", logoClaroMouseLeaveHandler);
    } else {
        link.href = "styles.css"; // Cambiar a estilo oscuro
        btn.src = "img/SolMO.png";
        localStorage.setItem("modo", "oscuro"); // Guardar el estado en localStorage
        // Agregar eventos de mouseenter y mouseleave
        logo.removeEventListener("mouseenter", logoClaroMouseEnterHandler);
        logo.removeEventListener("mouseleave", logoClaroMouseLeaveHandler);
        logo.addEventListener("mouseenter", logoMouseEnterHandler);
        logo.addEventListener("mouseleave", logoMouseLeaveHandler);
        
    }
}

// Escuchar el evento de clic en el botón
btn.addEventListener("click", cambiarModo);

const logo = document.getElementById("logo");

// Funciones de control de eventos para el logo
function logoMouseEnterHandler(event) {
    logo.src = "img/LogoAnimado.gif";
}

function logoMouseLeaveHandler() {
    logo.src = "img/logoOP.png";
}

// Funciones de control de eventos para el logo
function logoClaroMouseEnterHandler(event) {
    logo.src = "img/AnimaciónClaro.gif";
}

function logoClaroMouseLeaveHandler() {
    logo.src = "img/logoOP.png";
}

// Al cargar la página, verificar y aplicar el modo almacenado en localStorage
window.addEventListener("load", function() {
    const modoAlmacenado = localStorage.getItem("modo");
    if (modoAlmacenado) {
        if (modoAlmacenado === "oscuro") {
            link.href = "styles.css"; // Cambiar a estilo oscuro
            btn.src = "img/SolMO.png";
            logo.addEventListener("mouseenter", logoMouseEnterHandler);
            logo.addEventListener("mouseleave", logoMouseLeaveHandler);
        } else {
            link.href = "stylesWhite.css"; // Cambiar a estilo claro
            btn.src = "img/LunaMO.png";
        }
    }
});






