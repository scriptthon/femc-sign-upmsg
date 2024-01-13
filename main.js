import "./src/sass/main.scss";
import listIcon from "./src/images/icon-list.svg";
import desktopBanner from "./src/images/illustration-sign-up-desktop.svg";
import mobileBanner from "./src/images/illustration-sign-up-mobile.svg";
import { checkMail, formErr, thanksWindow } from "./app";


const card = document.querySelector('.card')
const cardNote = document.querySelector('.card-not')
const cardNoteParagraph = document.querySelector('#cardNote #msg')
const cardNoteBtn = document.querySelector('.card-not button')
const cardBanner = document.querySelector(".card>img");
const li = document.querySelectorAll(".card li");
const form = document.querySelector("form");
const label = document.querySelector('[for="mail"]');


const checking = () => {
  if (checkMail(form.mail.value.trim())) {
    thanksWindow(card, cardNote)
  } else {
    formErr(form.mail, label)
  }
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  cardNoteParagraph.innerHTML = `A confirmation email has been sent to<br> <b>${form.mail.value}</b>. Please open it and click <br> the button inside to confirm your subscription`
  checking()
});

cardNoteBtn.addEventListener('click', () => {
  checking()
})

li.forEach((li) => {
  const text = li.textContent;
  li.innerHTML = `<img src="${listIcon}"/> ${text}`;
});

if (window.innerWidth <= 777) {
  cardBanner.src = mobileBanner;
}

window.addEventListener("resize", (e) => {
  if (window.innerWidth <= 777) {
    cardBanner.src = mobileBanner;
  } else {
    cardBanner.src = desktopBanner;
  }
});