const inputEl = document.querySelector("input");
const buttonEl = document.querySelector("button");
const timerEl = document.querySelector("span");
let interval;

inputEl.addEventListener("input", () => {
  inputEl.value = inputEl.value.replace(/\D/g, "");
});
const createTimerAnimator = () => {
  const hours = Math.floor(inputEl.value / 3600);
  const minutes = Math.floor((inputEl.value % 3600) / 60);
  let secondsSpan = Math.floor((inputEl.value % 3600) % 60);
  secondsSpan = secondsSpan < 10 ? "0" + secondsSpan : secondsSpan;
  timerEl.innerHTML = `${hours}:${minutes}:${secondsSpan}`;
  if (inputEl.value > 0) {
    inputEl.value--;
    secondsSpan--;
  }
  if (inputEl.value <= 0) {
    inputEl.value = 0;
    secondsSpan = 0;
  }

};

buttonEl.addEventListener("click", () => {
  clearInterval(interval);
  interval = setInterval(createTimerAnimator, 1000);
});
