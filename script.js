document.addEventListener('DOMContentLoaded', () => {
    // Add a subtle parallax effect to the logo and content
    const logo = document.querySelector('.logo');
    const content = document.querySelector('.content');
    const title = document.querySelector('.title');

    document.addEventListener('mousemove', (e) => {
        const x = (window.innerWidth / 2 - e.pageX) / 30;
        const y = (window.innerHeight / 2 - e.pageY) / 30;
        
        logo.style.transform = `translate(${x}px, ${y}px)`;
        content.style.transform = `translate(${x/2}px, ${y/2}px)`;
        title.style.transform = `translate(${x/4}px, ${y/4}px)`;
    });

    // Add a typing effect to the subtitle
    const subtitle = document.querySelector('.subtitle');
    const text = subtitle.textContent;
    subtitle.textContent = '';
    
    let i = 0;
    const typeWriter = () => {
        if (i < text.length) {
            subtitle.textContent += text.charAt(i);
            i++;
            setTimeout(typeWriter, 30);
        }
    };

    // Start typing effect after a short delay
    setTimeout(typeWriter, 1000);

    // Add hover effect to the contact button
    const contactButton = document.querySelector('.contact-button');
    contactButton.addEventListener('mouseenter', () => {
        contactButton.style.transform = 'translateY(-2px)';
    });
    contactButton.addEventListener('mouseleave', () => {
        contactButton.style.transform = 'translateY(0)';
    });

    // Add scroll-triggered animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    // Observe elements for scroll animations
    document.querySelectorAll('.title .line, .subtitle, .progress-wrapper, .contact-section').forEach(el => {
        observer.observe(el);
    });
}); 