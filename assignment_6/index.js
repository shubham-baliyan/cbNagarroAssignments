let list = document.querySelector(".list");
let input = document.querySelector(".input");
let btn = document.querySelector(".btn");

let createLi = (value) => {
  let item = document.createElement("li");
  item.innerText = value;
  item.className = "list-item";
  let button = document.createElement("button");
  button.innerText = "X";
  button.className = "button";
  let editButton = document.createElement("button");
  editButton.innerText = "edit";
  editButton.className = "edit";
  item.appendChild(editButton);
  item.appendChild(button);
  return item;
};
const makeli = () => {
  let value = input.value;
  let item = createLi(value);

  list.append(item);
  input.value = "";
  item.addEventListener("click", (e) => {
    console.log(e.target.innerText);
    let target = e.target;
    let li = target.closest("li");
    // get reference by using closest
    let nodes = Array.from(li.closest("ul").children); // get array
    let index = nodes.indexOf(li);
    if (target.innerText === "EDIT") {
      const value = prompt("get the value");
      console.log(value);
      let item = list.childNodes[index];
      let text = item.childNodes[0];
      console.log({ item, text });
      text.nodeValue = value;
    } else {
      list.removeChild(list.childNodes[index]);
    }
    console.log(index);
  });
};

btn.addEventListener("click", makeli);
input.addEventListener("keyup", (event) => {
  console.log(event.keyCode);
  if (event.keyCode === 13) {
    makeli();
  }
});
