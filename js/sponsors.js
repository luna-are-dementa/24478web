

// Optional: Add JavaScript for more advanced features
document.addEventListener('DOMContentLoaded', function() {
    const carousels = document.querySelectorAll('.carousel-track');

    // Optional: Adjust speed based on content width
    function adjustCarouselSpeed() {
        carousels.forEach(carousel => {
            const slideCount = carousel.children.length / 2; // Divided by 2 because we duplicate
            const duration = Math.max(15, slideCount * 2); // Minimum 15s, 2s per slide
            carousel.style.animationDuration = duration + 's';
        });
    }

    adjustCarouselSpeed();

    // Adjust on window resize
    window.addEventListener('resize', adjustCarouselSpeed);
});

document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll(".choice-card");
    let currentController = null;

    function glitchRandomCard() {


        if (cards.length === 0) return;

        // Get only cards that are NOT hovered
        const availableCards = Array.from(cards).filter(card =>
            !card.matches(":hover")
        );

        // If all are hovered, do nothing
        if (availableCards.length === 0) return;

        // Stop previous glitch
        if (currentController) {
            currentController.stopGlitch();
            currentController = null;
        }

        // Pick a random card from the non-hovered ones
        const randomCard = availableCards[Math.floor(Math.random() * availableCards.length)];

        // Start continuous glitch
        currentController = PowerGlitch.glitch(randomCard, {
            playMode: 'always'
        });
    }

    // Start immediately
    glitchRandomCard();

    // Switch every 2 seconds
    setInterval(glitchRandomCard, 2000);


    const burgerBtn = document.getElementById('burger-btn');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    // Toggle mobile menu
    burgerBtn.addEventListener('click', function() {
        burgerBtn.classList.toggle('active');
        navMenu.classList.toggle('active');

        // Prevent body scrolling when menu is open
        if (navMenu.classList.contains('active')) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    });

    // Close menu when clicking on nav links
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            burgerBtn.classList.remove('active');
            navMenu.classList.remove('active');
            document.body.style.overflow = 'auto';
        });
    });

    // Close menu when clicking outside
    document.addEventListener('click', function(e) {
        if (!navMenu.contains(e.target) && !burgerBtn.contains(e.target)) {
            burgerBtn.classList.remove('active');
            navMenu.classList.remove('active');
            document.body.style.overflow = 'auto';
        }
    });
});


gsap.fromTo("#about p", {
    opacity: 0,
    y: 50,
    x: (index) => index % 2 === 0 ? -50 : 50
}, {
    scrollTrigger: {
        trigger: "#about",
        start: "top 70%",
        end: "top 30%",
        scrub: 1
    },
    opacity: 1,
    y: 0,
    x: 0,
    stagger: 0.2,
    ease: "power2.out"
});

// Simple awards section animation - fade in only
gsap.fromTo("choice-card, .award-card, .award-card-modif", {
    opacity: 0,
    y: 30
}, {
    scrollTrigger: {
        trigger: ".awards-grid",
        start: "top 90%"
    },
    opacity: 1,
    y: 0,
    duration: 0.8,
    stagger: 0.1,
    ease: "power2.out"
});







document.addEventListener('DOMContentLoaded', function() {
    const video = document.getElementById('bg-video');
    const volumeBtn = document.getElementById('volume-btn');
    const mutedIcon = volumeBtn.querySelector('.muted');
    const unmutedIcon = volumeBtn.querySelector('.unmuted');

    volumeBtn.addEventListener('click', function() {
        if (video.muted) {
            video.muted = false;
            mutedIcon.style.display = 'none';
            unmutedIcon.style.display = 'block';
            volumeBtn.setAttribute('aria-label', 'Mute volume');
        } else {
            video.muted = true;
            mutedIcon.style.display = 'block';
            unmutedIcon.style.display = 'none';
            volumeBtn.setAttribute('aria-label', 'Unmute volume');
        }
    });
});






