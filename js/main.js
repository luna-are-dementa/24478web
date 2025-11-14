


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
PowerGlitch.glitch('.hero-logo',
    {
        "timing": {
            "duration": 3000,
            "easing": "ease-in-out"
        }
    })
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

const logo = document.getElementById('hero_logo');

logo.addEventListener('mouseenter', () => {
    gsap.to(logo, {
        duration: 0.25,
        scale: 1.05,
        filter: "drop-shadow(0 0 20px #00d4ff) drop-shadow(0 0 30px #764ba2)",
        ease: "power1.inOut"
    });
});

logo.addEventListener('mouseleave', () => {
    gsap.to(logo, {
        duration: 0.3,
        scale: 1,
        filter: "drop-shadow(0 0 0px #00d4ff) drop-shadow(0 0 0px #764ba2)",
        ease: "power1.inOut"
    });
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


gsap.from(".hero-content .hero-logo", {
    scrollTrigger: {
        trigger: ".hero",
        start: "top 80%",
    },
    scale: 0.2,
    rotation: 0,
    opacity: 0,
    duration: 1,
    ease: "power3.out"
});

gsap.to(".hero-logo", {
    scrollTrigger: {
        trigger: ".hero",
        start: "top center",
        end: "bottom center",
        scrub: true
    },
    rotationY: 25,
    transformOrigin: "center center",
    ease: "none"
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

gsap.to("#bg-video", {
    scrollTrigger: {
        trigger: ".hero-section",
        start: "top top",
        end: "bottom top",
        scrub: 1
    },
    scale: 1.2,
    y: -100,
    ease: "none"
});

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
    const heroLogo = document.getElementById('hero_logo');
    const heroSubtitle = document.getElementById('hero_subtitle');
    const heroCta = document.getElementById('hero_cta');

    // Trigger logo animation after a brief delay
    setTimeout(() => {
        heroLogo.classList.add('loaded');
    }, 500);

    // Trigger subtitle animation
    setTimeout(() => {
        heroSubtitle.classList.add('loaded');
    }, 1000);

    // Trigger CTA button animation
    setTimeout(() => {
        heroCta.classList.add('loaded');
    }, 1500);

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
    const video = document.getElementById('bg-video');
    const hero = document.getElementById('hero');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                video.play();
            }
        });
    });
    observer.observe(hero);
});