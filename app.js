const text = "Welcome to Tshering's Portfolio 😁";
const typingSpeed = 100; // Adjust typing speed (ms)

let i = 0;

function typeWriter() {
    if (i < text.length) {
        document.getElementById("typewriter-text").innerHTML += text.charAt(i);
        i++;
        setTimeout(typeWriter, typingSpeed);
    }
}

// Start typing effect when the page loads
window.onload = typeWriter;
