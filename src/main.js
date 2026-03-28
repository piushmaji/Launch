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
