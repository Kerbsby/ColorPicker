const colorInput = document.getElementById('colorInput');

const color = document.querySelector(".color")
const color_word = document.querySelector(".color-word")

colorInput.addEventListener('input', function() {
  const colorCode = colorInput.value;
  color.textContent = colorCode;
  color.style.color = colorCode;
  color_word.style.color = colorCode;
  document.body.style.backgroundColor = colorCode;
});