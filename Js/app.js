// Traducción

const translations = {
    es: {
        sobreMi: "Sobre Mi",
        proyectos: "Proyectos",
        habilidades: "Habilidades",
        contacto: "Contacto",
        holaSoy: "Hola, Soy",
        disponible: "Disponible para trabajar",
        descripcion: "Desarrollador Web Trainee, enfocado en Front-end, que se especializa en la creación de sitios web responsivos y accesibles, con experiencia en HTML, CSS y JavaScript, mejorando constantemente mis habilidades.",
        verCv: "Ver CV",
        habilidadesdes:"Soy un desarrollador web front-end,  tengo 22 años, y me encuentro dando mis primeros pasos en este fascinante campo. Mi pasión por aprender me impulsa constantemente a investigar nuevas tecnologías y técnicas, me especializo en crear diseños web responsivos para dispositivos móviles, tablets y computadoras de escritorio, asegurando que cada proyecto ofrezca una experiencia fluida y atractiva en cualquier pantalla, algunas de mis habilidades son las siguientes:",
        derechos: "Todos los derechos reservados.",
        contacto:"Contacto"
    },
    en: {
        sobreMi: "About Me",
        proyectos: "Projects",
        habilidades: "Skills",
        contacto: "Contact",
        holaSoy: "Hello, I am",
        disponible: "Available for Work",
        descripcion: "Trainee Web Developer, focused on Front-end, specializing in creating responsive and accessible websites, with experience in HTML, CSS, and JavaScript, constantly improving my skills.",
        verCv: "Resume",
        habilidadesdes:"I am a 22 year-old front-end web developer, taking my first steps in this fascinating field. My passion for learning constantly drives me to explore new technologies and techniques. I specialize in creating responsive web designs for mobile devices, tablets, and desktop computers, ensuring that every project offers a smooth and engaging experience on any screen. Some of my skills are as follows:",
        derechos: "All rights reserved.",
        contacto:"Contact"
    }
};

function changeLanguage(language) {
    let elements = document.querySelectorAll('.lang');
    elements.forEach((element) => {
        let key = element.getAttribute('key');
        // Solo actualiza el contenido de texto
        if (translations[language][key]) {
            element.textContent = translations[language][key];
        }
    });

    document.documentElement.lang = language;
}



// Fin de lenguaje


document.addEventListener('DOMContentLoaded', function () {
    // Ocultar la pantalla de carga cuando la página esté completamente cargada
    const loader = document.querySelector('.loader');
    window.addEventListener('load', function () {
        loader.style.display = 'none';
    });
});


document.addEventListener('DOMContentLoaded', function () {
    // Inicializar AOS
    AOS.init();
});


document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll('div[id]');
    const navLinks = document.querySelectorAll('.nav-bar a');

    const options = {
        threshold: 0.6
    };

    let observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href').substring(1) === entry.target.id) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }, options);

    sections.forEach(section => {
        observer.observe(section);
    });
});


document.addEventListener('DOMContentLoaded', function() {
    const habilidades = document.querySelector('.habilidades');
    habilidades.style.opacity = 0;
    habilidades.style.transition = 'opacity 1s';
    
    window.addEventListener('scroll', function() {
        const top = habilidades.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (top < windowHeight) {
            habilidades.style.opacity = 1;
        }
    });
});

// Codigo scroll para javascript

document.addEventListener("DOMContentLoaded", function() {
    // Selecciona todos los enlaces con la clase "smooth-scroll"
    var scrollLinks = document.querySelectorAll('.smooth-scroll');

    // Agrega un evento de clic a cada enlace
    scrollLinks.forEach(function(scrollLink) {
        scrollLink.addEventListener('click', function(event) {
            // Previene el comportamiento predeterminado del enlace
            event.preventDefault();
            
            // Obtiene el atributo href del enlace
            var targetId = this.getAttribute('href');
            
            // Obtiene la posición de la sección de destino
            var targetPosition = document.querySelector(targetId).offsetTop;
            
            // Desplaza suavemente la página hacia la sección de destino
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        });
    });
});


