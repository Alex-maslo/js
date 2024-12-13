const myArray = [];

function getInputValue(value) {
  let array = value.split("=").map((el) => el.trim());

  if (array.length === 2) {
    return { name: array[0], value: array[1] };
  } else {
    alert(`Перевірте правильність введених значень`);
    return 0;
  }
}

function setData(array) {
  let index = array.length;
  return localStorage.setItem("myArray", JSON.stringify(array));
}

function getData() {
  return JSON.parse(localStorage.getItem("myArray"));
}

function renderList() {
  let list = document.getElementById("data-manager__list");
  let data = getData();
  list.innerHTML = "";
  data.forEach(({ name, value }) => {
    let listElement = document.createElement("li");
    listElement.textContent = `${name} = ${value}`;
    list.appendChild(listElement);
  });
}

document.addEventListener("click", (event) => {
  let inputData = document.getElementById("data-input");

  switch (event.target.id) {
    case "button-add":
      myArray.push(getInputValue(inputData.value));
      setData(myArray);
      renderList();
      break;

    case "button-delete":
      localStorage.clear();
      break;
  }
});

let vv = "            aaa=    hhh               ";

console.log(getInputValue(vv));
