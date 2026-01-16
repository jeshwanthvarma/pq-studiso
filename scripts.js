// ===== EXTREME FUTURISTIC JAVASCRIPT =====

// Initialize Quantum System
function initializeQuantumSystem() {
    console.log('🚀 Initializing Quantum System...');
    
    // Initialize particles
    loadParticles();
    
    // Initialize cursor effects
    initializeCursor();
    
    // Start typing effect
    startTypingEffect();
    
    // Initialize counters
    initializeCounters();
    
    // Initialize 3D tilt effects
    initializeTiltEffects();
    
    // Initialize page
    initPage();
    
    // Initialize mobile navigation
    initMobileNavigation();
    
    // Initialize forms
    initForms();
    
    console.log('✅ Quantum System Initialized');
}

// Load Particles
function loadParticles() {
    if (typeof particlesJS !== 'undefined') {
        particlesJS('particle-field', {
            particles: {
                number: { value: 50, density: { enable: true, value_area: 800 } },
                color: { value: ["#00c3ff", "#ff00ff", "#00ff9d"] },
                shape: { type: "circle" },
                opacity: { value: 0.5, random: true },
                size: { value: 3, random: true },
                line_linked: {
                    enable: true,
                    distance: 150,
                    color: "#00c3ff",
                    opacity: 0.2,
                    width: 1
                },
                move: {
                    enable: true,
                    speed: 2,
                    direction: "none",
                    random: true,
                    straight: false,
                    out_mode: "out",
                    bounce: false
                }
            },
            interactivity: {
                detect_on: "canvas",
                events: {
                    onhover: { enable: true, mode: "repulse" },
                    onclick: { enable: true, mode: "push" }
                }
            },
            retina_detect: true
        });
    }
}

// Initialize Futuristic Cursor
function initializeCursor() {
    const cursor = document.getElementById('cyberCursor');
    const trail = document.querySelector('.cursor-trail');
    
    if (!cursor || !trail) return;
    
    let mouseX = 0, mouseY = 0;
    let cursorX = 0, cursorY = 0;
    let trailX = 0, trailY = 0;
    
    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });
    
    function animateCursor() {
        // Smooth cursor movement
        cursorX += (mouseX - cursorX) * 0.1;
        cursorY += (mouseY - cursorY) * 0.1;
        
        cursor.style.left = cursorX + 'px';
        cursor.style.top = cursorY + 'px';
        
        // Trail effect
        trailX += (cursorX - trailX) * 0.2;
        trailY += (cursorY - trailY) * 0.2;
        
        trail.style.left = trailX + 'px';
        trail.style.top = trailY + 'px';
        trail.style.opacity = '0.5';
        
        setTimeout(() => {
            trail.style.opacity = '0';
        }, 100);
        
        requestAnimationFrame(animateCursor);
    }
    
    animateCursor();
    
    // Cursor interactions
    document.querySelectorAll('a, button, .clickable').forEach(el => {
        el.addEventListener('mouseenter', () => {
            cursor.style.transform = 'scale(1.5)';
            cursor.style.borderColor = '#ff00ff';
        });
        
        el.addEventListener('mouseleave', () => {
            cursor.style.transform = 'scale(1)';
            cursor.style.borderColor = '#00c3ff';
        });
    });
}

// Typing Effect
function startTypingEffect() {
    const textElement = document.getElementById('typingText');
    if (!textElement) return;
    
    const texts = [
        "FUTURISTIC PHOTOGRAPHY",
        "AUGMENTED REALITY VISUALS",
        "QUANTUM CREATIVE SOLUTIONS",
        "HOLOGRAPHIC BRAND STORIES"
    ];
    
    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    
    function type() {
        const currentText = texts[textIndex];
        
        if (isDeleting) {
            textElement.textContent = currentText.substring(0, charIndex - 1);
            charIndex--;
        } else {
            textElement.textContent = currentText.substring(0, charIndex + 1);
            charIndex++;
        }
        
        if (!isDeleting && charIndex === currentText.length) {
            isDeleting = true;
            setTimeout(type, 2000);
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            textIndex = (textIndex + 1) % texts.length;
            setTimeout(type, 500);
        } else {
            setTimeout(type, isDeleting ? 50 : 100);
        }
    }
    
    setTimeout(type, 1000);
}