gsap.to(".glass-container", {
    scrollTrigger: {
        trigger: ".glass-container",
        start: "top center",
        end: "bottom center",
        scrub: true
    },
    rotationY: 15,
    rotationX: 5,
    transformOrigin: "center center",
    ease: "none"
});

gsap.to(".social-link", {
    y: -10,
    duration: 2,
    ease: "power2.inOut",
    stagger: 0.2,
    yoyo: true,
    repeat: -1
});

gsap.fromTo(".footer",
    {
        opacity: 0,
        y: 50
    },
    {
        scrollTrigger: {
            trigger: ".footer",
            start: "top 90%",
            end: "top 60%",
            scrub: 1
        },
        opacity: 1,
        y: 0,
        ease: "power2.out"
    }
);



gsap.utils.toArray("section").forEach(section => {
    gsap.from(section, {
        scrollTrigger: {
            trigger: section,
            start: "top 85%",
        },
        y: 100,
        opacity: 0,
        duration: 1.2,
        ease: "power4.out"
    });
});

// Team section advanced animations
gsap.to(".team-image", {
    scrollTrigger: {
        trigger: ".team-section",
        start: "top 80%",
        end: "top 30%",
        scrub: 2
    },
    opacity: 1,
    x: 0,
    rotationY: 0,
    ease: "power3.out"
});

gsap.to(".team-info", {
    scrollTrigger: {
        trigger: ".team-section",
        start: "top 80%",
        end: "top 30%",
        scrub: 2
    },
    opacity: 1,
    x: 0,
    rotationY: 0,
    ease: "power3.out"
});

// Goals section title with morphing effect
gsap.fromTo("#services h2", {
    opacity: 0,
    scale: 0.5,
    rotationX: -90,
    transformOrigin: "center bottom"
}, {
    scrollTrigger: {
        trigger: "#services h2",
        start: "top 85%",
        end: "top 50%",
        scrub: 2
    },
    opacity: 1,
    scale: 1,
    rotationX: 0,
    ease: "power3.out"
});

gsap.fromTo("#about p", {
    opacity: 0,
    y: 50,
    x: (index) => index % 2 === 0 ? -50 : 50
}, {
    scrollTrigger: {
        trigger: "#about",
        start: "top 70%",
        end: "top 30%",
        scrub: 1
    },
    opacity: 1,
    y: 0,
    x: 0,
    stagger: 0.2,
    ease: "power2.out"
});
const lenis = new Lenis();

function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
}

requestAnimationFrame(raf);




const sponsors = [
    {
        name: 'PIRELLI',
        subtitle: 'Power is nothing without control.',
        icon: '../../assets/sponsors/pirelli.png',
        gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        bio: '-',
        website: 'https://pirelli.com'
    },
    {
        name: 'PIRELLI',
        subtitle: 'Power is nothing without control.',
        icon: '../../assets/sponsors/pirelli.png',
        gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        bio: '-',
        website: 'https://pirelli.com'
    },
    {
        name: 'PIRELLI',
        subtitle: 'Power is nothing without control.',
        icon: '../../assets/sponsors/pirelli.png',
        gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        bio: '-',
        website: 'https://pirelli.com'
    }
];

const tabStack = document.getElementById('tabStack');
const tabs = Array.from(tabStack.querySelectorAll('.tab'));
const modalOverlay = document.getElementById('modalOverlay');
const modalLogo = document.getElementById('modalLogo');
const modalTitle = document.getElementById('modalTitle');
const modalSubtitle = document.getElementById('modalSubtitle');
const modalBio = document.getElementById('modalBio');
const modalLink = document.getElementById('modalLink');

let isAnimating = false;
let order = Array.from({ length: tabs.length }, (_, i) => i);

const cardDistance = 60;
const verticalDistance = 70;
const skewAmount = 6;

function makeSlot(i, total) {
    return {
        x: i * cardDistance,
        y: -i * verticalDistance,
        z: -i * cardDistance * 1.5,
        zIndex: total - i
    };
}

