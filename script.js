// Mobile menu toggle
document.querySelector('.mobile-menu').addEventListener('click', function() {
    document.querySelector('nav ul').classList.toggle('active');
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if(targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if(targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
            
            // Close mobile menu after clicking a link
            if (window.innerWidth <= 768) {
                document.querySelector('nav ul').classList.remove('active');
            }
        }
    });
});

// Newsletter form submission
document.querySelector('.newsletter-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const email = this.querySelector('.newsletter-input').value;
    
    // Simple email validation
    if (validateEmail(email)) {
        alert(`Спасибо за подписку! На адрес ${email} будут приходить наши новости.`);
        this.reset();
    } else {
        alert('Пожалуйста, введите корректный email адрес.');
    }
});

// Email validation function
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// Add animation on scroll
function animateOnScroll() {
    const elements = document.querySelectorAll('.game-card, .feature-card, .testimonial-card');
    
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (elementTop < windowHeight - 100) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
}

// Set initial state for animation
document.addEventListener('DOMContentLoaded', function() {
    const elements = document.querySelectorAll('.game-card, .feature-card, .testimonial-card');
    
    elements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });
    
    // Trigger animation on load for elements in viewport
    setTimeout(animateOnScroll, 100);
});

// Listen for scroll events
window.addEventListener('scroll', animateOnScroll);

// Game buttons functionality
document.querySelectorAll('.game-button').forEach(button => {
    button.addEventListener('click', function(e) {
        e.preventDefault();
        const gameTitle = this.closest('.game-card').querySelector('.game-title').textContent;
        const gamePrice = this.closest('.game-card').querySelector('.game-price').textContent;
        
        alert(`Вы выбрали игру "${gameTitle}" по цене ${gamePrice}. Переход к оформлению заказа...`);
    });
});
// Mobile menu toggle
document.querySelector('.mobile-menu').addEventListener('click', function() {
    document.querySelector('nav ul').classList.toggle('active');
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if(targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if(targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
            
            // Close mobile menu after clicking a link
            if (window.innerWidth <= 768) {
                document.querySelector('nav ul').classList.remove('active');
            }
        }
    });
});

// Newsletter form submission
document.querySelector('.newsletter-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const email = this.querySelector('.newsletter-input').value;
    
    // Simple email validation
    if (validateEmail(email)) {
        // Пиксельный стиль уведомления
        showPixelNotification(`Спасибо за подписку! На адрес ${email} будут приходить наши новости.`);
        this.reset();
    } else {
        showPixelNotification('Пожалуйста, введите корректный email адрес.', 'error');
    }
});

// Email validation function
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// Пиксельное уведомление
function showPixelNotification(message, type = 'success') {
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${type === 'error' ? '#e74c3c' : '#2ecc71'};
        color: white;
        padding: 15px 20px;
        border-radius: 5px;
        font-family: 'Press Start 2P', cursive;
        font-size: 10px;
        z-index: 10000;
        border: 3px solid white;
        box-shadow: 4px 4px 0px rgba(0, 0, 0, 0.3);
        transform: translateX(100%);
        transition: transform 0.3s ease;
        max-width: 300px;
        line-height: 1.4;
    `;
    notification.textContent = message;
    document.body.appendChild(notification);
    
    // Анимация появления
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Автоматическое скрытие
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 4000);
}

// Add animation on scroll
function animateOnScroll() {
    const elements = document.querySelectorAll('.game-card, .feature-card, .testimonial-card');
    
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (elementTop < windowHeight - 100) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
}

// Set initial state for animation
document.addEventListener('DOMContentLoaded', function() {
    const elements = document.querySelectorAll('.game-card, .feature-card, .testimonial-card');
    
    elements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });
    
    // Trigger animation on load for elements in viewport
    setTimeout(animateOnScroll, 100);
    
    // Добавляем пиксельный дивидер после хедера
    const pixelDivider = document.createElement('hr');
    pixelDivider.className = 'pixel-divider';
    document.querySelector('.hero').appendChild(pixelDivider);
});

// Listen for scroll events
window.addEventListener('scroll', animateOnScroll);

// Game buttons functionality
document.querySelectorAll('.game-button').forEach(button => {
    button.addEventListener('click', function(e) {
        e.preventDefault();
        const gameTitle = this.closest('.game-card').querySelector('.game-title').textContent;
        const gamePrice = this.closest('.game-card').querySelector('.game-price').textContent;
        
        showPixelNotification(`Вы выбрали игру "${gameTitle}" по цене ${gamePrice}. Переход к оформлению заказа...`);
    });
});

// Добавляем пиксельный эффект при наведении на кнопки
document.querySelectorAll('button, a').forEach(element => {
    element.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.05)';
    });
    
    element.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1)';
    });
});

// Пиксельный эффект для логотипа
const logo = document.querySelector('.logo');
let isAnimating = false;

logo.addEventListener('mouseenter', function() {
    if (!isAnimating) {
        isAnimating = true;
        let scale = 1;
        const animate = () => {
            scale = scale === 1 ? 1.1 : 1;
            this.style.transform = `scale(${scale})`;
            if (isAnimating) {
                setTimeout(animate, 100);
            }
        };
        animate();
        
        // Останавливаем анимацию через 1 секунду
        setTimeout(() => {
            isAnimating = false;
            this.style.transform = 'scale(1)';
        }, 1000);
    }
});