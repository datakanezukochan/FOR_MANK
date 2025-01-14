

function goToPage(pageNumber) {
    document.querySelectorAll('.page').forEach(page => page.classList.remove('active'));
    document.getElementById(`page${pageNumber}`).classList.add('active');
}

function showVideo() {
    const popup = document.getElementById('video-popup');
    popup.style.display = 'flex';
    const video = document.getElementById('birthday-video');
    video.play();
}

function closeVideo() {
    const popup = document.getElementById('video-popup');
    popup.style.display = 'none';
    const video = document.getElementById('birthday-video');
    video.pause();
    video.currentTime = 0;
}


function startConfetti() {
    const container = document.getElementById('confetti-container');
    for (let i = 0; i < 100; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        confetti.style.left = Math.random() * 100 + 'vw';
        confetti.style.animationDuration = 2 + Math.random() * 3 + 's';
        container.appendChild(confetti);

        setTimeout(() => confetti.remove(), 5000);
    }
}

function startMelodyConfetti() {
    const container = document.getElementById('melody-confetti-container');
    for (let i = 0; i < 100; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        confetti.style.left = Math.random() * 100 + 'vw';
        confetti.style.animationDuration = 2 + Math.random() * 3 + 's';
        container.appendChild(confetti);

        setTimeout(() => confetti.remove(), 10000);
    }
}

function checkPassword() {
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('error-message');

    if (password.toLowerCase() === '20') {
        goToPage(2);
    } else {
        errorMessage.textContent = "chắc chắn là dài hơn nữa :')";
    }
}

function startBubbles() {
    const container = document.getElementById('bubble-container');
    for (let i = 0; i < 100; i++) {
        const bubble = document.createElement('div');
        bubble.className = 'bubble';
        bubble.style.left = Math.random() * 100 + 'vw';
        bubble.style.animationDuration = 3 + Math.random() * 2 + 's';
        container.appendChild(bubble);

        setTimeout(() => bubble.remove(), 10000);
    }
}

function flipCard(card) {
    card.classList.toggle('flipped');
}


startMelodyConfetti();
startBubbles();
startConfetti();

function startTypingEffect() {
    const letterText = `Dear Manku,
    
    Cuối cùng cũng lại đến ngày này Mank nhỉ. Ngày cậu mong chờ nhất trong các dịp mỗi năm. Tớ biết rằng năm nay cậu có thể cảm thấy
    lẻ loi vì kh còn được ăn sn cùng mng như trước nữa :<. Nhưng mà cậu hãy luôn nhớ sẽ luôn có rất nhiều người vẫn nhớ và trân trọng
    cậu những dịp này mà (có cả tớ nữa <333)...    Vì thế nên, đừng bùn cậu nhee :<!! 

    Chúc ngàn lời tốt đẹp nhất đến với Mank trong năm nay, gặp nhiều may mắn, học tập được 3.7 GPA++, luôn mãi tươi cười nheee!
    Mãi iu Mank, về Vn tớ chở menk đi chơi hết cái sgon lunn!!!!

    To the moon,
    Tdee (intern Micecroshock)`;

    const typingEffectContainer = document.getElementById('typing-effect');
    let index = 0;

    function typeLetter() {
        if (index < letterText.length) {
            typingEffectContainer.textContent += letterText.charAt(index);
            index++;
            setTimeout(typeLetter, 50); // Adjust typing speed
        }
    }

    typeLetter();
}

// Call this function when navigating to Page 4
function goToPage(pageNumber) {
    document.querySelectorAll('.page').forEach(page => page.classList.remove('active'));
    const targetPage = document.getElementById(`page${pageNumber}`);
    targetPage.classList.add('active');

    if (pageNumber === 3) {
        startTypingEffect(); // Start the typing effect for Page 4
    }
}


// trigger to play music in the background with sweetalert
window.addEventListener('load', () => {
    Swal.fire({
        title: 'Do you want to play music in the background?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes',
        cancelButtonText: 'No',
    }).then((result) => {
        const audioElement = document.querySelector('.song');
        if (result.isConfirmed) {
            audioElement.play().catch(error => {
                console.error("Error playing audio:", error);
            });
            animationTimeline();
        } else {
            animationTimeline();
        }
    });
});
