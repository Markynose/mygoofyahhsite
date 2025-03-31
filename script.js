// Set character images
animeGirl.style.backgroundImage = "url('me.png')";
corn.style.backgroundImage = "url('afuckinfemboy.png')";

// Apply initial animations
animeGirl.style.animation = 'float 3s ease-in-out infinite';
corn.style.animation = 'float 4s ease-in-out infinite';

// Mouse movement tracking for interactive animation
document.addEventListener('mousemove', function(e) {
    const containerRect = container.getBoundingClientRect();
    const containerCenterX = containerRect.left + containerRect.width / 2;
    
    // Calculate mouse position relative to container center
    const mouseX = e.clientX;
    const distanceFromCenter = (mouseX - containerCenterX) / 50;
    
    // Move characters based on mouse position
    animeGirl.style.transform = `translateX(${-distanceFromCenter}px) rotate(${-distanceFromCenter/2}deg)`;
    corn.style.transform = `translateX(${distanceFromCenter}px) rotate(${distanceFromCenter/2}deg)`;
});

// Add bounce effect on click
animeGirl.addEventListener('click', function() {
    bounce(animeGirl);
});

corn.addEventListener('click', function() {
    bounce(corn);
});

// Bounce animation function
function bounce(element) {
    // Store original animation
    const originalAnimation = element.style.animation;
    
    // Apply bounce animation
    element.style.animation = 'none';
    element.offsetHeight; // Trigger reflow to restart animation
    element.style.animation = 'float 0.5s ease-in-out 3';
    
    // Restore original animation after bounce
    setTimeout(() => {
        element.style.animation = originalAnimation;
    }, 1500);
}

// Add parallax scrolling effect
window.addEventListener('scroll', function() {
    const scrollY = window.scrollY;
    
    // Move characters based on scroll position
    animeGirl.style.transform = `translateY(${scrollY * 0.1}px)`;
    corn.style.transform = `translateY(${scrollY * 0.15}px)`;
});