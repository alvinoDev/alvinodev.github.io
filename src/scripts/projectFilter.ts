const CARD_SELECTOR = '.project-card';
const CHECKBOX_SELECTOR = '.filter-checkbox';

/**
 * Wires the skill checkboxes to the project cards.
 * With no checkbox selected every project is visible.
 */
export function initProjectFilter(): void {
  const checkboxes = Array.from(
    document.querySelectorAll<HTMLInputElement>(CHECKBOX_SELECTOR),
  );
  const cards = Array.from(document.querySelectorAll<HTMLElement>(CARD_SELECTOR));

  if (checkboxes.length === 0 || cards.length === 0) return;

  const applyFilter = (): void => {
    const selectedSkills = checkboxes
      .filter((checkbox) => checkbox.checked)
      .map((checkbox) => checkbox.dataset.skill)
      .filter((skill): skill is string => Boolean(skill));

    cards.forEach((card) => {
      const projectSkills = (card.dataset.skills ?? '')
        .split(',')
        .filter(Boolean);

      const isVisible =
        selectedSkills.length === 0 ||
        selectedSkills.some((skill) => projectSkills.includes(skill));

      card.classList.toggle('hidden', !isVisible);
    });
  };

  checkboxes.forEach((checkbox) => {
    checkbox.addEventListener('change', applyFilter);
  });
}
