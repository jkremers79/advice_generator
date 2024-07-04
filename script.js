async function fetchRandomAdvice() {

    try {
        const response = await fetch("https://api.adviceslip.com/advice");

        if (response.ok) {
            const randomAdvice = await response.json();

            const { id, advice } = randomAdvice.slip;

            adviceText.textContent = `" ${advice} "`
            adviceId.textContent = `${id}`
        }
        else {
            adviceText.textContent = `"Oops, something went wrong retrieving the advice"`
            adviceId.textContent = `error`
        }
    }
    catch {
        adviceText.textContent = `Oops, something went wrong retrieving the advice`
        adviceId.textContent = `error`
    }

}

fetchRandomAdvice();


const adviceText = document.querySelector(".advice_text");
const adviceId = document.querySelector(".advice_id");
const newAdviceButon = document.querySelector("button");

newAdviceButon.addEventListener("click", fetchRandomAdvice);