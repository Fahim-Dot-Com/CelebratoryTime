const confettiCanvas = document.getElementById('confetti-canvas');
const myConfetti = confetti.create(confettiCanvas, {
  resize: true,
  useWorker: true
});

function launchConfetti() {
  myConfetti({
    particleCount: 150,
    spread: 100,
    origin: { y: 0.6 }
  });
}
