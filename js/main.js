document.addEventListener('DOMContentLoaded', () => {
    const navbar = document.getElementById('navbar');
    const navLinks = document.querySelectorAll('.nav-link');

    // --- Sticky Navbar Logic ---
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // --- Smooth Scroll for Navigation Links ---
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const targetId = link.getAttribute('href');
            if (targetId.startsWith('#')) {
                e.preventDefault();
                const targetSection = document.querySelector(targetId);

                if (targetSection) {
                    const headerOffset = navbar.offsetHeight;
                    const elementPosition = targetSection.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                    window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

    // --- Premium Reveal-on-Scroll Logic ---
    const revealElements = document.querySelectorAll('[data-reveal]');

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const element = entry.target;
                const delay = element.getAttribute('data-delay') || 0;

                setTimeout(() => {
                    element.classList.add('revealed');
                }, delay);

                revealObserver.unobserve(element);
            }
        });
    }, {
        threshold: 0.15,
        rootMargin: '0px 0px -50px 0px'
    });

    revealElements.forEach(el => revealObserver.observe(el));

    // --- Hero Parallax Effect ---
    const hero = document.querySelector('.hero-section');
    if (hero) {
        window.addEventListener('scroll', () => {
            const scrollValue = window.scrollY;
            hero.style.backgroundPositionY = `${scrollValue * 0.5}px`;
        });
    }

    // --- Secure B2B Contact Form Validation & Processing ---
    const inquiryForm = document.getElementById('inquiry-form');
    const successOverlay = document.getElementById('contact-success');
    const successNameSpan = document.getElementById('success-name');
    const successWaBtn = document.getElementById('success-wa-btn');
    const successResetBtn = document.getElementById('success-reset-btn');

    if (inquiryForm) {
        // Simple HTML Sanitizer to prevent XSS
        const sanitizeInput = (val) => {
            if (!val) return '';
            return val
                .replace(/&/g, "&amp;")
                .replace(/</g, "&lt;")
                .replace(/>/g, "&gt;")
                .replace(/"/g, "&quot;")
                .replace(/'/g, "&#039;");
        };

        const validateField = (inputEl, condition) => {
            if (condition) {
                inputEl.classList.remove('invalid');
                return true;
            } else {
                inputEl.classList.add('invalid');
                return false;
            }
        };

        // Form Submission Handler
        inquiryForm.addEventListener('submit', (e) => {
            e.preventDefault();

            // 1. Honeypot Spam Protection Check
            const honeypotVal = document.getElementById('hp_security').value;
            if (honeypotVal.trim() !== '') {
                console.warn('Spam submission detected and silently blocked.');
                // Show success silently to the bot
                successNameSpan.innerText = 'Guest';
                successOverlay.classList.add('active');
                inquiryForm.reset();
                return;
            }

            // 2. Extract Field Inputs
            const nameEl = document.getElementById('form-name');
            const companyEl = document.getElementById('form-company');
            const emailEl = document.getElementById('form-email');
            const phoneEl = document.getElementById('form-phone');
            const inquiryEl = document.getElementById('form-inquiry');
            const messageEl = document.getElementById('form-message');

            // 3. Regular Expression Valdiations
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            const phoneRegex = /^[\d\s\+\-\(\)]{6,20}$/; // standard phone length and formats

            // 4. Run Validations
            let isValid = true;
            isValid = validateField(nameEl, nameEl.value.trim().length >= 2) && isValid;
            isValid = validateField(companyEl, companyEl.value.trim().length >= 2) && isValid;
            isValid = validateField(emailEl, emailRegex.test(emailEl.value.trim())) && isValid;
            isValid = validateField(phoneEl, phoneRegex.test(phoneEl.value.trim())) && isValid;
            isValid = validateField(inquiryEl, inquiryEl.value !== '') && isValid;
            isValid = validateField(messageEl, messageEl.value.trim().length >= 10) && isValid;

            if (isValid) {
                // Sanitize user inputs for safe rendering
                const name = sanitizeInput(nameEl.value.trim());
                const company = sanitizeInput(companyEl.value.trim());
                const email = sanitizeInput(emailEl.value.trim());
                const phone = sanitizeInput(phoneEl.value.trim());
                const inquiry = sanitizeInput(inquiryEl.value);
                const message = sanitizeInput(messageEl.value.trim());

                // Build Custom Deep Link to WhatsApp with formatted specs
                const whatsappBase = "https://wa.me/971545751720";
                const whatsappText = `Hello WinTech Mooring UAE,\n\nI have submitted a B2B inquiry on your site:\n\n*Name:* ${name}\n*Company:* ${company}\n*Email:* ${email}\n*Phone:* ${phone}\n*Interest:* ${inquiry}\n*Operational Message:* ${message}`;
                const encodedText = encodeURIComponent(whatsappText);
                const finalUrl = `${whatsappBase}?text=${encodedText}`;
                
                // Set href of redirection button
                successWaBtn.href = finalUrl;

                // Prefill Success Message details safely
                successNameSpan.innerText = name;

                // Show dynamic premium success overlay
                successOverlay.classList.add('active');

                // Direct open WhatsApp in a new secure tab
                window.open(finalUrl, '_blank', 'noopener,noreferrer');

                // Reset the form
                inquiryForm.reset();
            }
        });

        // Interactive clear errors on type
        const formInputs = inquiryForm.querySelectorAll('input, select, textarea');
        formInputs.forEach(input => {
            input.addEventListener('input', () => {
                input.classList.remove('invalid');
            });
            input.addEventListener('change', () => {
                input.classList.remove('invalid');
            });
        });

        // Reset Overlay Button Handler
        if (successResetBtn) {
            successResetBtn.addEventListener('click', () => {
                successOverlay.classList.remove('active');
            });
        }
    }
});
