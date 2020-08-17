// @ts-nocheck
const speedValue = document.querySelector('#speed');

const speedText = document.getElementById('speed-value');

speedValue.addEventListener('input', () => {
  speedText.innerText = speedValue.value;
});
