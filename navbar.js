let navbar = document.querySelector('.navbar .menu');

function changeText(text) {
    document.querySelector('.second-nav-button-text').classList.add('changing-text');
        
        setTimeout(() => {
            document.querySelector('.second-nav-button-text').innerHTML = text;
            document.querySelector('.second-nav-button-text').classList.remove('changing-text');
        }, 300)
}

function toggleMenu() {
    navbar.classList.toggle('active');
    if (document.querySelector('.active') != null) {
        changeText('Close');
    }
    else {
        changeText('Open');
    }
    selection = document.querySelector('.options-activated') != null;
    if (selection) {
        document.querySelector('.options-activated').classList.toggle('options-activated');
    }
}

function toggleOptions(section_name) {
    let i = 0;
    document.querySelectorAll('.options-activated').forEach(activated_item => {
        if (activated_item.classList.contains(section_name) == false) {
            activated_item.classList.toggle('options-activated');
            i++;
        }
    })
    if (i > 0) {
        setTimeout(() => {document.querySelector('.' + section_name).classList.toggle('options-activated');}, 300);
        console.log('selection');
    }
    else {
        document.querySelector('.' + section_name).classList.toggle('options-activated');
        console.log('No selection');
    }
}