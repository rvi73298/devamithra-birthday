/* ===== VARIABLES ===== */
let currentSlide = 0;
const totalSlides = 9;
let bgMusic = document.getElementById('bgMusic');

/* ===== INITIALIZATION ===== */
document.addEventListener('DOMContentLoaded', function() {
    initializeStars();
    initializePetals();
    startLoadingAnimation();
});

/* ===== LOADING SCREEN ===== */
function startLoadingAnimation() {
    // Start music
    bgMusic.play().catch(() => {
        console.log('Audio autoplay prevented - user interaction required');
    });

    // Hide loading screen after 5 seconds
    setTimeout(() => {
        const loadingScreen = document.getElementById('loadingScreen');
        loadingScreen.classList.add('hidden');
        
        // Show first slide
        setTimeout(() => {
            showSlide(0);
        }, 500);
    }, 5000);
}

/* ===== SLIDE MANAGEMENT ===== */
function showSlide(slideNumber) {
    // Hide all slides
    const slides = document.querySelectorAll('.slide');
    slides.forEach(slide => slide.classList.remove('active'));

    // Show selected slide
    const selectedSlide = document.querySelector(`[data-slide="${slideNumber + 1}"]`);
    if (selectedSlide) {
        selectedSlide.classList.add('active');
        currentSlide = slideNumber;
        
        // Trigger slide-specific animations
        triggerSlideAnimation(slideNumber);
    }
}

function nextSlide() {
    if (currentSlide < totalSlides - 1) {
        showSlide(currentSlide + 1);
    } else {
        // End of presentation
        endPresentation();
    }
}

function triggerSlideAnimation(slideNumber) {
    switch(slideNumber) {
        case 1: // Slide 2 - Photos
            animatePhotosSequence();
            break;
        case 2: // Slide 3 - Letter
            animateLetter();
            break;
        case 3: // Slide 4 - Cake
            animateCakeSlide();
            break;
        case 4: // Slide 5 - Tribute
            animateTributeSlide();
            break;
        case 5: // Slide 6 - Memorial
            animateMemorialSlide();
            break;
        case 6: // Slide 7 - Gift
            animateGiftSlide();
            break;
        case 8: // Slide 9 - Secret
            animateSecretEnding();
            break;
    }
}

/* ===== SLIDE 1: FRIENDSHIP TEST ===== */
function handleFriendshipYes() {
    const panda = document.querySelector('.slide-1 .panda-character');
    panda.classList.add('happy');
    panda.textContent = '🐼';

    // Show celebration effects
    showConfetti();
    createHearts();

    // Update text
    const text = document.querySelector('.slide-1 .slide-text');
    text.textContent = 'YAY!! I knew it!! 🐼💖';

    // Fade to next slide
    setTimeout(() => {
        nextSlide();
    }, 2000);
}

function handleFriendshipNo() {
    const panda = document.querySelector('.slide-1 .panda-character');
    panda.textContent = '😤';
    panda.style.animation = 'none';
    setTimeout(() => panda.style.animation = '', 10);

    // Create angry message
    const text = document.querySelector('.slide-1 .slide-text');
    text.textContent = 'HOW DARE YOU!! 😤';
    text.style.fontSize = '48px';
    text.style.color = '#E85B9C';

    // Reset after showing anger
    setTimeout(() => {
        panda.textContent = '🐼';
        text.textContent = 'Try that again... 😒👉';
        text.style.fontSize = '42px';
        text.style.color = '#4A4A4A';
        
        // Re-enable buttons
        document.querySelectorAll('.slide-1 .btn').forEach(btn => btn.disabled = false);
    }, 2000);
}

/* ===== SLIDE 2: PHOTOS SEQUENCE ===== */
function animatePhotosSequence() {
    // Photos already have animation via CSS
    // Text appears with staggered timing
    setTimeout(() => {
        const texts = document.querySelectorAll('.slide-2 .photo-text');
        texts.forEach((text, index) => {
            setTimeout(() => {
                text.style.opacity = '1';
            }, index * 600);
        });
    }, 500);
}