function placeTab(tab, slot) {
    tab.style.transform = `translate(-50%, -50%) translate3d(${slot.x}px, ${slot.y}px, ${slot.z}px) skewY(${skewAmount}deg)`;
    tab.style.transformOrigin = 'center center';
    tab.style.zIndex = slot.zIndex;
}

function initializeTabs() {
    tabs.forEach((tab, i) => {
        const slot = makeSlot(i, tabs.length);
        placeTab(tab, slot);
    });
}

function swapTabs(direction) {
    if (isAnimating) return;
    isAnimating = true;

    if (direction === 'down') {
        const [front, ...rest] = order;
        const frontTab = tabs[front];

        frontTab.style.transition = 'transform 0.8s cubic-bezier(0.34, 1.56, 0.64, 1)';
        const currentTransform = frontTab.style.transform;
        frontTab.style.transform = currentTransform.replace(/translate3d\([^)]+\)/, 'translate3d(0px, 500px, 0px)');

        setTimeout(() => {
            rest.forEach((idx, i) => {
                const tab = tabs[idx];
                const slot = makeSlot(i, tabs.length);
                tab.style.transition = 'transform 0.8s cubic-bezier(0.34, 1.56, 0.64, 1), z-index 0s';
                tab.style.zIndex = slot.zIndex;
                placeTab(tab, slot);
            });
        }, 400);

        setTimeout(() => {
            const backSlot = makeSlot(tabs.length - 1, tabs.length);
            frontTab.style.zIndex = backSlot.zIndex;
            placeTab(frontTab, backSlot);

            order = [...rest, front];

            setTimeout(() => {
                tabs.forEach(tab => {
                    tab.style.transition = '';
                });
                isAnimating = false;
            }, 800);
        }, 1000);
    } else {
        const back = order[order.length - 1];
        const backTab = tabs[back];
        const rest = order.slice(0, -1);

        backTab.style.transition = 'transform 0.8s cubic-bezier(0.34, 1.56, 0.64, 1)';
        const frontSlot = makeSlot(0, tabs.length);
        backTab.style.zIndex = frontSlot.zIndex;
        placeTab(backTab, frontSlot);

        setTimeout(() => {
            rest.forEach((idx, i) => {
                const tab = tabs[idx];
                const slot = makeSlot(i + 1, tabs.length);
                tab.style.transition = 'transform 0.8s cubic-bezier(0.34, 1.56, 0.64, 1), z-index 0s';
                tab.style.zIndex = slot.zIndex;
                placeTab(tab, slot);
            });

            order = [back, ...rest];

            setTimeout(() => {
                tabs.forEach(tab => {
                    tab.style.transition = '';
                });
                isAnimating = false;
            }, 800);
        }, 100);
    }
}

function showModal(sponsorIndex) {
    const sponsor = sponsors[sponsorIndex];
    modalLogo.style.background = sponsor.gradient;
    modalLogo.innerHTML = `<img src="${sponsor.icon}" alt="${sponsor.name}" style="max-width: 300px; max-height: 300px">`;
    modalTitle.textContent = sponsor.name;
    modalSubtitle.textContent = sponsor.subtitle;
    modalBio.textContent = sponsor.bio;
    modalLink.href = sponsor.website;

    modalOverlay.classList.add('active');
}

function closeModal() {
    modalOverlay.classList.remove('active');
}

let scrollTimeout;
window.addEventListener('wheel', (e) => {
    if (modalOverlay.classList.contains('active')) return;

    clearTimeout(scrollTimeout);
    scrollTimeout = setTimeout(() => {
        if (e.deltaY > 0) {
            swapTabs('down');
        } else {
            swapTabs('up');
        }
    }, 50);
}, { passive: true });

tabStack.addEventListener('click', (e) => {
    const tab = e.target.closest('.tab');
    if (tab && tabs.indexOf(tab) === order[0]) {
        const sponsorIndex = parseInt(tab.dataset.sponsor);
        showModal(sponsorIndex);
    }
});

modalOverlay.addEventListener('click', (e) => {
    if (e.target === modalOverlay) {
        closeModal();
    }
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeModal();
    }
});

initializeTabs();