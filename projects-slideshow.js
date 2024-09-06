let projects_slide_number = 0;
let numSlides = 2;
let subtitles = ['ARCh Competition 2024', '2025 SRT Team Project'];
let titles = ['Developing the first Swinburne Rover', 'Building the new Website'];
let projects_links = ['comingsoon.html', 'comingsoon.html'];

function nextSlide() {
    projects_slide_number = projects_slide_number + 1;
    hideText();
    setTimeout(() => {displaySlides()}, 500);
}

function previousSlide() {
    projects_slide_number = projects_slide_number - 1;
    hideText();
    setTimeout(() => {displaySlides()}, 500);
}

function hideText() {
    document.querySelector('.projects-slideshow .text-container h1').style.transform = 'translateY(100%)';
    document.querySelector('.projects-slideshow .text-container p').style.transform = 'translateY(100%)';
    document.querySelector('.projects-container .active').classList.remove('active');
}

function displaySlides() {
    if (projects_slide_number < 0) {
        projects_slide_number = projects_slide_number * -1;
        projects_slide_number = projects_slide_number % numSlides;
        projects_slide_number = numSlides - projects_slide_number;
    }
    else {
        projects_slide_number = projects_slide_number % numSlides;
    }
    counter = 0;
    document.querySelectorAll('.projects-container .project').forEach(slide => {
        if (counter === projects_slide_number) {
            slide.classList.add('active');
            document.querySelector('.projects-slideshow .text-container h1').innerHTML = titles[counter];
            document.querySelector('.projects-slideshow .text-container p').innerHTML = subtitles[counter];
            document.querySelector('.projects-slideshow .text-container h1').style.transform = 'translateY(0)';
            document.querySelector('.projects-slideshow .text-container p').style.transform = 'translateY(0)';
            document.querySelector('.projects-slideshow .text .round-button').href = projects_links[counter];
        }
        counter++;
    })

}