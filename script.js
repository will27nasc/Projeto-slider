// Funções para selecionar elementos
let s = (el) => document.querySelector(el);
let ss = (el) => document.querySelectorAll(el);

// Variavel responsavel pelo total de sliders
let totalSliders = ss('.slider').length;

// Define o max de width do slider de acordo com a quandade de imagens
s('.box-sliders').style.width = `calc(100vw * ${totalSliders})`;

// Configurando deixando o height do slider flexivel a diferentes telas
s('.setas').style.height = `${document.querySelector('.section-sliders').clientHeight}px`;

// Indica a contagem dos slides
let currentSlide = 0;

// Seleciona o div dot
let dots = ss('.dot');

// Reponsável por arrastar a imagem atual para a esquerda
function goPrev() {
    currentSlide--;
    if(currentSlide < 0) {
        currentSlide = totalSliders - 1;
    }
    updateMargin();
    actualDot();
}

// Reponsável por arrastar a imagem atual para a direita
function goNext() {
    currentSlide++;
    if(currentSlide > (totalSliders - 1)) {
        currentSlide = 0;
    }
    updateMargin();
    actualDot();
}

// Define a quantida de margin left para fazer o slider mover
function updateMargin() {
    let sliderWidth = s('.slider').clientWidth;
    let newMargin = (currentSlide * sliderWidth);
    s('.box-sliders').style.marginLeft = `-${newMargin}px`;
}

// Move o slider se o primeiro dot for clicado
function dotChange(n) {
    s('.box-sliders').style.marginLeft = '0.4%';
    if(n === 1) {
        for(let dot of dots){
            dot.className = dot.className.replace(" active", "");
        }
        dots[0].className += " active";
    }
}

// Move o slider se o segundo dot for clicado
function dotChange2(n) {
    s('.box-sliders').style.marginLeft = '-100%';
    if(n === 2) {
        for(let dot of dots){
            dot.className = dot.className.replace(" active", "");
        }
        dots[1].className += " active";
    }
}

// Move o slider se o terceiro dot for clicado
function dotChange3(n) {
    s('.box-sliders').style.marginLeft = '-200%';
    if(n === 3) {
        for(let dot of dots){
            dot.className = dot.className.replace(" active", "");
        }
        dots[2].className += " active";
    }
}

// Muda a cor do dot de acordo com o slider atual
function actualDot() {
    for(let dot of dots) {
        dot.className = dot.className.replace(" active", "");
    }

    dots[currentSlide].className += " active";
}

setInterval(goNext,5000);