// Initialize Counters
function initializeCounters() {
    const counters = document.querySelectorAll('.stat-value');
    
    counters.forEach(counter => {
        const target = parseInt(counter.getAttribute('data-count') || '0');
        const duration = 2000;
        const step = target / (duration / 16);
        let current = 0;
        
        function updateCounter() {
            current += step;
            if (current < target) {
                counter.textContent = Math.ceil(current);
                requestAnimationFrame(updateCounter);
            } else {
                counter.textContent = target;
            }
        }
        
        // Start counter when in viewport
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    updateCounter();
                    observer.unobserve(entry.target);
                }
            });
        });
        
        observer.observe(counter);
    });
}

// Initialize 3D Tilt Effects
function initializeTiltEffects() {
    if (typeof VanillaTilt !== 'undefined') {
        VanillaTilt.init(document.querySelectorAll('.service-card-3d'), {
            max: 15,
            speed: 400,
            glare: true,
            "max-glare": 0.3,
            gyroscope: true
        });
    }
}

// Page Management
function initPage() {
    // Show home page by default
    showPage('home');
    
    // Handle hash changes
    window.addEventListener('hashchange', () => {
        const pageId = window.location.hash.substring(1) || 'home';
        showPage(pageId);
    });
    
    // Handle back button
    window.addEventListener('popstate', () => {
        const pageId = window.location.hash.substring(1) || 'home';
        showPage(pageId);
    });
}

function showPage(pageId) {
    // Hide all pages
    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active');
    });
    
    // Show selected page
    const selectedPage = document.getElementById(pageId + '-page');
    if (selectedPage) {
        selectedPage.classList.add('active');
    }
    
    // Update navigation
    updateNavigation(pageId);
    
    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
    // Close mobile menu if open
    closeMobileNav();
    
    // Show hologram notification
    showHologramMessage(`Accessing ${pageId.toUpperCase()} module...`);
}

function updateNavigation(pageId) {
    // Update nav links
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${pageId}`) {
            link.classList.add('active');
        }
    });
    
    // Update mobile nav
    document.querySelectorAll('.mobile-nav-cell').forEach(cell => {
        cell.classList.remove('active');
        if (cell.getAttribute('href') === `#${pageId}`) {
            cell.classList.add('active');
        }
    });
}

// Hologram Notification System
function showHologramMessage(message) {
    const hologram = document.getElementById('hologramNotification');
    const messageElement = document.getElementById('hologramMessage');
    
    if (!hologram || !messageElement) return;
    
    messageElement.textContent = message;
    hologram.classList.add('show');
    
    // Auto hide after 5 seconds
    setTimeout(() => {
        hideHologram();
    }, 5000);
}

function hideHologram() {
    const hologram = document.getElementById('hologramNotification');
    if (hologram) {
        hologram.classList.remove('show');
    }
}

// Mobile Navigation
function initMobileNavigation() {
    const arToggle = document.getElementById('arToggle');
    const mobileOverlay = document.getElementById('mobileArOverlay');
    
    if (arToggle) {
        arToggle.addEventListener('click', toggleMobileNav);
    }
    
    // Close overlay when clicking outside
    if (mobileOverlay) {
        mobileOverlay.addEventListener('click', (e) => {
            if (e.target === mobileOverlay) {
                closeMobileNav();
            }
        });
    }
}

function toggleMobileNav() {
    const mobileOverlay = document.getElementById('mobileArOverlay');
    const arToggle = document.getElementById('arToggle');
    
    if (mobileOverlay && arToggle) {
        const isActive = mobileOverlay.classList.toggle('show');
        arToggle.classList.toggle('active', isActive);
        
        // Toggle body scroll
        document.body.style.overflow = isActive ? 'hidden' : '';
        
        // Show hologram notification
        if (isActive) {
            showHologramMessage('Navigation matrix activated');
        }
    }
}

function closeMobileNav() {
    const mobileOverlay = document.getElementById('mobileArOverlay');
    const arToggle = document.getElementById('arToggle');
    
    if (mobileOverlay) {
        mobileOverlay.classList.remove('show');
    }
    
    if (arToggle) {
        arToggle.classList.remove('active');
    }
    
    document.body.style.overflow = '';
}

// Gallery Functions
function openHologramGallery(category) {
    showPage('gallery');
    filterGallery(category);
    showHologramMessage(`Loading ${category.toUpperCase()} gallery...`);
}

