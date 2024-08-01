let cursor = document.querySelector('.cursor');
let links = document.querySelectorAll('a');
let tile_grids = document.querySelectorAll('.dot-lattice');

window.addEventListener('mousemove', function(e) {
    cursor.animate({
        top:e.pageY + 'px',
        left:e.pageX + 'px'
    }, {duration:1000, fill:'forwards'});
});

links.forEach(link => {
    link.addEventListener('mouseover', () => {
        cursor.style.width = 0;
        cursor.style.height = 0;
    });

    link.addEventListener('mouseleave', () => {
        cursor.style.width = '1vw';
        cursor.style.height = '1vw';
    })
})

function calculateDistance(elem, mouseX, mouseY) {
    element_rect = elem.getBoundingClientRect()
    //console.log(element_rect.top);

    // console.log(Math.floor(Math.sqrt(Math.pow(mouseX - (element_rect.left+(elem.clientWidth/2)), 2) + Math.pow(mouseY - (element_rec.top+(elem.clientHeight/2)), 2))));
    // console.log(mouseY);
    return Math.floor(Math.sqrt(Math.pow(mouseX - (element_rect.left+(elem.clientWidth/2)), 2) + Math.pow((mouseY % window.innerHeight) - ((element_rect.top % window.innerHeight)+(elem.clientHeight/2)), 2)));
}

tile_grids.forEach(tile_grid => {
    tile_grid.addEventListener('mousemove', function(e) {
        let tiles = tile_grid.querySelectorAll('.tile');
        tiles.forEach(tile => {
            mX = e.pageX;
            mY = e.pageY;
            distance = calculateDistance(tile, mX, mY);
            size = 50/distance;
            if (size < 1) {
                size = 3;
            }
    
            if (size > 3) {
                size = 1;
            }
            // console.log(size);
            tile.style.transform = 'scale(' + size + ')';
        })
    });
    tile_grid.addEventListener('mouseleave', function(e) {
        let tiles = tile_grid.querySelectorAll('.tile');
        tiles.forEach(tile => {
            tile.style.transform = 'scale(1)';
        })
    });
})