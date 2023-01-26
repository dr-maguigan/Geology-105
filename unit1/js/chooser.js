const gameConfig = [ //start game configuration
  //all options for prompt, choice, and options
  {
    choice: "Moving on",
    prompt: "Which of the following do you think might be the best example of someone using the Scientific Method/EDP in their daily lives?",
    options: ["Their car won't start", "A light went out", "They have a headache"]
  },
  {
    choice: "Their car won't start",
    prompt: "That's a good one! It could be something with the battery or the alternator so they have to try to figure out what the issue is.",
    options: ["Moving on"]
  },
  {
    choice: "A light went out",
    prompt: "Good one! They have to figure out what is causing the issue. Is it the light bulb, a fuse/circuit breaker, or did the whole area lose power?",
    options: ["Moving on"]
  },
  {
    choice: "They have a headache",
    prompt: "Right! It could be from too much noise/light, they're dehydrated, or something else",
    options: ["Moving on"]
  }
];

const prompt = document.querySelector(".prompt"); //define prompt through querySelector
const chooser = document.querySelector(".chooser"); //define choices through querySelector
const actBtn = document.querySelector(".act-btn"); //define actions through querySelector

function act(choice) { //function for act
  prompt.textContent = gameConfig.filter( //set up prompt based on choice
    config => config.choice === choice
  )[0].prompt;
  chooser.innerHTML = gameConfig //set up innerHMTL to navigate around choices, which defines options
    .filter(config => config.choice === choice)[0]
    .options.map(option => `<option value="${option}">${option}</option>`)
    .join(""); //put it all together
}

actBtn.addEventListener("click", () => act(chooser.value)); //add a listener

act("Start"); //defines starting point as first option, which contains "Start" as the choice
