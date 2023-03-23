import { catsData } from "./data.js";

const emotionRadios = document.getElementById("emotion-radios");

function getEmotionsArray(cats) {
  const emotionsArray = [];

  for (let cat of cats) {
    for (let emotion of cat.emotionTags) {
      emotionsArray.push(emotion);
    }
  }
  return emotionsArray;
}

function renderEmotionsRadios(cats) {
  let radioItems = ``;
  const emotions = getEmotionsArray(cats);
  for (let emotion of emotions) {
    radioItems += `
        <div class="radio">
            <label for="${emotion}">${emotion}</label>
            <input
                type="radio"
                id="${emotions}"
                value="${emotions}"
                name="emotions"
                >
        </div>
        `;
  }
  emotionRadios.innerHTML = radioItems;
}

renderEmotionsRadios(catsData);

// function getEmotionsArray(cats) {
//   const emotionsArray = [];
//   for (let i = 0; i < cats.length; i++) {
//     for (let j = 0; j < cats[i].emotionTags.length; j++) {
//       emotionsArray.push(cats[i].emotionTags[j]);
//     }
//   }
//   console.log(emotionsArray);
// }
