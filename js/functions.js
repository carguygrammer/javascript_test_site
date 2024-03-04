import { getDadJoke } from "./promises.js";
import { randNumberGenerator } from "./math.js";

const pTag = document.querySelector(".insert-info");
const randDadJokeBtn = document.querySelector(".dadJoke");
const changeBGBtn = document.querySelector(".changeBG");
const randNumBtn = document.querySelector(".randNum");
const clearBtn = document.querySelector(".clearBtn");

//creates rgb(num1,num2,num3);
const createRGBColor = () => {
  const r = randNumberGenerator(255);
  const g = randNumberGenerator(255);
  const b = randNumberGenerator(255);
  //   in case you like the color
  console.log(`rgb(${r},${g},${b})`);
  return `rgb(${r},${g},${b})`;
};
//changes background on click event for section and body at the same time
const changeBackGround = () => {
  changeBGBtn.addEventListener("click", (e) => {
    e.preventDefault();
    document.body.style.backgroundColor = createRGBColor();
  });
};

// gets a random number on click event
const postRandNum = () => {
  randNumBtn.addEventListener("click", (e) => {
    pTag.classList.add("numberFont");
    pTag.innerText = randNumberGenerator(100);
  });
};
// gets a random dad Joke
const postRandDadJoke = () => {
  randDadJokeBtn.addEventListener("click", async (e) => {
    pTag.classList.remove("numberFont");
    pTag.innerText = await getDadJoke();
  });
};

const clearTheConsole = () => {
  clearBtn.addEventListener("click", (e) => {
    pTag.classList.remove("numberFont");
    pTag.innerText = "Clearing console...";
    setTimeout(() => {
      pTag.innerText = " ";
    }, 1500);
  });
};

export { changeBackGround, postRandNum, postRandDadJoke, clearTheConsole };
