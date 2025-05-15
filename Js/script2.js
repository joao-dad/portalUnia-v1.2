document.addEventListener("DOMContentLoaded", function () {
    /* Slide (cabeçalho) */
    const carousel = document.getElementById('carousel');
    const dots = document.querySelectorAll('.dot');
    let currentIndex = 0;
    const totalSlides = dots.length;

    function showSlide(index) {
        carousel.style.transform = `translateX(-${index * 100}%)`;
        dots.forEach(dot => dot.classList.remove('active'));
        dots[index].classList.add('active');
        currentIndex = index;
    }

    function autoSlide(){
        let nextIndex = (currentIndex + 1) % totalSlides;
        showSlide(nextIndex);
    }

    setInterval(autoSlide, 4000);

    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            showSlide(index);
        });
    });

    showSlide(0);

    /* Menu responsivo */
    window.menuShow = function () {
        let menuMobile = document.querySelector('.mobile-menu');
        let icon = document.querySelector('.icon');
        if (menuMobile.classList.contains('open')) {
            menuMobile.classList.remove('open');
            icon.src = "./img/menu_white_36dp.svg";
        } else {
            menuMobile.classList.add('open');
            icon.src = "./img/close_white_36dp.svg";
        }
    }

/* Estudante ou visitante */
 window.mostrarCampos = function () {
 const tipo = document.getElementById('tipo').value;
const estudanteDiv = document.getElementById('campos-estudante');
 const visitanteDiv = document.getElementById('campos-visitante');

// Oculta ambas as divs inicialmente
 estudanteDiv.classList.add('hidden');
visitanteDiv.classList.add('hidden');

// Desabilita 'required' em todos os campos condicionais inicialmente
 const estudanteRequired = estudanteDiv.querySelectorAll('[required]');
estudanteRequired.forEach(campo => campo.required = false);

const visitanteRequired = visitanteDiv.querySelectorAll('[required]');
visitanteRequired.forEach(campo => campo.required = false);

if (tipo === 'estudante') {
estudanteDiv.classList.remove('hidden');
// Habilita 'required' nos campos de estudante
 estudanteRequired.forEach(campo => campo.required = true);
 } else if (tipo === 'visitante') {
 visitanteDiv.classList.remove('hidden');
 // Habilita 'required' nos campos de visitante
visitanteRequired.forEach(campo => campo.required = true);
 }
};

// Chame a função inicialmente para definir o estado dos campos ao carregar a página
window.onload = mostrarCampos;

    /* Formulário de contato */
    const formulario = document.getElementById("cont-form");
    if (formulario) {
        formulario.addEventListener("submit", function (event) {
            event.preventDefault();
            alert("Enviado com sucesso!");
            setTimeout(() => {
                location.reload();
            }, 100);
        });
    }
});
