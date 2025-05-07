document.addEventListener('DOMContentLoaded', () => {
    // Add a subtle parallax effect to the logo
    const logo = document.querySelector('.logo');
    const content = document.querySelector('.content');

    document.addEventListener('mousemove', (e) => {
        const x = (window.innerWidth / 2 - e.pageX) / 30;
        const y = (window.innerHeight / 2 - e.pageY) / 30;
        
        logo.style.transform = `translate(${x}px, ${y}px)`;
        content.style.transform = `translate(${x/2}px, ${y/2}px)`;
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
            setTimeout(typeWriter, 50);
        }
    };

    // Start typing effect after a short delay
    setTimeout(typeWriter, 1000);
}); 