// const listing = document.querySelector('.title__carousel-list');
const carousel = document.querySelector('.title__carousel');
const slides = Array.from(carousel.children);
const btnPrev = document.querySelector('.title__button--previous');
const btnNext = document.querySelector('.title__button--next');
const dotsNav = document.querySelector('.title__ul');
const dots = Array.from(dotsNav.children);

const spanNext = document.querySelector('.arrow-next');
const spanPrev = document.querySelector('.arrow-prev');

const slideWidth = slides[0].getBoundingClientRect().width;
// slides[0].style.left = slideWidth * 0 + 'px';
// slides[1].style.left = slideWidth + 'px';
// slides[2].style.left = slideWidth * 2 + 'px';
const setSlidePosition = (slide, index) => {
    slide.style.left = slideWidth * index + 'px';
}
// slides.forEach((slide, index) =>{
//     slide.style.left = slideWidth * index + 'px';
// });
slides.forEach(setSlidePosition);
//When i click left,move slides to the left
//when 
const moveToSlide = (carousel, currentSlide, targetSlide) => {
    carousel.style.transform ='translateX(-' + targetSlide.style.left; + ')';
    currentSlide.classList.remove('current-slide');
    targetSlide.classList.add('current-slide');
}
const updateDots = (currentDot, targetDot) => {
    currentDot.classList.remove('current-slide');
    targetDot.classList.add('current-slide');
}
const hideShowArrows =(slides, btnPrev, btnNext, spanPrev,spanNext,targetIndex)=>{
    if(targetIndex === 0){
        btnPrev.classList.add('is-hidden');
        btnNext.classList.remove('is-hidden');
        spanPrev.classList.add('is-hidden');
        spanNext.classList.remove('is-hidden');
        
    }else if(targetIndex === slides.length - 1){
        btnPrev.classList.remove('is-hidden');
        btnNext.classList.add('is-hidden');
        spanPrev.classList.remove('is-hidden');
        spanNext.classList.add('is-hidden');
    } else{
        btnPrev.classList.remove('is-hidden');
        btnNext.classList.remove('is-hidden');
        spanPrev.classList.remove('is-hidden');
        spanNext.classList.remove('is-hidden');
    }
}

btnPrev.addEventListener('click', e =>{
    const currentSlide = carousel.querySelector('.current-slide');
    const prevSlide = currentSlide.previousElementSibling;
    const currentDot = dotsNav.querySelector('.current-slide');
    const prevDot = currentDot.previousElementSibling;
    const prevIndex = slides.findIndex(slide => slide === prevSlide);

    updateDots(currentDot, prevDot);
    moveToSlide(carousel, currentSlide, prevSlide);
    hideShowArrows(slides, btnPrev, btnNext, spanPrev,spanNext,prevIndex);
})

btnNext.addEventListener('click', e =>{
    const currentSlide = carousel.querySelector('.current-slide');
    const nextSlide = currentSlide.nextElementSibling;
    const currentDot = dotsNav.querySelector('.current-slide');
    const nextDot = currentDot.nextElementSibling;
    const nextIndex = slides.findIndex(slide => slide === nextSlide);

    updateDots(currentDot, nextDot);
    moveToSlide(carousel, currentSlide, nextSlide);
    // const amountToMove = nextSlide.style.left;

    // carousel.style.transform ='translateX(-' + amountToMove + ')';
    // currentSlide.classList.remove('current-slide');
    // nextSlide.classList.add('current-slide');
    //move to the next slide
    hideShowArrows(slides, btnPrev, btnNext, spanPrev,spanNext,nextIndex);
})
dotsNav.addEventListener('click', e => {
    //what indicator was clicked on?
    const targetDot = e.target.closest('button');

    if (!targetDot) return;
    
    const currentSlide = carousel.querySelector('.current-slide');
    const currentDot = dotsNav.querySelector('.current-slide');
    const targetIndex = dots.findIndex(dot => dot === targetDot);
    const targetSlide = slides[targetIndex];

    updateDots(currentDot, targetDot);
    moveToSlide(carousel, currentSlide, targetSlide);
    hideShowArrows(slides, btnPrev, btnNext, spanPrev,spanNext,targetIndex);
})
