

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

document.addEventListener('DOMContentLoaded', function() {
    // Logo entrance animation

    particlesJS('particles-resources',{
        "particles": {
            "number": {
                "value": 355,
                "density": {
                    "enable": true,
                    "value_area": 709.4994087504933
                }
            },
            "color": {
                "value": "#fff"
            },
            "shape": {
                "type": "circle",
                "stroke": {
                    "width": 0,
                    "color": "#000000"
                },
                "polygon": {
                    "nb_sides": 5
                },
                "image": {
                    "src": "img/github.svg",
                    "width": 100,
                    "height": 100
                }
            },
            "opacity": {
                "value": 0.39416633819471847,
                "random": true,
                "anim": {
                    "enable": false,
                    "speed": 1,
                    "opacity_min": 0.1,
                    "sync": false
                }
            },
            "size": {
                "value": 2.2,
                "random": true,
                "anim": {
                    "enable": false,
                    "speed": 40,
                    "size_min": 0.1,
                    "sync": false
                }
            },
            "line_linked": {
                "enable": false,
                "distance": 500,
                "color": "#ffffff",
                "opacity": 0.4,
                "width": 2
            },
            "move": {
                "enable": true,
                "speed": 0.3,
                "direction": "bottom",
                "random": false,
                "straight": false,
                "out_mode": "out",
                "bounce": false,
                "attract": {
                    "enable": false,
                    "rotateX": 600,
                    "rotateY": 1200
                }
            }
        },
        "interactivity": {
            "detect_on": "canvas",
            "events": {
                "onhover": {
                    "enable": false,
                    "mode": "bubble"
                },
                "onclick": {
                    "enable": false,
                    "mode": "remove"
                },
                "resize": true
            },
            "modes": {
                "grab": {
                    "distance": 400,
                    "line_linked": {
                        "opacity": 0.5
                    }
                },
                "bubble": {
                    "distance": 400,
                    "size": 4,
                    "duration": 0.3,
                    "opacity": 1,
                    "speed": 3
                },
                "repulse": {
                    "distance": 200,
                    "duration": 0.4
                },
                "push": {
                    "particles_nb": 4
                },
                "remove": {
                    "particles_nb": 2
                }
            }
        },
        "retina_detect": true
    })

    // Initialize particles for About section
    particlesJS('particles-awards', {
        "particles": {
            "number": {
                "value": 38,
                "density": {
                    "enable": true,
                    "value_area": 2762.016745712954
                }
            },
            "color": {
                "value": "#ffffff"
            },
            "shape": {
                "type": "circle",
                "stroke": {
                    "width": 0,
                    "color": "#000000"
                },
                "polygon": {
                    "nb_sides": 3
                },
                "image": {
                    "src": "img/github.svg",
                    "width": 100,
                    "height": 100
                }
            },
            "opacity": {
                "value": 1,
                "random": true,
                "anim": {
                    "enable": true,
                    "speed": 1,
                    "opacity_min": 0,
                    "sync": false
                }
            },
            "size": {
                "value": 8.017060304327615,
                "random": true,
                "anim": {
                    "enable": false,
                    "speed": 4,
                    "size_min": 0.3,
                    "sync": false
                }
            },
            "line_linked": {
                "enable": false,
                "distance": 150,
                "color": "#ffffff",
                "opacity": 0.4,
                "width": 1
            },
            "move": {
                "enable": true,
                "speed": 1,
                "direction": "top",
                "random": true,
                "straight": false,
                "out_mode": "out",
                "bounce": false,
                "attract": {
                    "enable": false,
                    "rotateX": 600,
                    "rotateY": 600
                }
            }
        },
        "interactivity": {
            "detect_on": "canvas",
            "events": {
                "onhover": {
                    "enable": true,
                    "mode": "bubble"
                },
                "onclick": {
                    "enable": true,
                    "mode": "repulse"
                },
                "resize": true
            },
            "modes": {
                "grab": {
                    "distance": 400,
                    "line_linked": {
                        "opacity": 1
                    }
                },
                "bubble": {
                    "distance": 250,
                    "size": 0,
                    "duration": 2,
                    "opacity": 0,
                    "speed": 3
                },
                "repulse": {
                    "distance": 400,
                    "duration": 0.4
                },
                "push": {
                    "particles_nb": 4
                },
                "remove": {
                    "particles_nb": 2
                }
            }
        },
        "retina_detect": true
    });

    particlesJS('particles-about', {
        "particles": {
            "number": {
                "value": 160,
                "density": {
                    "enable": true,
                    "value_area": 800
                }
            },
            "color": {
                "value": "#ffffff"
            },
            "shape": {
                "type": "circle",
                "stroke": {
                    "width": 0,
                    "color": "#000000"
                },
                "polygon": {
                    "nb_sides": 5
                }
            },
            "opacity": {
                "value": 1,
                "random": true,
                "anim": {
                    "enable": true,
                    "speed": 1,
                    "opacity_min": 0,
                    "sync": false
                }
            },
            "size": {
                "value": 3,
                "random": true,
                "anim": {
                    "enable": false,
                    "speed": 4,
                    "size_min": 0.3,
                    "sync": false
                }
            },
            "line_linked": {
                "enable": false,
                "distance": 150,
                "color": "#ffffff",
                "opacity": 0.4,
                "width": 1
            },
            "move": {
                "enable": true,
                "speed": 1,
                "direction": "none",
                "random": true,
                "straight": false,
                "out_mode": "out",
                "bounce": false,
                "attract": {
                    "enable": false,
                    "rotateX": 600,
                    "rotateY": 600
                }
            }
        },
        "interactivity": {
            "detect_on": "canvas",
            "events": {
                "onhover": {
                    "enable": true,
                    "mode": "bubble"
                },
                "onclick": {
                    "enable": true,
                    "mode": "repulse"
                },
                "resize": true
            },
            "modes": {
                "grab": {
                    "distance": 400,
                    "line_linked": {
                        "opacity": 1
                    }
                },
                "bubble": {
                    "distance": 250,
                    "size": 0,
                    "duration": 2,
                    "opacity": 0,
                    "speed": 3
                },
                "repulse": {
                    "distance": 400,
                    "duration": 0.4
                },
                "push": {
                    "particles_nb": 4
                },
                "remove": {
                    "particles_nb": 2
                }
            }
        },
        "retina_detect": true
    });

    // Initialize particles for Goals section
    particlesJS('particles-js', {
        "particles": {
            "number": {
                "value": 80,
                "density": {
                    "enable": true,
                    "value_area": 2500
                }
            },
            "color": {
                "value": ["#00d4ff", "#667eea", "#764ba2", "#ffffff"]
            },
            "shape": {
                "type": ["circle", "triangle"],
                "stroke": {
                    "width": 0,
                    "color": "#000000"
                }
            },
            "opacity": {
                "value": 0.6,
                "random": true,
                "anim": {
                    "enable": true,
                    "speed": 1,
                    "opacity_min": 0.1,
                    "sync": false
                }
            },
            "size": {
                "value": 4,
                "random": true,
                "anim": {
                    "enable": true,
                    "speed": 2,
                    "size_min": 0.5,
                    "sync": false
                }
            },
            "line_linked": {
                "enable": true,
                "distance": 150,
                "color": "#00d4ff",
                "opacity": 0.4,
                "width": 1
            },
            "move": {
                "enable": true,
                "speed": 2,
                "direction": "none",
                "random": true,
                "straight": false,
                "out_mode": "out",
                "bounce": false,
                "attract": {
                    "enable": false,
                    "rotateX": 600,
                    "rotateY": 1200
                }
            }
        },
        "interactivity": {
            "detect_on": "canvas",
            "events": {
                "onhover": {
                    "enable": true,
                    "mode": "grab"
                },
                "onclick": {
                    "enable": true,
                    "mode": "push"
                },
                "resize": true
            },
            "modes": {
                "grab": {
                    "distance": 140,
                    "line_linked": {
                        "opacity": 1
                    }
                },
                "push": {
                    "particles_nb": 4
                }
            }
        },
        "retina_detect": true
    });

    // Navbar scroll effect
    const navbar = document.getElementById('navbar');
    const navLinks = document.querySelectorAll('.nav-link');

    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }

        // Update active nav link based on scroll position
        let current = '';
        const sections = document.querySelectorAll('section');
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (scrollY >= (sectionTop - 200)) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === '#' + current) {
                link.classList.add('active');
            }
        });
    });

    // Add smooth scrolling behavior for internal links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Video pause/play optimization
});

