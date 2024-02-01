
/* PESTAÑA DE RESPONSIVE EN CABECERA ***************************/

/* Recojo el botón a través de su id */
const botonMenu = document.getElementById("menu-boton");
/* Recojo elementos de navegación */
const menuCabecera = document.querySelector(".navegacion");
/* Evento de click en el botón */
botonMenu.addEventListener("click", ()=>{
    /* Cambio la clase del menu en la cabecera a navegacion--visible */
    menuCabecera.classList.toggle("navegacion--visible");
    
});

/* FIN PESTAÑA DE RESPONSIVE EN CABECERA ***************************/

/* BOTÓN DE SCROLL HACIA ARRIBA ************************************/

/* Evento de cuando carga el DOM */
document.addEventListener("DOMContentLoaded", function() {
    /* Recojo el botón */
    var botonVolverArriba = document.getElementById('botonVolverArriba');
    /* Evento de ventana de scroll */
    window.addEventListener('scroll', function() {
        /* Si se ha scrolleado hacia abajo 300px */
        if (window.scrollY > 300) {
            /* Hacemos que aparezca el botón */
            botonVolverArriba.style.display = 'block';
            /* En caso de no haber scrolleado tanto */
        } else {
            /* Que no se vea el botón */
            botonVolverArriba.style.display = 'none';
        }
    });

    /* Evento de click en el botón */
    botonVolverArriba.addEventListener('click', function() {
        /* Se scrollea hasta arriba del todo suavemente */
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});

/* FIN BOTÓN DE SCROLL HACIA ARRIBA ************************************/

/* BOTÓN MODO OSCURO ***********************************************/
/* Recojo el botón y el link */
const btn = document.getElementById("md");
const link = document.getElementById("estilo");

// Función para cambiar entre modo oscuro y claro
function cambiarModo() {
    // Verificar el estado actual del modo en localStorage
    const modoActual = localStorage.getItem("modo");
    
    // Si el modo actual es oscuro, cambiar a claro y viceversa
    if (modoActual === "oscuro") {
        link.href = "stylesWhite.css"; // Cambiar a estilo claro
        btn.src = "img/LunaMO.png"; // Poner imagen de luna
        localStorage.setItem("modo", "claro"); // Guardar el estado en localStorage
        // Remover eventos de mouseenter y mouseleave
        logo.removeEventListener("mouseenter", logoMouseEnterHandler);
        logo.removeEventListener("mouseleave", logoMouseLeaveHandler);
        //Agregar otros eventos para el claro
        logo.addEventListener("mouseenter", logoClaroMouseEnterHandler);
        logo.addEventListener("mouseleave", logoClaroMouseLeaveHandler);
    } else {
        link.href = "styles.css"; // Cambiar a estilo oscuro
        btn.src = "img/SolMO.png"; // Cambiar imagen a Sol
        localStorage.setItem("modo", "oscuro"); // Guardar el estado en localStorage
        // Remover eventos de mouseenter y mouseleave
        logo.removeEventListener("mouseenter", logoClaroMouseEnterHandler);
        logo.removeEventListener("mouseleave", logoClaroMouseLeaveHandler);
        // Agregar eventos de mouseenter y mouseleave
        logo.addEventListener("mouseenter", logoMouseEnterHandler);
        logo.addEventListener("mouseleave", logoMouseLeaveHandler);
        
    }
}

// Escuchar el evento de clic en el botón
btn.addEventListener("click", cambiarModo);

/* Recojo el logo */
const logo = document.getElementById("logo");

// Funciones de control de eventos para el logo
function logoMouseEnterHandler(event) {
    logo.src = "img/LogoAnimado.gif"; /* Pongo un gif en el logo */
}

function logoMouseLeaveHandler() {
    logo.src = "img/logoOP.png"; /* Pongo el logo normal */
}

// Funciones de control de eventos para el logo
function logoClaroMouseEnterHandler(event) {
    logo.src = "img/AnimaciónClaro.gif"; /* Pongo un gif en el logo */
}

function logoClaroMouseLeaveHandler() {
    logo.src = "img/logoOP.png"; /* Pongo el logo normal */
}

// Al cargar la página, verificar y aplicar el modo almacenado en localStorage
window.addEventListener("load", function() {
    /* Obtenemos el modo actual en una variable */
    const modoAlmacenado = localStorage.getItem("modo");
    if (modoAlmacenado) {
        /* Si el modo es oscuro */
        if (modoAlmacenado === "oscuro") {
            link.href = "styles.css"; // Cambiar a estilo oscuro
            btn.src = "img/SolMO.png"; //Poner imagen de Sol
            /* Agrego eventos */
            logo.addEventListener("mouseenter", logoMouseEnterHandler);
            logo.addEventListener("mouseleave", logoMouseLeaveHandler);
            /* Si el modo es claro */
        } else {
            link.href = "stylesWhite.css"; // Cambiar a estilo claro
            btn.src = "img/LunaMO.png"; // Pongo imagen de luna
        }
    }
});

/* FIN BOTÓN MODO OSCURO ***********************************************/