/* ===== SLIDE 3: LETTER ===== */
function animateLetter() {
    // Typewriter effect for letter content
    const letterContent = document.querySelector('.letter-content');
    const originalText = letterContent.innerHTML;
    letterContent.innerHTML = '';
    
    let charIndex = 0;
    const text = originalText.replace(/<br>/g, '\n');
    
    function typewriter() {
        if (charIndex < text.length) {
            letterContent.innerHTML += text[charIndex];
            charIndex++;
            setTimeout(typewriter, 20);
        }
    }
    
    // Start typewriter after letter opens
    setTimeout(typewriter, 1500);
}

/* ===== SLIDE 4: CAKE ===== */
function handleCakeCut() {
    const cake = document.querySelector('.slide-4 .cake');
    cake.style.animation = 'none';
    
    // Slice animation
    setTimeout(() => {
        cake.style.transform = 'scaleX(0.8)';
        showConfetti();
        createFireworks();
        createBalloons();
        
        // Play celebration sound effect (if you add one)
        
        // Update music to cheerful version (optional)
        // bgMusic.playbackRate = 1.1;
    }, 100);

    // Show continue button after effects
    setTimeout(() => {
        const continueBtn = document.querySelector('.slide-4 .btn-continue');
        if (continueBtn) continueBtn.style.display = 'block';
    }, 1500);
}

function cutTheCake() {
    handleCakeCut();
}

function animateCakeSlide() {
    // Pandas have animation via CSS
    // Continue button hidden initially
    const continueBtn = document.querySelector('.slide-4 .btn-continue');
    if (continueBtn) continueBtn.style.display = 'none';
}

/* ===== SLIDE 5: TRIBUTE ===== */
function animateTributeSlide() {
    setTimeout(() => {
        // Animate photos forming a heart
        const photos = document.querySelectorAll('.tribute-photo');
        setTimeout(() => {
            photos.forEach((photo, index) => {
                if (index === 0) {
                    photo.style.transform = 'translate(-60px, -20px)';
                } else if (index === 1) {
                    photo.style.transform = 'translate(60px, -20px)';
                } else {
                    photo.style.transform = 'translate(0, 40px)';
                }
            });
        }, 2000);
    }, 500);
}

/* ===== SLIDE 6: MEMORIAL ===== */
function animateMemorialSlide() {
    // Flower placement happens after 2 seconds (via CSS animation)
    // Star shining effect
    setTimeout(() => {
        const stars = document.querySelectorAll('.stars .star');
        if (stars.length > 0) {
            const randomStar = stars[Math.floor(Math.random() * stars.length)];
            randomStar.style.animation = 'shiningStar 1s ease-out forwards';
        }
    }, 3000);
}

/* ===== SLIDE 7: GIFT ===== */
function animateGiftSlide() {
    const giftBox = document.getElementById('giftBox');
    
    // After gift opens, show photos
    setTimeout(() => {
        giftBox.style.transform = 'rotateY(30deg)';
    }, 2000);
}

/* ===== SLIDE 8: GOODBYE ===== */
// No special animation needed - CSS handles it

/* ===== SLIDE 9: SECRET ENDING ===== */
function animateSecretEnding() {
    const peeking = document.querySelector('.peeking-panda');
    
    // Panda runs away after 3 seconds
    setTimeout(() => {
        peeking.style.animation = 'pandaRun 1.5s ease-in forwards';
    }, 3000);

    // Website ends after panda runs away
    setTimeout(() => {
        // Could add a "The End" message or just fade to black
        const slide = document.querySelector('.slide-9');
        slide.style.opacity = '0';
        slide.style.transition = 'opacity 2s ease-out';
    }, 5000);
}

/* ===== SPECIAL EFFECTS ===== */

/* Confetti */
function showConfetti() {
    const confettiCount = 50;
    const container = document.body;

    for (let i = 0; i < confettiCount; i++) {
        const confetti = document.createElement('div');
        confetti.classList.add('confetti');
        
        const colors = ['#FFB6D9', '#FFD700', '#E6D7F0', '#FF69B4', '#FFB6C1'];
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        
        confetti.style.left = Math.random() * 100 + '%';
        confetti.style.top = '-10px';
        
        container.appendChild(confetti);
        
        const duration = 2 + Math.random() * 1;
        confetti.style.animation = `confettiFall ${duration}s linear forwards`;
        
        setTimeout(() => confetti.remove(), duration * 1000);
    }
}

