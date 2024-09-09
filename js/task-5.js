const change = document.querySelector('body');
const button = document.querySelector('.change-color');
const stringResult = document.querySelector('.color');


button.addEventListener('click', () => {
    const colors = getRandomHexColor();
    change.style.backgroundColor = colors;  // Исправлено на "change"
    stringResult.textContent = colors;
})
function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, 0)}`;
  }
  