let startX = 0;
let currentX = 0;
let targetX = 0;

(function () {
    const container = document.getElementById('container');
    const gallery = document.getElementById('gallery');
    if (!container || !gallery) return;

    let isDown = false;

    // recompute bounds based on real content width
    function getBounds() {
        const railWidth = gallery.scrollWidth;     // total width of the horizontal rail
        const viewWidth = container.clientWidth;   // viewport width for the gallery
        const maxRight = 0;                        // cannot go past start
        const maxLeft = Math.min(0, viewWidth - railWidth); // negative value
        return { min: maxLeft, max: maxRight };
    }

    function clampTarget() {
        const { min, max } = getBounds();
        targetX = Math.max(min, Math.min(max, targetX));
    }

    function animate() {
        currentX += (targetX - currentX) * 0.12; // smoothing
        gallery.style.transform = `translateX(${currentX}px)`;
        requestAnimationFrame(animate);
    }

    // Drag support (mouse)
    container.addEventListener('mousedown', (e) => {
        isDown = true;
        container.classList.add('grabbing');
        startX = e.pageX - currentX;
    });
    window.addEventListener('mouseup', () => {
        isDown = false;
        container.classList.remove('grabbing');
    });
    window.addEventListener('mousemove', (e) => {
        if (!isDown) return;
        targetX = e.pageX - startX;
        clampTarget();
    });

    // Touch support
    container.addEventListener('touchstart', (e) => {
        isDown = true;
        container.classList.add('grabbing');
        startX = e.touches[0].pageX - currentX;
    }, { passive: true });
    window.addEventListener('touchend', () => {
        isDown = false;
        container.classList.remove('grabbing');
    }, { passive: true });
    window.addEventListener('touchmove', (e) => {
        if (!isDown) return;
        targetX = e.touches[0].pageX - startX;
        clampTarget();
    }, { passive: true });

    // Recompute on resize/content changes
    window.addEventListener('resize', clampTarget);

    // Reveal-on-view using IntersectionObserver relative to the gallery viewport
    const cards = Array.from(gallery.querySelectorAll('.card'));
    const io = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
            } else {
                entry.target.classList.remove('is-visible');
            }
        });
    }, {
        root: container,       // use the gallery viewport
        rootMargin: '0px',
        threshold: 0.2         // reveal when 20% visible
    });
    cards.forEach(c => io.observe(c));

    // Kick off
    clampTarget();
    animate();
})();