/* Hearts */
function createHearts() {
    const heartCount = 30;
    const container = document.querySelector('.slide-1');

    for (let i = 0; i < heartCount; i++) {
        const heart = document.createElement('div');
        heart.innerHTML = '❤️';
        heart.style.position = 'absolute';
        heart.style.left = Math.random() * 100 + '%';
        heart.style.top = Math.random() * 100 + '%';
        heart.style.fontSize = (Math.random() * 30 + 20) + 'px';
        heart.style.opacity = '0.7';
        heart.style.animation = 'float 2s ease-out forwards';
        heart.style.pointerEvents = 'none';
        
        container.appendChild(heart);
        
        setTimeout(() => heart.remove(), 2000);
    }
}

/* Fireworks */
function createFireworks() {
    const container = document.querySelector('.slide-4');
    const fireworkCount = 20;

    for (let i = 0; i < fireworkCount; i++) {
        const firework = document.createElement('div');
        firework.innerHTML = '✨';
        firework.style.position = 'absolute';
        firework.style.left = '50%';
        firework.style.top = '50%';
        firework.style.fontSize = '30px';
        firework.style.animation = `fireworkExplode 1.5s ease-out forwards`;
        firework.style.pointerEvents = 'none';
        
        const angle = (Math.PI * 2 * i) / fireworkCount;
        const distance = 150;
        const xOffset = Math.cos(angle) * distance;
        const yOffset = Math.sin(angle) * distance;
        
        firework.style.setProperty('--tx', xOffset + 'px');
        firework.style.setProperty('--ty', yOffset + 'px');
        
        container.appendChild(firework);
        
        setTimeout(() => firework.remove(), 1500);
    }
}

/* Balloons */
function createBalloons() {
    const container = document.querySelector('.slide-4');
    const balloonCount = 15;

    for (let i = 0; i < balloonCount; i++) {
        const balloon = document.createElement('div');
        balloon.innerHTML = '🎈';
        balloon.style.position = 'absolute';
        balloon.style.left = Math.random() * 100 + '%';
        balloon.style.bottom = '-50px';
        balloon.style.fontSize = '40px';
        balloon.style.animation = `balloonRise ${3 + Math.random() * 2}s ease-out forwards`;
        balloon.style.pointerEvents = 'none';
        
        container.appendChild(balloon);
        
        setTimeout(() => balloon.remove(), (3 + Math.random() * 2) * 1000);
    }
}

/* Petals */
function initializePetals() {
    const petalsContainer = document.querySelector('.petals');
    if (!petalsContainer) return;

    setInterval(() => {
        const petal = document.createElement('div');
        petal.classList.add('petal');
        petal.innerHTML = '🌸';
        
        petal.style.left = Math.random() * 100 + '%';
        petal.style.top = '-50px';
        petal.style.animation = `petalFall ${5 + Math.random() * 3}s linear forwards`;
        
        petalsContainer.appendChild(petal);
        
        setTimeout(() => petal.remove(), (5 + Math.random() * 3) * 1000);
    }, 800);
}

/* Stars */
function initializeStars() {
    const starsContainer = document.querySelector('.stars');
    if (!starsContainer) return;

    const starCount = 50;
    for (let i = 0; i < starCount; i++) {
        const star = document.createElement('div');
        star.classList.add('star');
        
        star.style.left = Math.random() * 100 + '%';
        star.style.top = Math.random() * 100 + '%';
        star.style.animationDelay = Math.random() * 3 + 's';
        
        starsContainer.appendChild(star);
    }
}

