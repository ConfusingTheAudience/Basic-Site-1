const myCheckbox = document.querySelector(".mobile-nav__checkbox");
const mobileNav = document.querySelector(".mobile-nav");

const automaticTextRead = document.querySelector(".section2__p");
const automaticTextRead2 = document.querySelector(".section3__p");
const automaticTextRead3 = document.querySelector(".section4__p");

const winList = document.querySelector(".section5__winners");

myCheckbox.addEventListener("click", openMenu);

let howMuchPressed = 0; // checkbox pressed

function openMenu(e) {
  if (mobileNav.classList.contains("mobile-nav__show")) {
    mobileNav.classList.remove("mobile-nav__show");
  } else {
    mobileNav.classList.add("mobile-nav__show");
  }

  // CHECKING IF MENU IS SHOWED OR NOT
  if (howMuchPressed % 2 == 0) {
    myCheckbox.classList.add("mobile-nav_checkbox-on");
    myCheckbox.classList.remove("mobile-nav__checkbox-off");
    howMuchPressed++;
  } else {
    myCheckbox.classList.remove("mobile-nav_checkbox-on");
    myCheckbox.classList.add("mobile-nav__checkbox-off");
    howMuchPressed++;
  }
  // CHECKING IF MENU IS SHOWED OR NOT
}

function checkScreenBrowser() {
  let screenCurrentWidth = window.innerWidth;
  if (
    screenCurrentWidth > 700 &&
    mobileNav.classList.contains("mobile-nav__show")
  ) {
    mobileNav.classList.remove("mobile-nav__show");
  }

  if (
    screenCurrentWidth < 700 &&
    myCheckbox.classList.contains("mobile-nav_checkbox-on")
  ) {
    mobileNav.classList.add("mobile-nav__show");
  }
}

setInterval(checkScreenBrowser, 1);

const textRead = `Chess is a board game played between two players. It is sometimes called Western chess or international chess to distinguish it from related games such as xiangqi and shogi. The current form of the game emerged in Spain and the rest of Southern Europe during the second half of the 15th century after evolving from chaturanga, a similar but much older game of Indian origin. Today, chess is one of the world's most popular games, played by millions of people worldwide.

Chess is an abstract strategy game and involves no hidden information. It is played on a square chessboard with 64 squares arranged in an eight-by-eight grid. At the start, each player (one controlling the white pieces, the other controlling the black pieces) controls sixteen pieces: one king, one queen, two rooks, two bishops, two knights, and eight pawns. The object of the game is to checkmate the opponent's king, whereby the king is under immediate attack (in "check") and there is no way for it to escape. There are also several ways a game can end in a draw.

Organized chess arose in the 19th century. Chess competition today is governed internationally by FIDE (International Chess Federation). The first universally recognized World Chess Champion, Wilhelm Steinitz, claimed his title in 1886; Magnus Carlsen is the current World Champion. A huge body of chess theory has developed since the game's inception. Aspects of art are found in chess composition, and chess in its turn influenced Western culture and art and has connections with other fields such as mathematics, computer science, and psychology.

One of the goals of early computer scientists was to create a chess-playing machine. In 1997, Deep Blue became the first computer to beat the reigning World Champion in a match when it defeated Garry Kasparov. Today's chess engines are significantly stronger than the best human players, and have deeply influenced the development of chess theory. ~ Wikipedia`;

const textRead2 = `A playing card is a piece of specially prepared card stock, heavy paper, thin cardboard, plastic-coated paper, cotton-paper blend, or thin plastic that is marked with distinguishing motifs. Often the front (face) and back of each card has a finish to make handling easier. They are most commonly used for playing card games, and are also used in magic tricks, cardistry, card throwing, and card houses; cards may also be collected. Some patterns of Tarot playing card are also used for divination, although bespoke cards for this use are more common. Playing cards are typically palm-sized for convenient handling, and usually are sold together in a set as a deck of cards or pack of cards.

The most common type of playing card is that found in the French-suited, standard 52-card pack, of which the most common design is the English pattern, followed by the Belgian-Genoese pattern. However, many countries use other, traditional types of playing card, including those that are German, Italian, Spanish and Swiss-suited. Tarot cards (also known locally as Tarocks or tarocchi) are an old genre of playing card that is still very popular in France, central and Eastern Europe and Italy. Asia, too, has regional cards such as the Japanese hanafuda. The reverse side of the card is often covered with a pattern that will make it difficult for players to look through the translucent material to read other people's cards.

Playing cards are available in a wide variety of styles, as decks may be custom-produced for casinos and magicians (sometimes in the form of trick decks), made as promotional items, or intended as souvenirs, artistic works, educational tools, or branded accessories. Decks of cards or even single cards are also collected as a hobby or for monetary value. Cards may also be produced for trading card sets or collectible card games, which can comprise hundreds if not thousands of unique cards, or as supplements for board games. ~ Wikipedia`;

const textRead3 = `Dice games are games that use or incorporate one or more dice as their sole or central component, usually as a random device. Patterned after the success of collectible card games, a number of collectible dice games have been published. Although most of these collectible dice games are long out-of-print, there is still a small following for many of them. ~ Wikipedia`;

let idx = 0;
let idx2 = 0;
let idx3 = 0;

function autoTextReadMe() {
  automaticTextRead.innerText = textRead.slice(0, idx);
  automaticTextRead2.innerText = textRead2.slice(0, idx2);
  automaticTextRead3.innerText = textRead3.slice(0, idx3);

  idx++;
  idx2++;
  idx3++;

  if (idx > textRead.length) {
    clearInterval();
  }
  if (idx2 > textRead2.length) {
    clearInterval();
  }
  if (idx3 > textRead3.length) {
    clearInterval();
  }
}

setInterval(autoTextReadMe, 10);

let ourWinners = [
  {
    name: "jaosnataosna",
    points: "120",
  },
  {
    name: "Sarrah",
    points: "119",
  },
  {
    name: "Playerxyz",
    points: "110",
  },
  {
    name: "hat",
    points: "109",
  },
  {
    name: "Nuuuuuak",
    points: "90",
  },
  {
    name: "deedee",
    points: "86",
  },
  {
    name: "Jul",
    points: "86",
  },
  {
    name: "Monica",
    points: "70",
  },
  {
    name: "Adam",
    points: "66",
  },
  {
    name: "NotNoD",
    points: "65",
  },
];

let whoWin = ourWinners.map(function (item) {
  return "<li>" + item.name + " " + "got " + item.points + " points" + "</li>";
});

winList.innerHTML = whoWin.join("\n");
