/* ================= ELEMENTS ================= */

const startScreen = document.getElementById("startScreen");
const mainWebsite = document.getElementById("mainWebsite");

const enterBtn = document.getElementById("enterBtn");

const music = document.getElementById("birthdayMusic");
const musicBtn = document.getElementById("musicBtn");

const envelope = document.getElementById("envelope");
const openLetter = document.getElementById("openLetter");

const floatingContainer =
  document.querySelector(".floating-container");


/* ================= ENTER EXPERIENCE ================= */

enterBtn.addEventListener("click", () => {

  startScreen.classList.add("hide");

  setTimeout(() => {

    mainWebsite.classList.add("show");

    window.scrollTo({
      top: 0,
      behavior: "instant"
    });

  }, 700);


  /* Browser allows music after button click */

  music.play()
    .then(() => {
      musicBtn.classList.add("playing");
    })
    .catch(() => {
      console.log("Music waiting for permission.");
    });

  createFloatingHearts();

});


/* ================= MUSIC BUTTON ================= */

musicBtn.addEventListener("click", () => {

  if (music.paused) {

    music.play();

    musicBtn.classList.add("playing");

  } else {

    music.pause();

    musicBtn.classList.remove("playing");

  }

});


/* ================= SCROLL ================= */

function scrollToSection(id) {

  const section = document.getElementById(id);

  if (!section) return;

  section.scrollIntoView({
    behavior: "smooth"
  });

}


/* ================= LETTER ================= */

openLetter.addEventListener("click", () => {

  envelope.classList.toggle("open");

  if (envelope.classList.contains("open")) {

    openLetter.textContent = "CLOSE ♡";

  } else {

    openLetter.textContent = "OPEN ♡";

  }

});


/* ================= FLOATING HEARTS ================= */

function createFloatingHearts() {

  setInterval(() => {

    const heart = document.createElement("div");

    heart.className = "floating";

    const symbols = [
      "♡",
      "♥",
      "✦",
      "✧",
      "♡"
    ];

    heart.textContent =
      symbols[Math.floor(Math.random() * symbols.length)];

    heart.style.left =
      Math.random() * 100 + "%";

    heart.style.fontSize =
      (12 + Math.random() * 20) + "px";

    heart.style.animationDuration =
      (6 + Math.random() * 7) + "s";

    floatingContainer.appendChild(heart);


    setTimeout(() => {

      heart.remove();

    }, 14000);

  }, 700);

}

/* ================= CLICK HEART EFFECT ================= */

document.addEventListener("click", (event) => {

  if (
    event.target.closest("button") ||
    event.target.closest("a")
  ) {
    return;
  }


  const heart = document.createElement("div");

  heart.textContent = "♡";

  heart.style.position = "fixed";

  heart.style.left =
    event.clientX + "px";

  heart.style.top =
    event.clientY + "px";

  heart.style.color = "#df91ad";

  heart.style.fontSize = "25px";

  heart.style.pointerEvents = "none";

  heart.style.zIndex = "9999";

  heart.style.animation =
    "clickHeart 1s ease forwards";

  document.body.appendChild(heart);


  setTimeout(() => {

    heart.remove();

  }, 1000);

});


/* ================= PAGE LOADED ================= */

window.addEventListener("load", () => {

  console.log(
    "♡ ATHARV Birthday Experience Ready ♡"
  );

});
// 🎁 Open Surprise

const openSurpriseBtn = document.getElementById("openSurpriseBtn");
const surpriseMessage = document.getElementById("surpriseMessage");

if (openSurpriseBtn && surpriseMessage) {
    openSurpriseBtn.addEventListener("click", () => {

        surpriseMessage.classList.add("show");

        openSurpriseBtn.textContent = "💗 Surprise Opened";

        setTimeout(() => {
            surpriseMessage.scrollIntoView({
                behavior: "smooth",
                block: "center"
            });
        }, 200);
    });
}