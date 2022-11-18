/** @format */

let input = document.querySelector(`input`);
let rootUl = document.querySelector(`ul`);

let allData = JSON.parse(localStorage.getItem(`movies`)) || [];

function handleChange(event) {
  let index = Number(event.target.getAttribute(`data-id`));
  allData[index].watched = !allData[index].watched;
  localStorage.setItem(`movies`, JSON.stringify(allData));
  createUi(allData);
}

function handleDelete(event) {
  let index = Number(event.target.getAttribute(`data-id`));
  allData.splice(index, 1);
  localStorage.setItem(`movies`, JSON.stringify(allData));
  createUi(allData);
}

// create element function
let elm = React.createElement;

// create ui
function createUi(data = allData) {
  let dataUi = data.map((data, i) => {
    let li = elm(
      `li`,
      { "data-id": i },
      elm(`p`, { className: `para` }, data.name),
      elm(
        `button`,
        { "data-id": i, onClick: handleChange },
        data.watched ? ` watched` : `To watch`
      ),
      elm(`span`, { "data-id": i, onClick: handleDelete }, `❌`)
    );
    return li;
  });
  ReactDOM.render(dataUi, rootUl);
}

input.addEventListener(`keyup`, e => {
  if (e.keyCode === 13) {
    if (e.target.value === ``) {
      alert(`please enter your movie`);
    } else {
      let obj = {
        name: e.target.value,
        watched: false,
      };
      allData.push(obj);
      localStorage.setItem(`movies`, JSON.stringify(allData));

      createUi(allData);
      e.target.value = ``;
    }
  }
});
createUi(allData);
