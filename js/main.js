const button = document.querySelector(".random-button");

button.addEventListener("click", async () => {
  const data = await fetch("https://api.adviceslip.com/advice");
  const advice = await data.json();

  const adviceText = document.querySelector("#advice_text");
  const adviceId = document.querySelector("#advice_id");

  adviceText.innerHTML = `"${advice.slip.advice}"`;
  adviceId.innerHTML = advice.slip.id;

  console.log(advice);
});

function writeMachineText(text, element) {
  let i = 0;
  const interval = setInterval(() => {
    element.innerHTML += text[i];
    i++;
    if (i === text.length) {
      clearInterval(interval);
    }
  }, 50);
}

window.onload = async () => {
  const load = document.querySelector("#load");

  writeMachineText("Loading...", load);

  const data = await fetch("https://api.adviceslip.com/advice");
  const advice = await data.json();

  setTimeout(() => {
    title.innerHTML = "";
  }, 2000);

  const adviceText = document.querySelector("#advice_text");
  const adviceId = document.querySelector("#advice_id");

  adviceText.innerHTML = `"${advice.slip.advice}"`;
  adviceId.innerHTML = advice.slip.id;

  load.innerHTML = "";

  console.log(advice);
};
