// BRUTALIST PORTFOLIO JAVASCRIPT
// Raw, unapologetic interactions

document.addEventListener('DOMContentLoaded', function() {
    // Terminal typing effect
    const terminalLines = document.querySelectorAll('.terminal-content .terminal-line');
    
    terminalLines.forEach((line, index) => {
        const text = line.textContent;
        line.textContent = '';
        line.style.opacity = '0';
        
        setTimeout(() => {
            line.style.opacity = '1';
            typeWriter(line, text, 0, 50);
        }, index * 1000);
    });
    
    function typeWriter(element, text, i, speed) {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            setTimeout(() => typeWriter(element, text, i + 1, speed), speed);
        }
    }
    
    // Glitch effect on hover
    const glitchElements = document.querySelectorAll('.main-title, .hero-title, .section-title');
    
    glitchElements.forEach(element => {
        element.addEventListener('mouseenter', function() {
            this.style.textShadow = '3px 3px 0px #ff0000, -3px -3px 0px #00ff00';
        });
        
        element.addEventListener('mouseleave', function() {
            this.style.textShadow = '2px 2px 0px #00ff00';
        });
    });
    
    // Random glitch effect
    setInterval(() => {
        const randomElement = glitchElements[Math.floor(Math.random() * glitchElements.length)];
        randomElement.style.transform = 'skew(2deg)';
        randomElement.style.color = '#ff0000';
        
        setTimeout(() => {
            randomElement.style.transform = 'skew(0deg)';
            randomElement.style.color = '';
        }, 100);
    }, 5000);
    
    // Navigation active state
    const navItems = document.querySelectorAll('.nav-item');
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    
    navItems.forEach(item => {
        const href = item.getAttribute('href');
        if (href === currentPage) {
            item.classList.add('active');
        }
    });
    
    // Cursor trail effect
    const cursor = document.createElement('div');
    cursor.className = 'cursor-trail';
    cursor.style.cssText = `
        position: fixed;
        width: 10px;
        height: 10px;
        background: #00ff00;
        border-radius: 50%;
        pointer-events: none;
        z-index: 9999;
        transition: all 0.1s ease;
    `;
    document.body.appendChild(cursor);
    
    document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.clientX - 5 + 'px';
        cursor.style.top = e.clientY - 5 + 'px';
    });
    
    // Click effect
    document.addEventListener('click', (e) => {
        const clickEffect = document.createElement('div');
        clickEffect.style.cssText = `
            position: fixed;
            width: 20px;
            height: 20px;
            background: #ff0000;
            border: 2px solid #00ff00;
            border-radius: 50%;
            pointer-events: none;
            z-index: 9998;
            left: ${e.clientX - 10}px;
            top: ${e.clientY - 10}px;
            animation: clickPulse 0.5s ease-out forwards;
        `;
        
        document.body.appendChild(clickEffect);
        
        setTimeout(() => {
            document.body.removeChild(clickEffect);
        }, 500);
    });
    
    // Add CSS for click animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes clickPulse {
            0% { transform: scale(0); opacity: 1; }
            100% { transform: scale(2); opacity: 0; }
        }
    `;
    document.head.appendChild(style);
    
    // Terminal cursor blink
    const terminalCursor = document.querySelector('.terminal-content .terminal-line:last-child');
    if (terminalCursor) {
        setInterval(() => {
            if (terminalCursor.textContent.endsWith('_')) {
                terminalCursor.textContent = terminalCursor.textContent.slice(0, -1);
            } else {
                terminalCursor.textContent += '_';
            }
        }, 500);
    }
    
    // Random background glitch
    setInterval(() => {
        document.body.style.backgroundColor = Math.random() > 0.95 ? '#111111' : '#000000';
        setTimeout(() => {
            document.body.style.backgroundColor = '#000000';
        }, 100);
    }, 3000);
    
    // Page load effect
    window.addEventListener('load', () => {
        document.body.style.opacity = '0';
        document.body.style.transition = 'opacity 1s ease';
        
        setTimeout(() => {
            document.body.style.opacity = '1';
        }, 100);
    });
    
    // Scroll effect
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const parallax = document.querySelector('.main-title');
        if (parallax) {
            parallax.style.transform = `translateY(${scrolled * 0.5}px)`;
        }
    });
    
    // Keyboard shortcuts
    document.addEventListener('keydown', (e) => {
        switch(e.key) {
            case '1':
                window.location.href = 'index.html';
                break;
            case '2':
                window.location.href = 'projects.html';
                break;
            case '3':
                window.location.href = 'images.html';
                break;
            case '4':
                window.location.href = 'thoughts.html';
                break;
            case '5':
                window.location.href = 'music.html';
                break;
        }
    });
    
    // Easter egg
    let konamiCode = [];
    const konamiSequence = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'KeyB', 'KeyA'];
    
    document.addEventListener('keydown', (e) => {
        konamiCode.push(e.code);
        if (konamiCode.length > konamiSequence.length) {
            konamiCode.shift();
        }
        
        if (konamiCode.join(',') === konamiSequence.join(',')) {
            document.body.style.animation = 'glitch 0.1s infinite';
            setTimeout(() => {
                document.body.style.animation = '';
            }, 2000);
            konamiCode = [];
        }
    });
}); 