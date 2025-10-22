// Ultra-Sophisticated Portfolio JavaScript - Premium Royal Burgundy Experience
class SophisticatedPortfolio {
    constructor() {
        this.projectsData = [
            {
                title: "Enterprise E-Commerce Platform",
                category: "Full Stack",
                technologies: ["React", "Node.js", "MongoDB", "Stripe", "AWS"],
                description: "Sophisticated e-commerce solution with advanced features including real-time inventory management, AI-powered recommendations, and comprehensive analytics dashboard.",
                features: ["AI Recommendations", "Real-time Analytics", "Advanced Security", "Multi-vendor Support"],
                image: "Enterprise E-Commerce Platform",
                demoLink: "https://demo-ecommerce.com",
                githubLink: "https://github.com/alexjohnson/ecommerce-platform"
            },
            {
                title: "Collaborative Task Management Suite",
                category: "Web App",
                technologies: ["Vue.js", "Express.js", "PostgreSQL", "Socket.io", "Redis"],
                description: "Real-time collaborative workspace with advanced project management features, team analytics, and intelligent notification system.",
                features: ["Real-time Collaboration", "Advanced Analytics", "Smart Notifications", "Custom Workflows"],
                image: "Collaborative Task Management Suite",
                demoLink: "https://demo-taskapp.com",
                githubLink: "https://github.com/alexjohnson/task-management"
            },
            {
                title: "Weather Intelligence Dashboard",
                category: "Frontend",
                technologies: ["React", "D3.js", "Weather API", "Tailwind CSS", "Chart.js"],
                description: "Advanced weather analytics platform with predictive modeling, interactive visualizations, and location-based insights for enterprise clients.",
                features: ["Predictive Analytics", "Interactive Maps", "Custom Alerts", "API Integration"],
                image: "Weather Intelligence Dashboard",
                demoLink: "https://demo-weather.com",
                githubLink: "https://github.com/alexjohnson/weather-dashboard"
            },
            {
                title: "Microservices API Gateway",
                category: "Backend", 
                technologies: ["Node.js", "Express.js", "Redis", "JWT", "Docker", "Kubernetes"],
                description: "Enterprise-grade API gateway with advanced security, intelligent routing, comprehensive monitoring, and auto-scaling capabilities.",
                features: ["Advanced Security", "Auto-scaling", "Real-time Monitoring", "Load Balancing"],
                image: "Microservices API Gateway",
                demoLink: null,
                githubLink: "https://github.com/alexjohnson/api-gateway"
            },
            {
                title: "Fintech Mobile Application",
                category: "Mobile",
                technologies: ["React Native", "Node.js", "MongoDB", "Biometric Auth", "Blockchain"],
                description: "Secure fintech application with biometric authentication, blockchain integration, and advanced fraud detection for seamless financial transactions.",
                features: ["Blockchain Integration", "Fraud Detection", "Biometric Security", "Real-time Transactions"],
                image: "Fintech Mobile Application",
                demoLink: "https://demo-fintech.com",
                githubLink: "https://github.com/alexjohnson/fintech-app"
            },
            {
                title: "AI-Powered Analytics Platform",
                category: "Full Stack",
                technologies: ["Python", "Django", "PostgreSQL", "TensorFlow", "D3.js"],
                description: "Comprehensive data analytics platform with machine learning capabilities, predictive modeling, and sophisticated visualization tools for enterprise clients.",
                features: ["Machine Learning", "Predictive Models", "Custom Dashboards", "Advanced Exports"],
                image: "AI-Powered Analytics Platform",
                demoLink: "https://demo-analytics.com",
                githubLink: "https://github.com/alexjohnson/ai-analytics"
            }
        ];

        this.isLoaded = false;
        this.scrollY = 0;
        this.animationObserver = null;
        
        // Ensure DOM is ready before initialization
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => this.init());
        } else {
            this.init();
        }
    }

    // Initialize all sophisticated functionality
    init() {
        this.setupEventListeners();
        this.initElegantLoader();
        this.initSophisticatedTheme();
        this.initPremiumNavigation();
        this.initElegantTyping();
        this.initSophisticatedAnimations();
        this.initPremiumSkills();
        this.initRefinedProjects();
        this.initSophisticatedStats();
        this.initPremiumScrollEffects();
        this.initRefinedAccessibility();
        
        console.log('🌟 Sophisticated Portfolio Experience Loaded - Royal Burgundy Theme');
    }

    // Setup elegant event listeners
    setupEventListeners() {
        window.addEventListener('load', () => {
            this.onWindowLoad();
        });

        window.addEventListener('scroll', this.throttle(() => {
            this.onElegantScroll();
        }, 16));

        window.addEventListener('resize', this.debounce(() => {
            this.onSophisticatedResize();
        }, 250));

        // Keyboard navigation
        document.addEventListener('keydown', (e) => {
            this.handleElegantKeyboard(e);
        });
    }

    // Elegant loading screen with premium animations
    initElegantLoader() {
        const loader = document.getElementById('elegant-loader');
        if (!loader) return;

        // Show loading screen
        loader.style.display = 'flex';
        
        // Sophisticated loading sequence
        setTimeout(() => {
            loader.classList.add('hidden');
            
            setTimeout(() => {
                loader.style.display = 'none';
                this.startElegantPageAnimations();
            }, 600);
        }, 1800);
    }

    // Start premium page animations after loading
    startElegantPageAnimations() {
        const heroContent = document.querySelector('.elegant-intro');
        if (heroContent) {
            heroContent.style.animation = 'fadeInElegant 1s ease-out';
        }

        // Stagger navigation animation
        const navLinks = document.querySelectorAll('.elegant-nav-link');
        navLinks.forEach((link, index) => {
            link.style.animation = `fadeInElegant 0.6s ease-out ${index * 0.1}s both`;
        });

        // Animate profile image
        const profileImage = document.querySelector('.profile-image-container');
        if (profileImage) {
            setTimeout(() => {
                profileImage.style.animation = 'fadeInElegant 1.2s ease-out';
            }, 800);
        }

        this.isLoaded = true;
    }

    // Sophisticated theme toggle with elegant transitions
    initSophisticatedTheme() {
        const themeToggle = document.getElementById('theme-toggle');
        if (!themeToggle) return;

        // Check for saved theme or system preference
        const savedTheme = localStorage.getItem('sophisticated-theme');
        const systemTheme = window.matchMedia('(prefers-color-scheme: light)').matches ? 'dark' : 'light';
        const currentTheme = savedTheme || systemTheme;

        this.setElegantTheme(currentTheme);

        themeToggle.addEventListener('click', () => {
            const currentTheme = document.documentElement.getAttribute('data-theme');
            const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
            
            this.setElegantTheme(newTheme, true);
        });

        // Listen for system theme changes
        window.matchMedia('(prefers-color-scheme: light)').addEventListener('change', (e) => {
            if (!localStorage.getItem('sophisticated-theme')) {
                this.setElegantTheme(e.matches ? 'dark' : 'light');
            }
        });
    }

    // Set theme with sophisticated animation
    setElegantTheme(theme, animate = false) {
        if (animate) {
            document.body.style.transition = 'all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
            
            setTimeout(() => {
                document.body.style.transition = '';
            }, 400);
        }

        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('sophisticated-theme', theme);

        // Update theme toggle icon
        const icon = document.querySelector('.toggle-icon i');
        if (icon) {
            icon.className = theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
        }
    }

    // Premium navigation with refined interactions
    initPremiumNavigation() {
        const mobileMenuBtn = document.getElementById('mobile-menu-btn');
        const navMenu = document.getElementById('nav-menu');
        const navLinks = document.querySelectorAll('.elegant-nav-link');

        // Mobile menu toggle
        if (mobileMenuBtn && navMenu) {
            mobileMenuBtn.addEventListener('click', () => {
                mobileMenuBtn.classList.toggle('active');
                navMenu.classList.toggle('active');
                
                // Prevent body scroll when menu is open
                document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
            });
        }

        // Close mobile menu on link click
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                if (mobileMenuBtn && navMenu) {
                    mobileMenuBtn.classList.remove('active');
                    navMenu.classList.remove('active');
                    document.body.style.overflow = '';
                }
            });
        });

        // Smooth scroll to sections
        navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const targetId = link.getAttribute('href').substring(1);
                this.elegantScrollTo(targetId);
            });
        });

        // Close mobile menu on outside click
        document.addEventListener('click', (e) => {
            if (navMenu && mobileMenuBtn && 
                !navMenu.contains(e.target) && 
                !mobileMenuBtn.contains(e.target) &&
                navMenu.classList.contains('active')) {
                mobileMenuBtn.classList.remove('active');
                navMenu.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
    }

    // Elegant typing animation with sophisticated effects
    initElegantTyping() {
        const typingElement = document.getElementById('typing-text');
        if (!typingElement) return;

        const sophisticatedTitles = [
            'IT Quality and Testing Engineer'
        ];

        let titleIndex = 0;
        let charIndex = 0;
        let isDeleting = false;
        let typingSpeed = 100;

        const typeElegantly = () => {
            const currentTitle = sophisticatedTitles[titleIndex];
            
            if (isDeleting) {
                typingElement.textContent = currentTitle.substring(0, charIndex - 1);
                charIndex--;
                typingSpeed = 50;
            } else {
                typingElement.textContent = currentTitle.substring(0, charIndex + 1);
                charIndex++;
                typingSpeed = 100;
            }

            if (!isDeleting && charIndex === currentTitle.length) {
                typingSpeed = 2000;
                isDeleting = true;
            } else if (isDeleting && charIndex === 0) {
                isDeleting = false;
                titleIndex = (titleIndex + 1) % sophisticatedTitles.length;
                typingSpeed = 500;
            }

            setTimeout(typeElegantly, typingSpeed);
        };

        // Start typing animation after a delay
        setTimeout(typeElegantly, 1000);
    }

    // Sophisticated scroll animations with premium effects
    initSophisticatedAnimations() {
        // Advanced Intersection Observer with refined options
        const observerOptions = {
            threshold: [0, 0.1, 0.5, 1],
            rootMargin: '0px 0px -50px 0px'
        };

        this.animationObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    this.triggerElegantAnimation(entry.target, entry.intersectionRatio);
                }
            });
        }, observerOptions);

        // Observe elements for sophisticated animations
        const animatedElements = document.querySelectorAll(`
            .section-header-elegant,
            .about-elegant-content,
            .skill-category-elegant,
            .timeline-elegant-item,
            .project-card-sophisticated,
            .service-card-elegant,
            .contact-centered-content,
            .stat-card-elegant
        `);

        animatedElements.forEach((element, index) => {
            element.classList.add('fade-in-elegant');
            element.style.transitionDelay = `${index * 0.1}s`;
            this.animationObserver.observe(element);
        });
    }

    // Trigger elegant animations with sophisticated timing
    triggerElegantAnimation(element, ratio) {
        if (ratio > 0.1) {
            element.classList.add('visible');
            
            // Special handling for staggered animations
            if (element.classList.contains('stagger-animation')) {
                const children = element.children;
                Array.from(children).forEach((child, index) => {
                    setTimeout(() => {
                        child.classList.add('visible');
                    }, index * 100);
                });
            }
            
            this.animationObserver.unobserve(element);
        }
    }

    // Premium skills section with refined animations
    initPremiumSkills() {
        const skillsSection = document.getElementById('skills');
        if (!skillsSection) return;

        const skillObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    this.animateElegantSkills();
                    skillObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.3 });

        skillObserver.observe(skillsSection);
    }

    // Animate skills with sophisticated progression
    animateElegantSkills() {
        const progressBars = document.querySelectorAll('.progress-bar');
        
        progressBars.forEach((bar, index) => {
            setTimeout(() => {
                const width = bar.getAttribute('data-width');
                bar.style.width = width + '%';
                
                // Add premium glow effect
                setTimeout(() => {
                    const glow = bar.nextElementSibling;
                    if (glow && glow.classList.contains('progress-glow')) {
                        glow.style.animationDelay = '0s';
                    }
                }, 500);
            }, index * 150);
        });
    }

    // Sophisticated stats counter animation
    initSophisticatedStats() {
        const statNumbers = document.querySelectorAll('.stat-number-elegant[data-count]');
        
        const statsObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    this.animateElegantCounter(entry.target);
                    statsObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });

        statNumbers.forEach(stat => {
            statsObserver.observe(stat);
        });
    }

    // Animate counter with premium easing
    animateElegantCounter(element) {
        const target = parseInt(element.getAttribute('data-count'));
        const duration = 2000;
        const increment = target / (duration / 16);
        let current = 0;

        const updateCounter = () => {
            current += increment;
            if (current < target) {
                element.textContent = Math.floor(current) + (target > 10 ? '+' : '');
                requestAnimationFrame(updateCounter);
            } else {
                element.textContent = target + (target > 10 ? '+' : '');
            }
        };

        updateCounter();
    }

    // Refined projects with premium filtering and modal
    initRefinedProjects() {
        // Wait for DOM to be fully ready
        setTimeout(() => {
            this.renderSophisticatedProjects(this.projectsData);
            this.initPremiumFilters();
            this.initElegantModal();
        }, 100);
    }

    // Render projects with sophisticated layout
    renderSophisticatedProjects(projects) {
        const projectsGrid = document.getElementById('projects-grid');
        if (!projectsGrid) {
            console.warn('Projects grid element not found');
            return;
        }

        const projectHTML = projects.map((project, index) => `
            <div class="project-card-sophisticated fade-in-elegant" 
                 data-category="${project.category}" 
                 data-project-index="${index}"
                 style="transition-delay: ${index * 0.1}s; opacity: 0; transform: translateY(30px);"
                 tabindex="0"
                 role="button"
                 aria-label="View details for ${project.title}">
                <div class="project-image-elegant">${project.image}</div>
                <div class="project-content-elegant">
                    <div class="project-category-elegant">${project.category}</div>
                    <h3 class="project-title-elegant">${project.title}</h3>
                    <p class="project-description-elegant">${project.description}</p>
                    <div class="project-tech-elegant">
                        ${project.technologies.map(tech => 
                            `<span class="tech-tag-elegant">${tech}</span>`
                        ).join('')}
                    </div>
                    <div class="project-links-elegant">
                        ${project.demoLink ? 
                            `<a href="${project.demoLink}" target="_blank" class="project-link-elegant" onclick="event.stopPropagation()">
                                <i class="fas fa-external-link-alt"></i> Live Demo
                            </a>` : ''
                        }
                        <a href="${project.githubLink}" target="_blank" class="project-link-elegant" onclick="event.stopPropagation()">
                            <i class="fab fa-github"></i> View Code
                        </a>
                    </div>
                </div>
            </div>
        `).join('');

        projectsGrid.innerHTML = projectHTML;

        // Add sophisticated click handlers and animations
        const projectCards = projectsGrid.querySelectorAll('.project-card-sophisticated');
        projectCards.forEach((card, index) => {
            const projectIndex = parseInt(card.getAttribute('data-project-index'));
            
            // Click handler for modal
            card.addEventListener('click', () => {
                this.openElegantModal(this.projectsData[projectIndex]);
            });

            // Keyboard support
            card.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    this.openElegantModal(this.projectsData[projectIndex]);
                    e.preventDefault();
                }
            });

            // Enhanced hover effects
            card.addEventListener('mouseenter', () => {
                card.style.transform = 'translateY(-10px) scale(1.02)';
            });

            card.addEventListener('mouseleave', () => {
                if (!card.matches(':focus')) {
                    card.style.transform = '';
                }
            });

            // Focus effects
            card.addEventListener('focusin', () => {
                card.style.outline = '2px solid var(--burgundy-primary)';
                card.style.outlineOffset = '4px';
            });

            card.addEventListener('focusout', () => {
                card.style.outline = '';
                card.style.outlineOffset = '';
            });

            // Animate cards into view
            setTimeout(() => {
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }, index * 100 + 200);
        });

        console.log(`✨ Rendered ${projects.length} sophisticated project cards`);
    }

    // Premium project filtering with elegant transitions
    initPremiumFilters() {
        const filterButtons = document.querySelectorAll('.sophisticated-filter-btn');
        
        filterButtons.forEach(button => {
            button.addEventListener('click', () => {
                const filter = button.getAttribute('data-filter');
                
                // Update active state with sophisticated animation
                filterButtons.forEach(btn => btn.classList.remove('active'));
                button.classList.add('active');
                
                // Filter projects with elegant stagger
                this.filterProjectsElegantly(filter);
            });
        });
    }

    // Filter projects with sophisticated animations
    filterProjectsElegantly(filter) {
        const projectCards = document.querySelectorAll('.project-card-sophisticated');
        
        // Fade out current projects
        projectCards.forEach((card, index) => {
            setTimeout(() => {
                card.style.opacity = '0';
                card.style.transform = 'translateY(20px)';
            }, index * 50);
        });

        // Filter and render new projects
        setTimeout(() => {
            const filteredProjects = filter === 'all' 
                ? this.projectsData 
                : this.projectsData.filter(project => project.category === filter);
            
            this.renderSophisticatedProjects(filteredProjects);
        }, 600);
    }

    // Elegant modal with premium animations
    initElegantModal() {
        const modal = document.getElementById('project-modal');
        const modalClose = document.getElementById('modal-close');
        const modalOverlay = document.getElementById('modal-overlay');

        if (modalClose) {
            modalClose.addEventListener('click', () => this.closeElegantModal());
        }

        if (modalOverlay) {
            modalOverlay.addEventListener('click', () => this.closeElegantModal());
        }

        // Close modal with Escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && modal && !modal.classList.contains('hidden')) {
                this.closeElegantModal();
            }
        });
    }

    // Open modal with sophisticated content
    openElegantModal(project) {
        const modal = document.getElementById('project-modal');
        const modalBody = document.getElementById('modal-body');
        
        if (!modal || !modalBody) return;

        modalBody.innerHTML = `
            <div class="modal-project-image-elegant" style="height: 300px; background: linear-gradient(135deg, var(--burgundy-primary), var(--burgundy-dark)); display: flex; align-items: center; justify-content: center; color: var(--elegant-white); font-family: var(--font-elegant); font-size: 1.75rem; font-weight: 600; border-radius: 1rem; margin-bottom: 2rem;">
                ${project.image}
            </div>
            <div class="project-category-elegant" style="margin-bottom: 1rem;">${project.category}</div>
            <h2 class="project-title-elegant" style="font-size: 2.5rem; margin-bottom: 1.5rem;">${project.title}</h2>
            <p class="project-description-elegant" style="font-size: 1.125rem; margin-bottom: 2rem;">${project.description}</p>
            
            <div class="modal-features-elegant" style="margin-bottom: 2rem;">
                <h4 style="color: var(--burgundy-primary); margin-bottom: 1rem; font-family: var(--font-elegant); font-size: 1.5rem;">Key Features:</h4>
                <div class="features-grid-elegant" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1rem;">
                    ${project.features.map(feature => `
                        <div class="feature-item-elegant" style="display: flex; align-items: center; gap: 0.75rem; padding: 1rem; background: var(--glass-bg); border-radius: 1rem; border: 1px solid var(--glass-border);">
                            <i class="fas fa-check-circle" style="color: var(--burgundy-primary);"></i>
                            <span style="color: var(--sophisticated-gray);">${feature}</span>
                        </div>
                    `).join('')}
                </div>
            </div>
            
            <div class="project-tech-elegant" style="margin-bottom: 2rem;">
                ${project.technologies.map(tech => 
                    `<span class="tech-tag-elegant">${tech}</span>`
                ).join('')}
            </div>
            
            <div class="modal-project-links" style="display: flex; gap: 1rem;">
                ${project.demoLink ? 
                    `<a href="${project.demoLink}" target="_blank" class="btn-sophisticated btn-primary">
                        <span class="btn-text"><i class="fas fa-external-link-alt"></i> Live Demo</span>
                        <div class="btn-glow"></div>
                    </a>` : ''
                }
                <a href="${project.githubLink}" target="_blank" class="btn-sophisticated btn-elegant-outline">
                    <span class="btn-text"><i class="fab fa-github"></i> View Code</span>
                    <div class="btn-elegant-border"></div>
                </a>
            </div>
        `;

        modal.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
        
        // Trigger modal animation
        requestAnimationFrame(() => {
            modal.style.opacity = '1';
        });
    }

    // Close modal with elegant animation
    closeElegantModal() {
        const modal = document.getElementById('project-modal');
        if (!modal) return;

        modal.style.opacity = '0';
        
        setTimeout(() => {
            modal.classList.add('hidden');
            document.body.style.overflow = '';
        }, 300);
    }

    // Premium scroll effects
    initPremiumScrollEffects() {
        let ticking = false;
        
        window.addEventListener('scroll', () => {
            if (!ticking) {
                requestAnimationFrame(() => {
                    this.updateScrollEffects();
                    ticking = false;
                });
                ticking = true;
            }
        });

        // Initial call
        this.updateScrollEffects();
    }

    // Update sophisticated scroll effects
    updateScrollEffects() {
        const scrollY = window.pageYOffset;
        const navbar = document.getElementById('navbar');
        
        // Sophisticated navbar effects
        if (navbar) {
            if (scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        }

        // Update active navigation
        this.updateActiveNavigation();
        
        // Parallax effects for hero shapes
        const heroShapes = document.querySelectorAll('.floating-shape');
        heroShapes.forEach((shape, index) => {
            const speed = 0.5 + (index * 0.1);
            shape.style.transform = `translateY(${scrollY * speed}px)`;
        });
    }

    // Update active navigation with sophisticated detection
    updateActiveNavigation() {
        const scrollPos = window.pageYOffset + 100;
        const sections = document.querySelectorAll('section[id]');
        const navLinks = document.querySelectorAll('.elegant-nav-link');

        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            const sectionBottom = sectionTop + section.offsetHeight;
            const sectionId = section.getAttribute('id');
            const navLink = document.querySelector(`.elegant-nav-link[href="#${sectionId}"]`);

            if (scrollPos >= sectionTop && scrollPos < sectionBottom) {
                navLinks.forEach(link => link.classList.remove('active'));
                if (navLink) navLink.classList.add('active');
            }
        });
    }

    // Elegant smooth scrolling
    elegantScrollTo(targetId) {
        const targetElement = document.getElementById(targetId);
        if (!targetElement) return;

        const offsetTop = targetElement.offsetTop - 80;
        
        window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
        });
    }

    // Enhanced keyboard navigation
    handleElegantKeyboard(e) {
        // Close modal with Escape
        if (e.key === 'Escape') {
            const modal = document.getElementById('project-modal');
            if (modal && !modal.classList.contains('hidden')) {
                this.closeElegantModal();
            }
        }

        // Navigate projects with arrow keys
        if (e.key === 'ArrowLeft' || e.key === 'ArrowRight') {
            const focusedCard = document.activeElement;
            if (focusedCard && focusedCard.classList.contains('project-card-sophisticated')) {
                const cards = Array.from(document.querySelectorAll('.project-card-sophisticated'));
                const currentIndex = cards.indexOf(focusedCard);
                let nextIndex;

                if (e.key === 'ArrowLeft') {
                    nextIndex = currentIndex > 0 ? currentIndex - 1 : cards.length - 1;
                } else {
                    nextIndex = currentIndex < cards.length - 1 ? currentIndex + 1 : 0;
                }

                cards[nextIndex].focus();
                e.preventDefault();
            }
        }
    }

    // Handle sophisticated window resize
    onSophisticatedResize() {
        // Recalculate animations and layouts
        this.updateScrollEffects();
        
        // Refresh intersection observers
        if (this.animationObserver) {
            this.animationObserver.disconnect();
            this.initSophisticatedAnimations();
        }
    }

    // Window loaded handler
    onWindowLoad() {
        // Additional setup after all resources are loaded
        this.optimizePerformance();
    }

    // Elegant scroll handler
    onElegantScroll() {
        this.scrollY = window.pageYOffset;
        // Handled by premium scroll effects
    }

    // Performance optimizations
    optimizePerformance() {
        // Lazy load images
        if ('IntersectionObserver' in window) {
            const imageObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const img = entry.target;
                        if (img.dataset.src) {
                            img.src = img.dataset.src;
                            img.classList.remove('lazy');
                            imageObserver.unobserve(img);
                        }
                    }
                });
            });

            document.querySelectorAll('img[data-src]').forEach(img => {
                imageObserver.observe(img);
            });
        }

        // Preload critical resources
        this.preloadCriticalResources();
    }

    // Preload critical resources
    preloadCriticalResources() {
        const criticalImages = [
            // Add paths to critical images if any
        ];

        criticalImages.forEach(src => {
            const link = document.createElement('link');
            link.rel = 'preload';
            link.as = 'image';
            link.href = src;
            document.head.appendChild(link);
        });
    }

    // Show elegant notification (for future use)
    showElegantNotification(message, type = 'info') {
        const notification = document.createElement('div');
        notification.className = `elegant-notification ${type}`;
        notification.style.cssText = `
            position: fixed;
            top: 2rem;
            right: 2rem;
            background: var(--glass-bg);
            backdrop-filter: blur(20px);
            border: 1px solid var(--glass-border);
            border-radius: 1rem;
            padding: 1.5rem 2rem;
            color: var(--sophisticated-gray);
            box-shadow: var(--shadow-elegant);
            z-index: 10000;
            transform: translateX(100%);
            transition: var(--transition-elegant);
            max-width: 400px;
        `;

        if (type === 'success') {
            notification.style.borderLeftColor = 'var(--burgundy-primary)';
            notification.style.borderLeftWidth = '4px';
        } else if (type === 'error') {
            notification.style.borderLeftColor = 'var(--color-error)';
            notification.style.borderLeftWidth = '4px';
        }

        notification.innerHTML = `
            <div style="display: flex; align-items: center; gap: 1rem;">
                <i class="fas fa-${type === 'success' ? 'check-circle' : type === 'error' ? 'exclamation-circle' : 'info-circle'}" 
                   style="color: var(--burgundy-primary); font-size: 1.25rem;"></i>
                <span>${message}</span>
            </div>
        `;

        document.body.appendChild(notification);

        // Animate in
        requestAnimationFrame(() => {
            notification.style.transform = 'translateX(0)';
        });

        // Remove after delay
        setTimeout(() => {
            notification.style.transform = 'translateX(100%)';
            setTimeout(() => {
                notification.remove();
            }, 400);
        }, 4000);
    }

    // Utility: Check if element is in viewport
    isElementInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    // Utility: Throttle function
    throttle(func, limit) {
        let inThrottle;
        return function() {
            const args = arguments;
            const context = this;
            if (!inThrottle) {
                func.apply(context, args);
                inThrottle = true;
                setTimeout(() => inThrottle = false, limit);
            }
        }
    }

    // Utility: Debounce function
    debounce(func, wait, immediate) {
        let timeout;
        return function() {
            const context = this;
            const args = arguments;
            const later = function() {
                timeout = null;
                if (!immediate) func.apply(context, args);
            };
            const callNow = immediate && !timeout;
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
            if (callNow) func.apply(context, args);
        }
    }
}

// Initialize the sophisticated portfolio experience
const sophisticatedPortfolio = new SophisticatedPortfolio();

// Export for potential external use
if (typeof module !== 'undefined' && module.exports) {
    module.exports = SophisticatedPortfolio;
}
