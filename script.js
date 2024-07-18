function showVideo() {
    const videoDiv = document.getElementById('extra-video');
    if (videoDiv.classList.contains('hidden')) {
        videoDiv.classList.remove('hidden');
        videoDiv.classList.add('fade-in');
    }
}

function changeImage() {
    const img = document.getElementById('interactive-image');
    img.src = 'https://cherrybomb404.github.io/repo/images/alternative-image.jpg';
}

function revertImage() {
    const img = document.getElementById('interactive-image');
    img.src = 'pacman.gif';
}
