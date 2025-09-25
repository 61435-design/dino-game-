const dino = document.getElementById("dino");
const cactus = document.getElementById("cactus");

let isJumping = false;
let gameOver = false;

function jump() {
    if (isJumping) return;
    isJumping = true;
    let position = 0;

    const upInterval = setInterval(() => {
        if (position >= 150) {
            clearInterval(upInterval);
            const downInterval = setInterval(() => {
                if (position <= 0) {
                    clearInterval(downInterval);
                    isJumping = false;
                }
                position -= 10;
                dino.style.bottom = position + "px";
            }, 20);
        }
        position += 10;
        dino.style.bottom = position + "px";
    }, 20);
}

function startGame() {
    cactus.style.right = "-20px";
    const cactusInterval = setInterval(() => {
        let cactusPosition = parseInt(cactus.style.right) || 0;
        cactusPosition += 10;
        cactus.style.right = cactusPosition + "px";

        const dinoBottom = parseInt(dino.style.bottom) || 0;

        if (cactusPosition > 700 && cactusPosition < 750 && dinoBottom < 40) {
            clearInterval(cactusInterval);
            alert("Game Over! Refresh to try again.");
            gameOver = true;
        }

        if (cactusPosition > 800) {
            cactusPosition = -20;
        }
    }, 50);
}

document.addEventListener("keydown", (e) => {
    if (e.code === "Space") jump();
});

startGame();
