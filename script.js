const menu = document.getElementById("menu");
const sidey = document.getElementById("conto");
const blue = window.matchMedia("(max-width: 800px)");
const ghostly = document.getElementById("ghostly");


//Show ABOUT info
const extra = document.getElementById('info');

function show(){
    info.classList.toggle('xxc');
};

function unshow(){
    info.classList.remove('xxc');
};


function ghostify(){
  ghostly.innerHTML === '<img src="img/ghosties.png" alt="decorative">' ? 
  ghostly.innerHTML = '<img src="img/ghosties2.png" alt="decorative">' : ghostly.innerHTML = '<img src="img/ghosties.png" alt="decorative">';
}

function myFunction(x) {
  if (blue.matches) {
    sidey.classList.remove("block");
  }
}

function toggler() {
  sidey.classList.toggle("block");
}

myFunction(blue);

const loader = document.getElementById("loaderDiv");

function stopLoader() {
  loader.classList.add("stop");
}

function startLoader(){
  loader.classList.remove("stop");
  setTimeout(stopLoader, 1000);
}

setTimeout(stopLoader, 1000);
// There are three different sets of words/images used in the game
const firstSet = document.getElementById("set1");
const secondSet = document.getElementById("set2");
const thirdSet = document.getElementById("set3");

// These are the other DOM elements
// const instructions = document.getElementById("instructions");
const gameContainer = document.getElementById("game-tiles");
// const sideBar = document.getElementById("sidebar");
// const sidebarText = document.getElementById("sidebarText");
const page__title = document.getElementById("pageTitle");

// Each image and word in a set array has the same data-framework number, in order to check for pairs.
// The data-name is a string, which can be used in the second case as innerHTML.
const set1 = [
  { number: "1", name: "bat" },
  { number: "1", name: "<img src = 'img/bat.svg' alt='bat' class='image'>" },
  { number: "2", name: "bone" },
  {
    number: "2",
    name: "<img src = 'img/bone.svg' alt='bone' class='image'>",
  },
  { number: "3", name: "broom" },
  {
    number: "3",
    name: "<img src = 'img/broom.svg' alt='broom' class='image'>",
  },
  { number: "4", name: "werewolf" },
  {
    number: "4",
    name: "<img src = 'img/werewolf.svg' alt='werewolf' class='image'>",
  },
  { number: "5", name: "candy" },
  {
    number: "5",
    name: "<img src = 'img/candy.svg' alt='candy' class='image'>",
  },
  { number: "6", name: "cat" },
  {
    number: "6",
    name: "<img src = 'img/cat.svg' alt='cat' class='image'>",
  },
  { number: "7", name: "cauldron" },
  {
    number: "7",
    name: "<img src = 'img/cauldron.svg' alt='cauldron' class='image'>",
  },
  { number: "8", name: "clown" },
  {
    number: "8",
    name: "<img src = 'img/clown.svg' alt='clown' class='image'>",
  },
];
const set2 = [
  { number: "9", name: "coffin" },
  {
    number: "9",
    name: "<img src = 'img/coffin.svg' alt='coffin' class='image'>",
  },
  { number: "10", name: "witch" },
  {
    number: "10",
    name: "<img src = 'img/witch.svg' alt='witch' class='image'>",
  },
  { number: "11", name: "fangs" },
  {
    number: "11",
    name: "<img src = 'img/fangs.svg' alt='fangs' class='image'>",
  },
  { number: "12", name: "frank" },
  {
    number: "12",
    name: "<img src = 'img/frank.svg' alt='frank' class='image'>",
  },
  { number: "13", name: "ghost" },
  {
    number: "13",
    name: "<img src = 'img/ghost.svg' alt='ghost' class='image'>",
  },
  { number: "14", name: "grave" },
  {
    number: "14",
    name: "<img src = 'img/grave.svg' alt='grave' class='image'>",
  },
  { number: "15", name: "hat" },
  {
    number: "15",
    name: "<img src = 'img/hat.svg' alt='hat' class='image'>",
  },
  { number: "16", name: "monster" },
  {
    number: "16",
    name: "<img src = 'img/monster.svg' alt='monster' class='image'>",
  },
];
const set3 = [
  { number: "17", name: "zombie" },
  {
    number: "17",
    name: "<img src = 'img/zombie.svg' alt='zombie' class='image'>",
  },
  { number: "18", name: "mummy" },
  {
    number: "18",
    name: "<img src = 'img/mummy.svg' alt='mummy' class='image'>",
  },
  { number: "19", name: "pirate" },
  {
    number: "19",
    name: "<img src = 'img/pirate.svg' alt='pirate' class='image'>",
  },
  { number: "20", name: "pumpkin" },
  {
    number: "20",
    name: "<img src = 'img/pumpkin.svg' alt='pumpkin' class='image'>",
  },
  { number: "21", name: "skeleton" },
  {
    number: "21",
    name: "<img src = 'img/skeleton.svg' alt='skeleton' class='image'>",
  },
  { number: "22", name: "skull" },
  {
    number: "22",
    name: "<img src = 'img/skull.svg' alt='skull' class='image'>",
  },
  { number: "23", name: "spider" },
  {
    number: "23",
    name: "<img src = 'img/spider.svg' alt='spider' class='image'>",
  },
  { number: "24", name: "vampire" },
  {
    number: "24",
    name: "<img src = 'img/vampire.svg' alt='vampire' class='image'>",
  },
];

