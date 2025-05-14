/*index */
document.addEventListener("DOMContentLoaded", () => {
    const enterButton = document.querySelector(".text a");

    enterButton.addEventListener("click", (e) => {
        e.preventDefault();
        enterButton.textContent = "Entrando...";
        enterButton.style.pointerEvents = "none";

        // Simula carregamento
        setTimeout(() => {
            window.location.href = "principal.html"; // página principal do portal
        }, 1500);
    });
});


/*Slide (cabeçalho) */
    const carousel = document.getElementById('carousel');
    const dots = document.querySelectorAll('.dot');
    let currentIndex = 0;
    const totalSlides = dots.length;

    function showSlide(index) {
        carousel.style.transform = 'translateX(-${index * 100}%)';
        dots.forEach(dot => dot.classList.remove('active'));
        dots[index].classList.add('active');
        currentIndex = index;
    }

    function autoSlide(){
        let nextIndex = (currentIndex + 1) % totalSlides;
        showSlide(nextIndex);
    }

    //auto-slide a cada 4seg
    setInterval(autoSlide, 4000);

    //clique manual nas bolinhas
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
        showSlide(index);
    });
    });

    //inicializa no primeiro slide
    showSlide(0);

/* menu responsivo*/

function menuShow(){
let menuMobile = document.querySelector('.mobile-menu');
if (menuMobile.classList.contains('open')) {
    menuMobile.classList.remove('open');
    document.querySelector('.icon').src="./img/menu_white_36dp.svg"
} else {
    menuMobile.classList.add('open');
    document.querySelector('.icon').src="./img/close_white_36dp.svg"
}
}

/*estudante ou não*/

function mostrarCampos() {
    const tipo = document.getElementById('tipo').value;
    const estudante = document.getElementById('campos-estudante');
    const visitante = document.getElementById('campos-visitante');

    estudante.classList.add('hidden');
    visitante.classList.add('hidden');

    if (tipo === 'estudante') {
      estudante.classList.remove('hidden');
    } else if (tipo === 'visitante') {
      visitante.classList.remove('hidden');
    }
  }

  /*curtir, comentar e partilhar*/



document.addEventListener("DOMContentLoaded", function() {
    // Carregar likes e comentários para todas as notícias
    document.querySelectorAll('.noticia-feed').forEach((noticia, index) => {
        let likes = localStorage.getItem(`likes-${index}`) || 0;
        noticia.querySelector('.like-count').innerText = likes;

        let comentariosSalvos = JSON.parse(localStorage.getItem(`comentarios-${index}`)) || [];
        comentariosSalvos.forEach(comentario => {
            adicionarComentarioNaTela(noticia, comentario);
        });
    });
});

function curtir(botao) {
    const noticia = botao.closest('.noticia-feed');
    const index = Array.from(document.querySelectorAll('.noticia-feed')).indexOf(noticia);

    let likes = parseInt(localStorage.getItem(`likes-${index}`) || 0);
    likes++;
    localStorage.setItem(`likes-${index}`, likes);
    noticia.querySelector('.like-count').innerText = likes;
}

function mostrarCaixaComentario(botao) {
    const noticia = botao.closest('.noticia-feed');
    const caixa = noticia.querySelector('.caixa-comentario');
    caixa.style.display = caixa.style.display === 'none' ? 'flex' : 'none';
}

function enviarComentario(botao) {
    const noticia = botao.closest('.noticia-feed');
    const index = Array.from(document.querySelectorAll('.noticia-feed')).indexOf(noticia);
    const textarea = noticia.querySelector('.comentario-texto');
    const textoComentario = textarea.value.trim();

    if (textoComentario !== '') {
        adicionarComentarioNaTela(noticia, textoComentario);

        let comentariosSalvos = JSON.parse(localStorage.getItem(`comentarios-${index}`)) || [];
        comentariosSalvos.push(textoComentario);
        localStorage.setItem(`comentarios-${index}`, JSON.stringify(comentariosSalvos));

        textarea.value = '';
    } else {
        alert("Por favor, escreva algo antes de enviar.");
    }
}

function partilhar() {
    const url = window.location.href;
    navigator.clipboard.writeText(url).then(() => {
        alert("Link da notícia copiado para a área de transferência!");
    }).catch(() => {
        alert("Não foi possível copiar o link.");
    });
}

function adicionarComentarioNaTela(noticia, comentario) {
    const comentariosDiv = noticia.querySelector('.comentarios-feed');
    const novoComentario = document.createElement('p');
    novoComentario.innerText = "💬 " + comentario;
    comentariosDiv.appendChild(novoComentario);
}