function filterGallery(category) {
    // Update orbit categories
    document.querySelectorAll('.orbit-category').forEach(orbit => {
        orbit.classList.remove('active');
        if (orbit.textContent.includes(category.toUpperCase())) {
            orbit.classList.add('active');
        }
    });
    
    // Filter gallery items (simplified - would need actual implementation)
    showHologramMessage(`Displaying ${category} photography`);
}

function rotateGallery(direction) {
    const grid = document.getElementById('galleryGrid');
    if (!grid) return;
    
    const currentRotation = parseInt(grid.style.transform?.match(/rotateY\(([^)]+)deg\)/)?.[1] || '0');
    const newRotation = direction === 'left' ? currentRotation - 15 : currentRotation + 15;
    
    grid.style.transform = `rotateY(${newRotation}deg)`;
    
    showHologramMessage(`Gallery rotated ${direction}`);
}

function zoomGallery(action) {
    const grid = document.getElementById('galleryGrid');
    if (!grid) return;
    
    const currentScale = parseFloat(grid.style.transform?.match(/scale\(([^)]+)\)/)?.[1] || '1');
    const newScale = action === 'in' ? Math.min(currentScale * 1.2, 3) : Math.max(currentScale / 1.2, 0.5);
    
    grid.style.transform = `scale(${newScale})`;
    
    showHologramMessage(`Gallery zoom ${action === 'in' ? 'increased' : 'decreased'}`);
}

// Initialize Forms
function initForms() {
    initContactForm();
    initBookingForm();
    initNewsletterForm();
}

function initContactForm() {
    const form = document.getElementById('quantumContactForm');
    if (!form) return;
    
    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        // Show loading state
        showHologramMessage('Transmitting quantum message...');
        
        // Validate form
        if (!validateForm(form)) {
            showHologramMessage('Transmission failed: Please check all fields');
            return;
        }
        
        try {
            const formData = new FormData(form);
            
            // Submit to Web3Forms
            const response = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                body: formData
            });
            
            const result = await response.json();
            
            if (result.success) {
                showHologramMessage('Transmission successful! Message received.');
                form.reset();
                // Clear file preview
                const preview = document.getElementById('uploadPreview');
                if (preview) preview.innerHTML = '';
            } else {
                showHologramMessage('Transmission failed. Please try again.');
            }
        } catch (error) {
            showHologramMessage('Quantum interference detected. Please retry.');
            console.error('Form submission error:', error);
        }
    });
    
    // File upload preview
    const fileInput = document.getElementById('quantumFiles');
    const preview = document.getElementById('uploadPreview');
    
    if (fileInput && preview) {
        fileInput.addEventListener('change', (e) => {
            preview.innerHTML = '';
            const files = Array.from(e.target.files);
            
            files.forEach(file => {
                if (!file.type.startsWith('image/')) return;
                
                const reader = new FileReader();
                reader.onload = (e) => {
                    const img = document.createElement('img');
                    img.src = e.target.result;
                    img.alt = file.name;
                    preview.appendChild(img);
                };
                reader.readAsDataURL(file);
            });
            
            if (files.length > 0) {
                showHologramMessage(`${files.length} file(s) ready for transmission`);
            }
        });
    }
}

function initBookingForm() {
    const bookingBtn = document.querySelector('.cyber-cta');
    if (bookingBtn) {
        bookingBtn.addEventListener('click', initiateBooking);
    }
}

function initiateBooking() {
    const date = document.getElementById('bookingDate');
    const service = document.getElementById('bookingService');
    
    if (!date.value || !service.value) {
        showHologramMessage('Please select date and service for quantum scheduling');
        return;
    }
    
    // Format date
    const formattedDate = new Date(date.value).toLocaleDateString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
    
    showHologramMessage(`Quantum booking initiated for ${service.value} on ${formattedDate}`);
    
    // Reset form
    date.value = '';
    service.value = '';
}

function initNewsletterForm() {
    const form = document.getElementById('quantumNewsletter');
    if (!form) return;
    
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const email = form.querySelector('input[type="email"]');
        if (!email.value) {
            showHologramMessage('Please enter your quantum address');
            return;
        }
        
        // Simulate subscription
        const countElement = document.getElementById('subCount');
        if (countElement) {
            let count = parseInt(countElement.textContent);
            countElement.textContent = count + 1;
        }
        
        showHologramMessage(`Welcome to the quantum network! Updates will be transmitted to ${email.value}`);
        
        // Reset form
        form.reset();
    });
}

