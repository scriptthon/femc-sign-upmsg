const regEX =
  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

export const checkMail = (text) => {
  return regEX.test(text);
};

export const formErr = (item1, item2) => {
  item1.classList.add("err");
  item2.classList.add("err");
};


export const thanksWindow = (card, cardNot) => {
  card.classList.toggle('d-none')
  cardNot.classList.toggle('d-none')
}