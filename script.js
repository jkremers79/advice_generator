async function fetchRandomAdvice() {
    const answer = await fetch("https://api.adviceslip.com/advice");
    const randomAdvice = await answer.json();

    const { id, advice } = randomAdvice.slip;

    adviceText.textContent = `" ${advice} "`
    adviceId.textContent = `${id}`

}

fetchRandomAdvice();


const adviceText = document.querySelector(".advice_text");
const adviceId = document.querySelector(".advice_id");
const newAdviceButon = document.querySelector("button");


newAdviceButon.addEventListener("click", fetchRandomAdvice);