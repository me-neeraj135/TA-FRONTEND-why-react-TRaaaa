/** @format */
let input = document.querySelector(`input`);
let rootUl = document.querySelector(`.rootUl`);

let allData = JSON.parse(localStorage.getItem("movies")) || [];

function handleWatch(event) {
  let index = Number(event.target.getAttribute(`data-id`));

  allData[index].watch = !allData[index].watch;
  localStorage.setItem(`movies`, JSON.stringify(allData));
  createUi(allData);
}

function handleDelete(e) {
  let index = Number(e.target.parentElement.getAttribute(`data-id`));
  allData.splice(index, 1);
  localStorage.setItem(`movies`, JSON.stringify(allData));
  createUi(allData);
}
// create element function
function elm(type, attr = {}, ...children) {
  let element = document.createElement(type);
  for (let key in attr) {
    if (key.startsWith(`data-`)) {
      element.setAttribute(key, attr[key]);
    } else if (key.startsWith(`on`)) {
      element.setAttribute(key, attr[key]);
      let eventType = key.replace("on", "").toLocaleLowerCase();
      element.addEventListener(eventType, attr[key]);
    } else if (key.startsWith(`delete`)) {
      element.setAttribute(key, attr[key]);
      element.addEventListener(`click`, handleDelete);
    } else {
      element[key] = attr[key];
    }
  }

  children.forEach(child => {
    // console.log(typeof child, `child`);
    if (typeof child === `object`) {
      element.append(child);
    }
    if (typeof child === `string`) {
      let node = document.createTextNode(child);
      element.append(node);
    }
  });
  return element;
}

// create ui

function createUi(data = allData) {
  rootUl.innerHTML = ``;
  data.forEach((data, i) => {
    let li = elm(
      `li`,
      {
        "data-id": i,
      },
      elm(`p`, {
        className: "para",
        innerText: data.name,
      }),
      elm(
        `button`,
        {
          "data-id": i,
          onClick: handleWatch,
        },
        data.watch ? `Watched` : `To Watch`
      ),
      elm(
        `span`,
        {
          className: `delete`,
          onclick: handleDelete,
        },
        (innerText = `❌`)
      )
    );

    rootUl.append(li);
  });
}

function handleInput(e) {
  if (e.keyCode === 13 && e.target.value) {
    let obj = {};
    obj.name = e.target.value;
    obj.watch = false;

    allData.push(obj);
    localStorage.setItem(`movies`, JSON.stringify(allData));
    createUi(allData);
    e.target.value = ``;
  }
}

input.addEventListener(`keypress`, handleInput);
createUi(allData);
