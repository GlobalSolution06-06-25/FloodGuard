//SLIDESHOW
let imagens = [
    'src/assets/logo2.jpg',
    'src/assets/enchente2.jpg',
    'src/assets/impacto2.jpg',
];

let index = 0;
let tempo = 3000;

function slideShow() {
    document.getElementById('image').src = imagens[index];
    index++;
    if (index == imagens.length) {
        index = 0;
    }
    setTimeout("slideShow()", tempo)
}
slideShow();

//MENU HANBURGUER
const hamburguer = document.querySelector('.hamburguer');
const headerMenu = document.querySelector('header nav');

function toggleMenu(){
    hamburguer.classList.toggle('active');
    headerMenu.classList.toggle('active');
}

hamburguer.addEventListener('click', toggleMenu);
headerMenu.addEventListener('click', (e) => {
    if (e.target.classList.contains('item-menu')) {
        toggleMenu();
    }
});

//Mudar cor
function trocar(cor){
    document.body.style.background=cor
}