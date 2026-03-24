const board = document.querySelector('.board');

const totalImages = 51;

for(let i = 1; i <= totalImages; i++){
    const card = document.createElement("div");
    card.classList.add("card");

    const img = document.createElement("img");
    img.src = `../media/board-pics/img${i}.jpeg`;
    // Lazy loading attribute to improve performance by loading images only when they are about to enter the viewport
    img.loading = "lazy";
    img.onload = () => {
        card.classList.add('show');
    };
    card.appendChild(img);
    board.appendChild(card);
}

const masonry = new Masonry(board, {
    itemSelector: '.card',
    columnWidth: 250,
    gutter: 16,
    fitWidth: true
});

imagesLoaded(board).on('progress', function() {
    masonry.layout();
});