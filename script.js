// Slider animation variable
let currentFrame = 1;
let isPlaying = false;
let animationInterval = null;

// Populate table on page load
document.addEventListener('DOMContentLoaded', function() {
    initializeSlider();
    initializeParticles();
    initializeScrollAnimations();
    initializeMouseTracking();
});


// Initialize slider
function initializeSlider() {
    const slider = document.getElementById('timeSlider');
    const playBtn = document.getElementById('playBtn');

    if (slider && playBtn) {
        slider.addEventListener('input', function() {
            currentFrame = parseInt(this.value);
            updateMapDisplay(currentFrame);
        });
        playBtn.addEventListener('click', togglePlayPause);
    }
}

// Update map display
function updateMapDisplay(frame) {
    const mapImg = document.getElementById('sliderMap');
    const dateDisplay = document.getElementById('dateDisplay');
    const currentDateLabel = document.getElementById('currentDateLabel');

    if (!mapImg) return;

    const frameStr = String(frame).padStart(4, '0');
    mapImg.src = `assets/map/gganim_plot${frameStr}.png`;

    // Frames 1-50: Jan 2021 to Dec 2025 (60 months)
    const startDate = new Date(2021, 0, 1);
    const monthsPerFrame = 60 / 50;
    const monthsElapsed = Math.floor((frame - 1) * monthsPerFrame);

    const displayDate = new Date(startDate);
    displayDate.setMonth(displayDate.getMonth() + monthsElapsed);

    const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const dateString = `${monthNames[displayDate.getMonth()]} ${displayDate.getFullYear()}`;

    if (dateDisplay) dateDisplay.textContent = dateString;
    if (currentDateLabel) currentDateLabel.textContent = dateString;
}

// Toggle play/pause
function togglePlayPause() {
    const playBtn = document.getElementById('playBtn');
    if (isPlaying) {
        stopAnimation();
        playBtn.innerHTML = '▶';
        playBtn.style.paddingLeft = '3px';
    } else {
        startAnimation();
        playBtn.innerHTML = '⏸';
        playBtn.style.paddingLeft = '0';
    }
}

// Start animation
function startAnimation() {
    isPlaying = true;
    animationInterval = setInterval(() => {
        currentFrame++;
        if (currentFrame > 50) currentFrame = 1;
        const slider = document.getElementById('timeSlider');
        if (slider) slider.value = currentFrame;
        updateMapDisplay(currentFrame);
    }, 150);
}

// Stop animation
function stopAnimation() {
    isPlaying = false;
    if (animationInterval) {
        clearInterval(animationInterval);
        animationInterval = null;
    }
}

// Smooth scrolling for navigation links
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

// Add active state to navigation on scroll and navbar effects
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-menu a');

    // Add scrolled class to navbar
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }

    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - 100) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Mobile menu toggle
document.addEventListener('DOMContentLoaded', function() {
    const navMenu = document.querySelector('.nav-menu');
    const navBrand = document.querySelector('.nav-brand');

    // Create mobile menu button
    const mobileMenuBtn = document.createElement('button');
    mobileMenuBtn.className = 'mobile-menu-btn';
    mobileMenuBtn.innerHTML = '☰';
    mobileMenuBtn.setAttribute('aria-label', 'Toggle menu');

    navBrand.parentNode.insertBefore(mobileMenuBtn, navMenu);

    mobileMenuBtn.addEventListener('click', function() {
        navMenu.classList.toggle('active');
        this.innerHTML = navMenu.classList.contains('active') ? '✕' : '☰';
    });

    // Close mobile menu when clicking a link
    navLinks = navMenu.querySelectorAll('a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navMenu.classList.remove('active');
            mobileMenuBtn.innerHTML = '☰';
        });
    });
});


// Initialize particles.js for hero background with cursor response
function initializeParticles() {
    if (typeof particlesJS === 'undefined') return;

    particlesJS('particles-js', {
        particles: {
            number: {
                value: 60,
                density: {
                    enable: true,
                    value_area: 800
                }
            },
            color: {
                value: '#ffffff'
            },
            shape: {
                type: 'circle'
            },
            opacity: {
                value: 0.6,
                random: true,
                anim: {
                    enable: true,
                    speed: 1,
                    opacity_min: 0.2,
                    sync: false
                }
            },
            size: {
                value: 4,
                random: true,
                anim: {
                    enable: true,
                    speed: 3,
                    size_min: 0.3,
                    sync: false
                }
            },
            line_linked: {
                enable: true,
                distance: 200,
                color: '#ffffff',
                opacity: 0.5,
                width: 1.5
            },
            move: {
                enable: true,
                speed: 1.5,
                direction: 'none',
                random: true,
                straight: false,
                out_mode: 'out',
                bounce: false,
                attract: {
                    enable: true,
                    rotateX: 600,
                    rotateY: 1200
                }
            }
        },
        interactivity: {
            detect_on: 'canvas',
            events: {
                onhover: {
                    enable: true,
                    mode: ['grab', 'bubble']
                },
                onclick: {
                    enable: true,
                    mode: 'repulse'
                },
                resize: true
            },
            modes: {
                grab: {
                    distance: 250,
                    line_linked: {
                        opacity: 0.8
                    }
                },
                bubble: {
                    distance: 200,
                    size: 8,
                    duration: 2,
                    opacity: 0.8,
                    speed: 3
                },
                repulse: {
                    distance: 150,
                    duration: 0.4
                }
            }
        },
        retina_detect: true
    });
}

// Scroll animations
function initializeScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe all sections and cards
    document.querySelectorAll('.section, .about-card, .viz-container, .stat-card, .author-item').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        observer.observe(el);
    });
}

// Mouse tracking for hero section - interactive blobs only
function initializeMouseTracking() {
    const hero = document.querySelector('.hero');
    if (!hero) return;

    const blob1 = document.querySelector('.blob-1');
    const blob2 = document.querySelector('.blob-2');
    const blob3 = document.querySelector('.blob-3');

    hero.addEventListener('mousemove', (e) => {
        const { clientX, clientY } = e;
        const { offsetWidth, offsetHeight } = hero;

        // Normalize mouse position (-1 to 1)
        const xPos = (clientX / offsetWidth - 0.5) * 2;
        const yPos = (clientY / offsetHeight - 0.5) * 2;

        // Move blobs in different directions with different intensities
        if (blob1) {
            const x1 = xPos * 100;
            const y1 = yPos * 100;
            blob1.style.transform = `translate(${x1}px, ${y1}px)`;
            blob1.style.transition = 'transform 0.5s ease-out';
        }

        if (blob2) {
            const x2 = xPos * -80;
            const y2 = yPos * -80;
            blob2.style.transform = `translate(${x2}px, ${y2}px)`;
            blob2.style.transition = 'transform 0.5s ease-out';
        }

        if (blob3) {
            const x3 = xPos * 120;
            const y3 = yPos * -120;
            blob3.style.transform = `translate(calc(-50% + ${x3}px), calc(-50% + ${y3}px)) scale(1.15)`;
            blob3.style.transition = 'transform 0.6s ease-out';
        }
    });

    hero.addEventListener('mouseleave', () => {
        // Reset all blob positions
        if (blob1) blob1.style.transform = 'translate(0, 0)';
        if (blob2) blob2.style.transform = 'translate(0, 0)';
        if (blob3) blob3.style.transform = 'translate(-50%, -50%)';
    });
}
