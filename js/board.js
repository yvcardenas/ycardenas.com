const board = document.querySelector('.board');

let i = 1;

function loadImage(){
    const img = new Image();
    img.src = `../media/board-pics/img${i}.jpeg`;

    img.onload = () => {
        const card = document.createElement("div");
        card.classList.add("card");

        card.appendChild(img);
        board.appendChild(card);

        requestAnimationFrame(() => {
            card.classList.add("show");
        });

        i++;
        loadImage();
    };
    // When no nmore images are found it stops
    img.onerror = () => {
        imagesLoaded(board, () => {
            new Masonry(board, {
                itemSelector: '.card',
                columnWidth: 250,
                gutter: 16, 
                // percentPosition: true
                fitWidth: true
            });
        });
    };
}

loadImage();