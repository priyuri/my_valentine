const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const message = document.getElementById("message");
const music = document.getElementById("bgMusic");

// NO button bhage 😄
noBtn.addEventListener("mouseover", () => {
    const x = Math.random() * 200 - 100;
    const y = Math.random() * 200 - 100;
    noBtn.style.transform = `translate(${x}px, ${y}px)`;
});

// YES click → music + message 💖
yesBtn.addEventListener("click", () => {
    // music.play();
    message.innerHTML = "Yayyy! 💖<br>You made my day 😍<br>Happy Valentine’s Day ❤️";

});

// Floating hearts ❤️
setInterval(() => {
    const heart = document.createElement("div");
    heart.className = "heart";
    heart.innerHTML = "❤️";
    heart.style.left = Math.random() * window.innerWidth + "px";
    heart.style.top = "100vh";
    heart.style.fontSize = Math.random() * 20 + 15 + "px";
    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 4000);
}, 300);