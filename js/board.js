const board = document.querySelector('.board');

if (board) {
    for (let i = 1; i <= 51; i++) {
        const card = document.createElement('div');
        card.className = 'card';
        const img = document.createElement('img');
        img.src = `/media/board-pics/img${i}.webp`;
        img.loading = 'lazy';
        img.alt = '';
        card.appendChild(img);
        board.appendChild(card);
    }
}
