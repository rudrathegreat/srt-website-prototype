let exploration_container = document.querySelector('.vision-and-mission .exploration');

window.addEventListener('scroll', () => {
    offset = 30 + (((window.scrollY)/window.innerHeight)*40);
    if (offset < 30){
        offset = 30;
    }
    if (offset > 100) {
        offset = 100;
    }
    exploration_container.animate({
        backgroundPosition: '50% ' + offset + '%'
    }, {duration:750, fill:'forwards'});
})