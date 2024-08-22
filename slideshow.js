let slideshow_img_number = 0;
let numImages = 3;

function nextImage() {
    slideshow_img_number = slideshow_img_number + 1;
    console.log('next');
    displayImages();
    setIndicatorColour();
}

function previousImage() {
    slideshow_img_number = slideshow_img_number - 1;
    console.log('previous');
    displayImages();
    setIndicatorColour();
}

function displayImages() {
    if (slideshow_img_number < 0) {
        slideshow_img_number = slideshow_img_number * -1;
        slideshow_img_number = slideshow_img_number % numImages;
        slideshow_img_number = numImages - slideshow_img_number;
    }
    else {
        slideshow_img_number = slideshow_img_number % numImages;
    }
    counter = 0;
    transform_amount = slideshow_img_number * -100;
    console.log('done');
    document.querySelectorAll('.slideshow .image').forEach(image => {
        image.style.transform = 'translateX(' + transform_amount + '%)';
        object_position_amount = 50 - ((slideshow_img_number - counter) * 100);
        image.style.backgroundPosition = '' + object_position_amount + '% 50%';
        counter++;
    })
    console.log(slideshow_img_number);
}

function setIndicatorColour() {
    let indicator_counter = 0;
    if (document.querySelector('.slideshow .red-indicator') != null) {
        document.querySelector('.slideshow .red-indicator').classList.remove('red-indicator');
    }
    document.querySelectorAll('.slideshow .indicator-dot').forEach(indicator => {
        if (indicator_counter === slideshow_img_number) {
            indicator.classList.add('red-indicator');
        }
        indicator_counter++;
    })
}

function setNumber(number) {
    slideshow_img_number = number;
    displayImages();
    setIndicatorColour();
}