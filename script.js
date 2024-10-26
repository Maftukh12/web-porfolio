particlesJS('particles-js', {
    particles: {
        number: { value: 80, density: { enable: true, value_area: 800 } },
        color: { value: '#3b82f6' },
        shape: { type: 'circle' },
        opacity: { value: 0.5, random: false },
        size: { value: 3, random: true },
        line_linked: {
            enable: true,
            distance: 150,
            color: '#3b82f6',
            opacity: 0.4,
            width: 1
        },
        move: {
            enable: true,
            speed: 6,
            direction: 'none',
            random: false,
            straight: false,
            out_mode: 'out',
            bounce: false
        }
    },
    interactivity: {
        detect_on: 'canvas',
        events: {
            onhover: { enable: true, mode: 'repulse' },
            onclick: { enable: true, mode: 'push' },
            resize: true
        }
    },
    retina_detect: true
});

const themeToggle = document.getElementById('theme-toggle');
const icon = themeToggle.querySelector('i');

themeToggle.addEventListener('click', () => {
    document.body.setAttribute('data-theme', 
        document.body.getAttribute('data-theme') === 'dark' ? 'light' : 'dark');
    icon.classList.toggle('fa-moon');
    icon.classList.toggle('fa-sun');
});


gsap.from('.hero h1', {
    duration: 1,
    y: 100,
    opacity: 0,
    ease: 'power4.out'
});

gsap.from('.hero p', {
    duration: 1,
    y: 50,
    opacity: 0,
    ease: 'power4.out',
    delay: 0.2
});
// Profile Section Animations
gsap.from('.profile-image', {
    duration: 1.2,
    y: 100,
    opacity: 0,
    ease: 'power4.out',
    delay: 0.4
});

gsap.from('.social-icons', {
    duration: 1,
    y: 50,
    opacity: 0,
    ease: 'power4.out',
    delay: 0.6
});
document.querySelectorAll('.social-icon').forEach(icon => {
    icon.addEventListener('mouseover', () => {
        gsap.to(icon, {
            duration: 0.3,
            y: -5,
            scale: 1.1,
            ease: 'power2.out'
        });
    });

    icon.addEventListener('mouseout', () => {
        gsap.to(icon, {
            duration: 0.3,
            y: 0,
            scale: 1,
            ease: 'power2.out'
        });
    });
});

gsap.from('.cv-button-container', {
    duration: 1,
    y: 50,
    opacity: 0,
    ease: 'power4.out',
    delay: 0.8
});


document.querySelector('.download-cv').addEventListener('click', function(e) {
    const button = this;
    const icon = button.querySelector('i');
    
   
    const originalIconClass = icon.className;
    
   
    button.classList.add('loading');
    icon.className = 'fas fa-spinner';
    
    
    setTimeout(() => {    
        button.classList.remove('loading');
        icon.className = originalIconClass;
    }, 2000);
});


document.querySelector('.download-cv').addEventListener('mousemove', function(e) {
    const bounds = this.getBoundingClientRect();
    const x = e.clientX - bounds.left;
    const y = e.clientY - bounds.top;
    
    gsap.to(this, {
        '--x': `${x}px`,
        '--y': `${y}px`,
        duration: 0.3,
        ease: 'power2.out'
    });
});

gsap.registerPlugin(ScrollTrigger);

gsap.utils.toArray('.glass-card').forEach(card => {
    gsap.from(card, {
        scrollTrigger: {
            trigger: card,
            start: 'top bottom',
            end: 'top center',
            scrub: 1
        },
        y: 100,
        opacity: 0
    });
});

VanillaTilt.init(document.querySelectorAll("[data-tilt]"), {
    max: 25,
    speed: 400,
    glare: true,
    "max-glare": 0.5
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});