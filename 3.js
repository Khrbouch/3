function createConfetti() {
  const colors = ['#ff6b6b', '#4ecdc4', '#ffe66d', '#ff9ff3', '#1dd1a1'];
  for (let i = 0; i < 50; i++) {
      const confetti = document.createElement('div');
      confetti.className = 'decoration confetti';
      confetti.style.left = Math.random() * 100 + '%';
      confetti.style.background = colors[Math.floor(Math.random() * colors.length)];
      confetti.style.animationDelay = Math.random() * 5 + 's';
      confetti.style.width = Math.random() * 10 + 5 + 'px';
      confetti.style.height = Math.random() * 10 + 5 + 'px';
      document.body.appendChild(confetti);
  }
}

function createBalloons() {
  const balloons = document.querySelectorAll('.balloon');
  balloons.forEach(balloon => {
      const string = document.createElement('div');
      string.className = 'balloon-string';
      balloon.appendChild(string);
  });
}

window.onload = function() {
  createConfetti();
  createBalloons();
};