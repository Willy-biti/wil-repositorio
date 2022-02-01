let totalSlides = document.querySelectorAll('.slider--item').length;
let currentSlide = 0;

document.querySelector('.slider--width').style.width = `calc(100% * ${totalSlides})`;
//Colocar os botões em ALIGH ITEM: CENTER
// document.querySelector('.slider--controls').style.width =
//     `${document.querySelector('.slider').clientHeight}px`;

    function goPrev() {
        currentSlide--;
        if (currentSlide < 0) {
            currentSlide = totalSlides - 1;
        }
        updateMargin();
    }
    function goNext() {
        currentSlide++;
        if (currentSlide > (totalSlides - 1)) {
            currentSlide = 0;
        }
        updateMargin()
    }

    function updateMargin() {
        let sliderItemWidth = document.querySelector(".slider--item").clientWidth;
        let newMargin = (currentSlide * sliderItemWidth);
        document.querySelector('.slider--width').style.marginLeft =
            `-${newMargin}px`
    }
    
    setInterval(goNext, 6000);


    // BOTÃO SCROLL
function subirTela(){
    window.scrollTo({
        top:0,
        behavior: 'smooth'
    })
}

function decidirBotaoScroll(){
    if(window.scrollY ===0 ) {
        //ocultar botão
        document.querySelector('.scrollbotton').style.display = 'none';
    } else {
        //mostrar botão
        document.querySelector('.scrollbotton').style.display = 'block';
    }
}

window.addEventListener('scroll', decidirBotaoScroll);