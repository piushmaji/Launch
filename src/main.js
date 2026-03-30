const totalSteps = 3;
let currentStep = 1;

document.addEventListener('DOMContentLoaded', () => {
  goToStep(1);

  // Next buttons
  document.querySelectorAll('.step-next').forEach(btn => {
    btn.addEventListener('click', nextStep);
  });

  // Step dots
  document.querySelectorAll('.step-dot').forEach(dot => {
    dot.addEventListener('click', () => {
      const step = parseInt(dot.dataset.step);
      goToStep(step);
    });
  });

  // FAQ Accordion
  document.querySelectorAll('.faq-question').forEach(button => {
    button.addEventListener('click', () => {
      const faqItem = button.parentElement;
      const answer = button.nextElementSibling;
      const isActive = faqItem.classList.contains('active');

      // Close all other open FAQ items
      document.querySelectorAll('.faq-item.active').forEach(item => {
        item.classList.remove('active');
        item.querySelector('.faq-answer').style.maxHeight = null;
      });

      // Toggle current item
      if (!isActive) {
        faqItem.classList.add('active');
        answer.style.maxHeight = answer.scrollHeight + "px";
      }
    });
  });
});

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