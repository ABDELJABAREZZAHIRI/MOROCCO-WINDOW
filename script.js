// Simple JavaScript for animations and interactions
document.addEventListener('DOMContentLoaded', function() {
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
    
    // Add animation class when elements come into view
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
            }
        });
    }, { threshold: 0.1 });
    
    document.querySelectorAll('.fade-in').forEach(el => {
        observer.observe(el);
        el.style.opacity = '0'; // Start with elements invisible
    });
    
    // PDF container hover effect
    const pdfContainer = document.querySelector('.pdf-container');
    if (pdfContainer) {
        pdfContainer.addEventListener('mouseenter', () => {
            pdfContainer.style.boxShadow = '0 15px 40px rgba(0, 0, 0, 0.4)';
        });
        
        pdfContainer.addEventListener('mouseleave', () => {
            pdfContainer.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.3)';
        });
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const follower = document.querySelector('.cursor-follower');
    let posX = 0, posY = 0;
    let mouseX = 0, mouseY = 0;
    
    // Smooth the follower movement
    function animate() {
        // Calculate distance between current position and mouse
        let distX = mouseX - posX;
        let distY = mouseY - posY;
        
        // Ease the movement (lower number = smoother but slower)
        posX += distX / 5;
        posY += distY / 5;
        
        // Apply the new position
        follower.style.left = posX + 'px';
        follower.style.top = posY + 'px';
        
        requestAnimationFrame(animate);
    }
    
    // Track mouse position
    document.addEventListener('mousemove', function(e) {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });
    
    // Start animation
    animate();
    
    // Interactive effects when hovering over clickable elements
    const interactiveElements = document.querySelectorAll('a, button, .pdf-preview-img');
    interactiveElements.forEach(el => {
        el.addEventListener('mouseenter', () => {
            follower.style.width = '40px';
            follower.style.height = '40px';
            follower.style.backgroundColor = 'rgba(220, 39, 67, 0.3)';
            follower.style.borderColor = 'rgba(184, 27, 136, 0.5)';
        });
        
        el.addEventListener('mouseleave', () => {
            follower.style.width = '60px';
            follower.style.height = '60px';
            follower.style.backgroundColor = 'rgba(222,158,54,0.2)';
            follower.style.borderColor = 'rgba(220, 39, 67, 0.3)';
        });
    });
});