const target = "Resources";
const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!?@#$%&*";
const container = document.getElementById("decrypt2");

// Initialize spans for each character
const spans = [];
for (let i = 0; i < target.length; i++) {
    const span = document.createElement("span");
    span.textContent = getRandomChar();
    span.classList.add("char");
    container.appendChild(span);
    spans.push(span);
}

function getRandomChar() {
    return chars[Math.floor(Math.random() * chars.length)];
}

function resolveChar(index) {
    if (index >= target.length) return;
    let span = spans[index];
    // Animate a few random flickers first
    let flickers = 0;
    const maxFlickers = 3;
    const flickInterval = setInterval(() => {
        span.textContent = getRandomChar();
        flickers++;
        if (flickers >= maxFlickers) {
            clearInterval(flickInterval);
            // finally set the correct character
            span.textContent = target[index];
            span.classList.add("resolved");
            // schedule next character
            setTimeout(() => resolveChar(index + 1), 0);
        }
    }, 30);
}

// Start resolving at index 0
resolveChar(0);
const yearButton = document.getElementById('yearButton');
const dropdownMenu = document.getElementById('dropdownMenu');
const overlay = document.getElementById('overlay');
const yearOptions = document.querySelectorAll('.year-option');
const seasonLogo = document.getElementById('season_logo');

const seasonLogos = {
    '2025': '/assets/seasons/itd.png',
    '2024': '/assets/seasons/centerstage.png',
    '2023': '/assets/seasons/centerstage.png',
};

// Create timelines for smooth animations
const openTimeline = gsap.timeline({ paused: true });
const closeTimeline = gsap.timeline({ paused: true });

// Setup open animation
openTimeline
    .to(overlay, {
        opacity: 1,
        pointerEvents: 'auto',
        duration: 0.3,
        ease: 'power2.out'
    }, 0)
    .fromTo(dropdownMenu,
        {
            opacity: 0,
            y: -20,
            scale: 0.95,
            transformOrigin: 'top center'
        },
        {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.4,
            ease: 'back.out(1.7)'
        }, 0.1)
    .fromTo(yearOptions,
        {
            opacity: 0,
            x: -20
        },
        {
            opacity: 1,
            x: 0,
            duration: 0.3,
            stagger: 0.08,
            ease: 'power2.out'
        }, 0.2);

// Setup close animation
closeTimeline
    .to(yearOptions, {
        opacity: 0,
        x: 20,
        duration: 0.2,
        stagger: 0.05,
        ease: 'power2.in'
    }, 0)
    .to(dropdownMenu, {
        opacity: 0,
        y: -10,
        scale: 0.95,
        duration: 0.3,
        ease: 'power2.in'
    }, 0.1)
    .to(overlay, {
        opacity: 0,
        pointerEvents: 'none',
        duration: 0.2,
        ease: 'power2.in'
    }, 0.2);

