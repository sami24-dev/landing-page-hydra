const containers = document.querySelectorAll('.contain__carousel')

containers.forEach((carousel)=>{
    const slides = carousel.querySelectorAll('.carousel-item');
    const totalSlides = slides.length;
    const contain = carousel.querySelector('.carousel');
    
    let currentIndex = 0;
    function moveCarousel(direction) {
        currentIndex = (currentIndex + direction + totalSlides) % totalSlides;
        const displacement = -currentIndex * 100;
        if (contain) {
            return (contain.style.transform = `translateX(${displacement}%)`);
        }
    }
    carousel.addEventListener('click', event => {
        if (event.target.dataset.button == 'next') {
            moveCarousel(1);
        }
        if (event.target.dataset.button == 'prev') {
            moveCarousel(-1);
        } 
    }); 

})
