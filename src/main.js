const totalSteps = 3;
let currentStep = 1;

function goToStep(n) {
  if (n < 1 || n > totalSteps) return;
  currentStep = n;

  document.querySelectorAll('.step-block').forEach((block, blockIndex) => {
    const isActive = blockIndex + 1 === currentStep;

    block.classList.toggle('active', isActive);

    block.querySelectorAll('.step-dot').forEach((dot, dotIndex) => {
      dot.classList.toggle('active', dotIndex + 1 === currentStep);
    });
  });
}

function nextStep() {
  if (currentStep < totalSteps) goToStep(currentStep + 1);
}

document.addEventListener('DOMContentLoaded', () => goToStep(1));

   /* YouTube play on thumbnail click */
    function playVideo() {
  const videoId = 'jo3p7O8n6is';
  const startTime = 132;

  const wrapper = document.getElementById('videoWrapper');
  const iframe  = document.getElementById('videoIframe');

  iframe.src = `https://www.youtube.com/embed/${videoId}?start=${startTime}&autoplay=1&rel=0`;

  wrapper.classList.add('playing');
}