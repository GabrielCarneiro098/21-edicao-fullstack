const superHero = document.getElementById("superHero");
const title = document.getElementById("title");

const ironMan = "Iron Man";
const captain = "Captain America";
const thor = "Thor";

function getMovie(element) {
  const superHeroImg = element.getAttribute("alt");

  title.innerText = superHeroImg;

  superHero.classList.remove("animate__fadeInLeft");
  superHero.classList.add("animate__fadeOutLeft");

  setTimeout(() => {
    superHero.setAttribute("src", `./images/${superHeroImg}.png`);
    superHero.classList.remove("animate__fadeOutLeft");
    superHero.classList.add("animate__fadeInLeft");
  }, "1000");
}
