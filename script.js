const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');
const response = document.getElementById('response');

yesBtn.addEventListener('click', () => {
    response.textContent = "Yay! I'm so happy! 💖";
    response.classList.add('show');
    // Add heart animation
    for (let i = 0; i < 10; i++) {
        const heart = document.createElement('div');
        heart.textContent = '💖';
        heart.classList.add('hearts');
        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.animationDelay = Math.random() * 2 + 's';
        document.body.appendChild(heart);
        setTimeout(() => heart.remove(), 3000);
    }
});

noBtn.addEventListener('mouseenter', () => {
    const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
    const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);
    noBtn.style.position = 'absolute';
    noBtn.style.left = x + 'px';
    noBtn.style.top = y + 'px';
});