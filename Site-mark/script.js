const imageContainer = document.querySelector('.image-container');
const image = document.querySelector('#title-image');

let lastScrollTop = 0;
const scrollThreshold = 200;

window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop) {
        // Scrolling down
        const scaleFactor = 1 - (scrollTop / window.innerHeight) * 0.8;
        image.style.height = `scale(${scaleFactor})`;
    
    } else {
        // Scrolling up
        const scaleFactor = 1 + (scrollTop / window.innerHeight) * 0.8;
        image.style.height = `scale(${scaleFactor})`;
    }
        // Check if the user has scrolled past the threshold
        // if (scrollTop >= scrollThreshold) {
        //     imageContainer.style.position = 'fixed';
        //     imageContainer.style.top = '0';
        // } else {
        //     imageContainer.style.position = 'relative';
        //     imageContainer.style.top = 'auto';
        // }


    lastScrollTop = scrollTop;
});
