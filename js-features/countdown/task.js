let timer = document.getElementById('timer');
  let timerId = setInterval(countDown, 1000);

function countDown() {
  timer.textContent--;
  if (timer.textContent <= 0) {
    alert("Вы победили в конкурсе!");
    clearInterval(timerId);
  }
}