/* ===== KEYFRAME ANIMATIONS ===== */
const style = document.createElement('style');
style.textContent = `
    @keyframes float {
        0% {
            opacity: 1;
            transform: translateY(0) translateX(0);
        }
        100% {
            opacity: 0;
            transform: translateY(-100px) translateX(${Math.random() * 100 - 50}px);
        }
    }

    @keyframes fireworkExplode {
        0% {
            opacity: 1;
            transform: translate(0, 0) scale(1);
        }
        100% {
            opacity: 0;
            transform: translate(var(--tx), var(--ty)) scale(0);
        }
    }

    @keyframes balloonRise {
        0% {
            opacity: 1;
            transform: translateY(0);
        }
        100% {
            opacity: 0;
            transform: translateY(-100vh) rotate(${Math.random() * 360}deg);
        }
    }

    @keyframes shiningStar {
        0% {
            opacity: 0.5;
            transform: scale(1);
            filter: drop-shadow(0 0 5px white);
        }
        50% {
            opacity: 1;
            transform: scale(1.3);
            filter: drop-shadow(0 0 15px rgba(255, 255, 255, 0.8));
        }
        100% {
            opacity: 0.5;
            transform: scale(1);
            filter: drop-shadow(0 0 5px white);
        }
    }

    @keyframes pandaRun {
        0% {
            opacity: 1;
            transform: translateX(0);
        }
        100% {
            opacity: 0;
            transform: translateX(200px);
        }
    }
`;
document.head.appendChild(style);

/* ===== END PRESENTATION ===== */
function endPresentation() {
    // Fade to black
    const container = document.querySelector('.container');
    container.style.opacity = '0';
    container.style.transition = 'opacity 2s ease-out';

    setTimeout(() => {
        // Could show a special ending message or redirect
        console.log('Birthday presentation complete!');
    }, 2000);
}

/* ===== AUDIO CONTROL ===== */
// Allow users to unmute music with any interaction if needed
document.addEventListener('click', () => {
    if (bgMusic.paused) {
        bgMusic.play().catch(() => {
            console.log('Audio still blocked');
        });
    }
});

/* ===== TOUCH/CLICK HANDLERS ===== */
document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight' || e.key === ' ') {
        // Skip to next slide with spacebar or right arrow
        const continueBtn = document.querySelector('.slide.active .btn-continue');
        if (continueBtn) continueBtn.click();
    }
});

/* ===== UTILITY FUNCTIONS ===== */

// Create petal animation
function createPetalBurst(x, y) {
    const petalCount = 8;
    for (let i = 0; i < petalCount; i++) {
        const petal = document.createElement('div');
        petal.innerHTML = '🌸';
        petal.style.position = 'fixed';
        petal.style.left = x + 'px';
        petal.style.top = y + 'px';
        petal.style.fontSize = '20px';
        petal.style.pointer = 'none';
        
        const angle = (Math.PI * 2 * i) / petalCount;
        const vx = Math.cos(angle) * 150;
        const vy = Math.sin(angle) * 150;
        
        petal.style.animation = `petalBurst 1.5s ease-out forwards`;
        petal.style.setProperty('--vx', vx + 'px');
        petal.style.setProperty('--vy', vy + 'px');
        
        document.body.appendChild(petal);
        setTimeout(() => petal.remove(), 1500);
    }
}

// Add petalBurst animation
const burstStyle = document.createElement('style');
burstStyle.textContent = `
    @keyframes petalBurst {
        0% {
            opacity: 1;
            transform: translate(0, 0) scale(1);
        }
        100% {
            opacity: 0;
            transform: translate(var(--vx), var(--vy)) scale(0) rotate(360deg);
        }
    }
`;
document.head.appendChild(burstStyle);

/* ===== ACCESSIBILITY ===== */
// Ensure buttons are keyboard accessible
document.querySelectorAll('.btn').forEach(btn => {
    btn.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            btn.click();
        }
    });
});

/* ===== DEBUG MODE (Optional) ===== */
window.skipToSlide = function(slideNum) {
    if (slideNum >= 0 && slideNum < totalSlides) {
        showSlide(slideNum);
    }
};

window.toggleMusic = function() {
    if (bgMusic.paused) {
        bgMusic.play();
    } else {
        bgMusic.pause();
    }
};

console.log('🎂 Birthday Website Loaded! Use skipToSlide(n) to jump to slides 0-8');