// By Default the game plays set1
playGame(set1);

// In the sidebar, different sets can be chosen by clicking
firstSet.addEventListener("click", () => {
  ghostify();
  startLoader();
  gameContainer.innerHTML = "";
  page__title.textContent = "HALLOWEEN MATCHING: SET 1";
  playGame(set1);
});

secondSet.addEventListener("click", () => {
  ghostify();
  startLoader();
  gameContainer.innerHTML = "";
  page__title.textContent = "HALLOWEEN MATCHING: SET 2";
  playGame(set2);
});

thirdSet.addEventListener("click", () => {
  ghostify();
  startLoader();
  gameContainer.innerHTML = "";
  page__title.textContent = "HALLOWEEN MATCHING: SET 3";

  playGame(set3);
});

// PLAY THE GAME
// SHUFFLE THE GAME ARRAY for the chosen SET 1, 2 or 3.
function playGame(array) {
  function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
  }

  // call the shuffle function & assign the array to "contents"
  shuffle(array);
  let contents = array;

  // Create 16 Playing cards by using forEach on the array contents.
  contents.forEach((data, index) => createCard(data, index));

  // Call the createCard function turn the cards into DIV elements.
  function createCard(data, index) {
    let card = document.createElement("div");
    // Add a classname so the cards can be styled with CSS
    card.classList.add("card");
    //  Include the data-famework (data.number) of the cards so they can be checked plus the necessary HTML.

    card.innerHTML = `<div class="memory-card" tabindex=0 data-framework="${data.number}"><div class="front-face">${data.name}</div><div class="back-face"><img src = "img/tombstone.png" alt="picture of a basket of food" class="imgBg smaller" id="imgBg"></div></div>`;

    // Append the card divs to the game container so they appear on the page.
    gameContainer.appendChild(card);
  }

  // Select all instances of the class 'memory-card' and assign it to a constant
  const cards = document.querySelectorAll(".memory-card");

  // Set the initial boolean conditions to make the game work
  let hasFlippedCard = false;
  let lockBoard = false;
  let firstCard, secondCard;

  // Prevent card flipping, add the 'flip' CSS class to flip the card if it's alright to do so.
  function flipCard() {
    if (lockBoard) return;
    if (this === firstCard) return;

    this.classList.add("flip");

    // Allowing two cards to be flipped and calling the check function
    if (!hasFlippedCard) {
      hasFlippedCard = true;
      firstCard = this;
      return;
    }

    secondCard = this;

    checkForMatch();
  }

  // The check function
  function checkForMatch() {
    if (firstCard.dataset.framework === secondCard.dataset.framework) {
      disableCards();
      return;
    }

    unflipCards();
  }

  // Make pairs vanish by killing their innerHTML
  function disableCards() {
    lockBoard = true;
    setTimeout(() => {
      firstCard.innerHTML = "";
      secondCard.innerHTML = "";
      resetBoard();
    }, 1000);
  }

  // Unflip cards if they don't match by removing the flip class.
  function unflipCards() {
    lockBoard = true;
    setTimeout(() => {
      firstCard.classList.remove("flip");
      secondCard.classList.remove("flip");
      resetBoard();
    }, 1000);
  }

  // Set the board to continue the game, setting the constants to their original state
  function resetBoard() {
    [hasFlippedCard, lockBoard] = [false, false];
    [firstCard, secondCard] = [null, null];
  }

  // Event listener added to the cards
  cards.forEach((card) => card.addEventListener("click", flipCard));

  // RESTART COMPLETELY
  // document.getElementById("startButton").addEventListener("click", function () {
  //   location.reload();
  // });
}