// Form Validation
function validateForm(form) {
    let isValid = true;
    
    form.querySelectorAll('[required]').forEach(input => {
        if (!input.value.trim()) {
            isValid = false;
            input.style.borderColor = '#ff003c';
            setTimeout(() => {
                input.style.borderColor = '';
            }, 2000);
        }
    });
    
    return isValid;
}

// Theme Controls
function toggleTheme() {
    const body = document.body;
    const currentTheme = body.getAttribute('data-theme');
    const newTheme = currentTheme === 'cyber' ? 'matrix' : 'cyber';
    
    body.setAttribute('data-theme', newTheme);
    
    // Update colors based on theme
    if (newTheme === 'matrix') {
        document.documentElement.style.setProperty('--cyber-blue', '#00ff41');
        document.documentElement.style.setProperty('--cyber-pink', '#00ff41');
        document.documentElement.style.setProperty('--gradient-main', 'linear-gradient(135deg, #00ff41, #003300)');
    } else {
        document.documentElement.style.setProperty('--cyber-blue', '#00c3ff');
        document.documentElement.style.setProperty('--cyber-pink', '#ff00ff');
        document.documentElement.style.setProperty('--gradient-main', 'linear-gradient(135deg, #00c3ff, #9d00ff, #ff00ff)');
    }
    
    showHologramMessage(`Theme switched to ${newTheme.toUpperCase()} mode`);
}

function toggleSound() {
    showHologramMessage('Audio systems toggled');
}

function enterVRMode() {
    showHologramMessage('VR mode activation sequence initiated');
    // In a real implementation, this would activate WebXR
}

// Scroll Functions
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
    
    showHologramMessage('Returning to quantum origin');
}

// Initialize scroll to top button
window.addEventListener('scroll', () => {
    const topBtn = document.getElementById('quantumTop');
    if (topBtn) {
        if (window.pageYOffset > 300) {
            topBtn.classList.add('visible');
        } else {
            topBtn.classList.remove('visible');
        }
    }
});

// Preload Gallery Images
function preloadGallery() {
    const imageUrls = [
        'food photography 1.jpg',
        'fashion lifestyle 1.jpg',
        'product photography 1.jpg',
        'brand portfolios 1.jpg',
        'interiors architecture 1.jpg',
        'pet photography 1.jpg'
    ];
    
    imageUrls.forEach(url => {
        const img = new Image();
        img.src = url;
    });
}

// Add glitch effects to random elements
setInterval(() => {
    const glitchElements = document.querySelectorAll('.glitch-effect');
    glitchElements.forEach(el => {
        if (Math.random() > 0.95) {
            el.style.transform = `translate(${Math.random() * 4 - 2}px, ${Math.random() * 4 - 2}px)`;
            el.style.color = `hsl(${Math.random() * 360}, 100%, 70%)`;
            
            setTimeout(() => {
                el.style.transform = '';
                el.style.color = '';
            }, 100);
        }
    });
}, 100);

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', initializeQuantumSystem);

// Handle page visibility
document.addEventListener('visibilitychange', () => {
    if (!document.hidden) {
        showHologramMessage('Quantum system re-engaged');
    }
});

// Handle online/offline status
window.addEventListener('online', () => {
    showHologramMessage('Quantum network connection restored');
});

window.addEventListener('offline', () => {
    showHologramMessage('Warning: Quantum network connection lost');
});

// Add keyboard shortcuts
document.addEventListener('keydown', (e) => {
    // Ctrl + H for Home
    if (e.ctrlKey && e.key === 'h') {
        e.preventDefault();
        showPage('home');
    }
    
    // Ctrl + C for Contact
    if (e.ctrlKey && e.key === 'c') {
        e.preventDefault();
        showPage('contact');
    }
    
    // Escape to close modals
    if (e.key === 'Escape') {
        hideHologram();
        closeMobileNav();
    }
});

// Service card activation
function activateNode(node) {
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
    });
    node.classList.add('active');
}

// Terminal loading countdown
let countdown = 3;
const countdownElement = document.getElementById('countdown');
const terminalLoading = document.getElementById('terminalLoading');

if (countdownElement && terminalLoading) {
    const countdownInterval = setInterval(() => {
        countdown--;
        countdownElement.textContent = countdown;
        
        if (countdown === 0) {
            clearInterval(countdownInterval);
            terminalLoading.style.opacity = '0';
            setTimeout(() => {
                terminalLoading.style.display = 'none';
            }, 500);
        }
    }, 1000);
}