// Toggle function
let isOpen = false;
const selectedYearSpan = document.getElementById('selectedYear');

yearButton.addEventListener('click', () => {
    if (!isOpen) {
        dropdownMenu.classList.add('show');
        openTimeline.restart();
        isOpen = true;
    } else {
        closeTimeline.restart();
        isOpen = false;
        closeTimeline.eventCallback('onComplete', () => {
            dropdownMenu.classList.remove('show');
        });
    }
});

yearOptions.forEach(option => {
    option.addEventListener('click', (e) => {
        isOpen = false;
        const year = e.target.dataset.year;
        gsap.to(seasonLogo, {
            opacity: 0,
            scale: 0.8,
            rotationY: 90,
            duration: 0.3,
            ease: 'power2.in',
            onComplete: () => {
                // Change the image source
                seasonLogo.src = seasonLogos[year];

                // Animate logo back in
                gsap.fromTo(seasonLogo,
                    {
                        opacity: 0,
                        scale: 0.4,
                        rotationY: -90
                    },
                    {
                        opacity: 1,
                        scale: 1,
                        rotationY: 0,
                        duration: 0.15,
                        ease: 'back.out(1.7)'
                    }
                );
            }
        });
        // Update selected year display
        selectedYearSpan.textContent = year;
        PowerGlitch.glitch(".decrypted",{
            "timing": {
                "duration": 1000,
                "iterations": 1,
                "easing": "ease-in-out"
            },
            "glitchTimeSpan": {
                "start": 0,
                "end": 0.45
            }
        });
        // Update selected state
        yearOptions.forEach(opt => opt.classList.remove('selected'));
        e.target.classList.add('selected');

        // Close dropdown
        dropdownMenu.classList.remove('show');

        // Add your logic here to load resources for the selected year
        console.log('Selected year: ' + year);
    });
});
// Hover effects on year options
yearOptions.forEach(option => {
    option.addEventListener('mouseenter', function() {
        gsap.to(this, {
            x: 5,
            backgroundColor: 'rgba(255, 255, 255, 0)',
            duration: 0.2,
            ease: 'power2.out'
        });
    });

    option.addEventListener('mouseleave', function() {
        if (!this.classList.contains('selected')) {
            gsap.to(this, {
                x: 0,
                backgroundColor: 'transparent',
                duration: 0.2,
                ease: 'power2.out'
            });
        }
    });
});
// Resource Type Switcher Functionality
const typeDropdownMenu = document.getElementById('typeDropdownMenu');
const typeOverlay = document.getElementById('typeOverlay');
const typeOptions = document.querySelectorAll('.type-option');
const selectedTypeSpan = document.getElementById('selectedType');
const galleryCards = document.querySelectorAll('.gallery .card');
const noneText = document.getElementById('no_stuff');
let currentResourceType = 'all';
// Handle type selection
typeOptions.forEach(option => {
    option.addEventListener('click', () => {
        hasFound = false;
        const selectedType = option.dataset.type;
        typeOptions.forEach(opt => opt.classList.remove('selected'));
        option.classList.add('selected');
        // Update button text
        currentResourceType = selectedType;
        filterCards();
    });
});

// Filter cards based on selected type
let hasFound = false;
function filterCards() {
    galleryCards.forEach(card => {
        targetX = 0;
        const cardType = card.dataset.type.split(" ");
        if (currentResourceType === 'all' || cardType[0] === currentResourceType || cardType[1] === currentResourceType) {
            noneText.classList.remove('show');
            hasFound = true;
            card.classList.remove('hidden');
            // Optional: Add animation
            card.style.animation = 'fadeIn 0.5s easeO';
        } else {
            card.classList.add('hidden');
        }
    });
    if(!hasFound){
        noneText.classList.add('show');
    }
}
// Add click handlers for cards with PDFs at the END of the file
document.addEventListener('DOMContentLoaded', function() {
    // Add click handlers for cards with PDFs
    const cards = document.querySelectorAll('.card.is-visible[data-pdf]');

    cards.forEach(card => {
        const h3 = card.querySelector('h3');
        if (h3) {
            // Add pointer cursor to indicate it's clickable
            h3.style.cursor = 'pointer';

            // Add click event to the h3 element
            h3.addEventListener('click', function(e) {
                e.preventDefault();
                e.stopPropagation();
                const pdfFile = card.getAttribute('data-pdf');
                if (pdfFile) {
                    // Open PDF in new tab
                    const pdfPath = '/assets/resources/docs/' + pdfFile;
                    console.log('Opening PDF:', pdfPath); // For debugging
                    window.open(pdfPath, '_blank');
                }
            });
        }
    });
});
