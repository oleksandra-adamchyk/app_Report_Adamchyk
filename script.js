console.log('Сторінка завантажена');

document.addEventListener("DOMContentLoaded", () => {
  let currentLab = null;

  const labButtons = document.querySelectorAll('[data-lab]');
  const sectionButtons = document.querySelectorAll('.sidebar-button');
  const allLabContents = document.querySelectorAll('.lab-content');

  // Обробка натискання на кнопки лабораторних (зверху)
  labButtons.forEach(button => {
    button.addEventListener('click', () => {
      const labId = button.dataset.lab;
      currentLab = labId;

      // Сховати всі лабораторні
      allLabContents.forEach(content => content.classList.add('hidden'));

      // Показати обрану лабораторну
      const labBlock = document.getElementById(`${labId}-content`);
      if (labBlock) {
        labBlock.classList.remove('hidden');

        // Сховати всі секції в ній
        const sections = labBlock.querySelectorAll('.section');
        sections.forEach(section => section.classList.add('hidden'));

        // Показати секцію "Тема" за замовчуванням
        const defaultSection = labBlock.querySelector('[data-section="theme"]');
        if (defaultSection) {
          defaultSection.classList.remove('hidden');
        }
      }
    });
  });

  // Обробка натискання на кнопки секцій (зліва)
  sectionButtons.forEach(button => {
    button.addEventListener('click', () => {
      if (!currentLab) return;

      const sectionName = button.dataset.section;
      const labBlock = document.getElementById(`${currentLab}-content`);
      if (!labBlock) return;

      // Сховати всі секції
      const sections = labBlock.querySelectorAll('.section');
      sections.forEach(section => section.classList.add('hidden'));

      // Показати вибрану секцію
      const targetSection = labBlock.querySelector(`[data-section="${sectionName}"]`);
      if (targetSection) {
        targetSection.classList.remove('hidden');
      }
    });
  });
});

