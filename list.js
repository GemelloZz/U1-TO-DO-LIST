// const newTo = document.getElementById("list");
// newTo.addEventListener("submit", function (e) {
//   e.preventDefault();
//   const list = document.getElementById("li");

//   const neWlist = list.value;
//   console.log(neWlist);

//   const card = document.createElement("article");
//   card.classList.add("new-card");

//   const create = document.createElement("p");
//   create.innerText = neWlist;
//   card.appendChild(create);

//   const savedSection = document.getElementById("saved");
//   savedSection.appendChild(card);
// });

const newTo = document.getElementById("list");
newTo.addEventListener("submit", function (e) {
  e.preventDefault();
  const inputField = document.getElementById("li");
  const newListValue = inputField.value.trim();

  const card = document.getElementById("ul");
  card.classList.add("new-card");

  const create = document.createElement("li");
  create.innerText = newListValue;
  create.addEventListener("click", function () {
    create.classList.add("delete");
  });
  card.appendChild(create);

  const savedSection = document.getElementById("saved");
  savedSection.appendChild(card);

  inputField.value = "";
});
