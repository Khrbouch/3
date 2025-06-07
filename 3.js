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

// Enhanced Balloons
function createBalloons() {
  const colors = [
    'radial-gradient(circle at 30% 30%, #ff6b6b, #d600a8)',
    'radial-gradient(circle at 30% 30%, #4ecdc4, #009688)',
    'radial-gradient(circle at 30% 30%, #ffe66d, #ff9800)',
    'radial-gradient(circle at 30% 30%, #ff9ff3, #e91e63)',
    'radial-gradient(circle at 30% 30%, #1dd1a1, #009688)'
  ];
            
  for (let i = 0; i < 2; i++) {
    const balloon = document.createElement('div');
    balloon.className = 'balloon';
    balloon.style.background = colors[Math.floor(Math.random() * colors.length)];
    balloon.style.left = Math.random() * 80 + 10 + '%';
    balloon.style.top = Math.random() * 30 + '%';
    balloon.style.animationDelay = Math.random() * 2 + 's';
                
    const string = document.createElement('div');
    string.className = 'balloon-string';
    balloon.appendChild(string);
                
    document.body.appendChild(balloon);
  }
}

// Fireworks
function createFireworks() {
  const colors = ['#ff0000', '#ffff00', '#00ff00', '#00ffff', '#ff00ff', '#ffffff'];
            
  setInterval(() => {
    const firework = document.createElement('div');
    firework.className = 'firework';
    firework.style.left = Math.random() * 100 + '%';
    firework.style.top = Math.random() * 100 + '%';
    firework.style.boxShadow = `0 0 10px 2px ${colors[Math.floor(Math.random() * colors.length)]}`;
    firework.style.animationDuration = (Math.random() * 0.5 + 0.5) + 's';
                
    document.body.appendChild(firework);
                
    setTimeout(() => {
      firework.remove();
    }, 1000);
  }, 300);
}

window.onload = function() {
  createConfetti();
  createBalloons();
  createFireworks();
};
