/** @format */

let input = document.querySelector(`input`);
let ul = document.querySelector(`ul`);

allMovie = [];

function handleInput(e) {
  let value = e.target.value;

  if (e.keyCode === 13) {
    if (value === "") {
      alert(`please enter your movie`);
    } else {
      let movie = {
        name: value,
        watched: false,
      };
      allMovie.push(movie);
      e.target.value = "";
      createUi(allMovie);
    }
  }
}

function handleDelete(e) {
  e.target.parentElement.remove();
  allMovie.splice(e.target.parentElement.id, 1);
  createUi(allMovie);
}

function createUi(data) {
  ul.innerHTML = ``;
  data.forEach((element, i) => {
    let li = document.createElement(`li`);
    li.id = i;
    li.innerText = element.name;
    let watchedBtn = document.createElement(`button`);
    watchedBtn.classList.add(`dspNone`);
    watchedBtn.innerText = `Watched`;

    let toWatchBtn = document.createElement(`button`);
    toWatchBtn.innerText = `To Watch`;
    toWatchBtn.classList.add(`toWatch`);

    //   to watch
    toWatchBtn.addEventListener(`click`, e => {
      let pElem = e.target.parentElement;
      //   console.log(pElem.id);
      allMovie[pElem.id].watched = true;
      toWatchBtn.classList.add(`dspNone`);
      toWatchBtn.classList.remove(`dspBlock`);
      watchedBtn.classList.toggle(`dspBlock`);

      //   console.log(allMovie[pElem.id]);
    });

    //  watch
    watchedBtn.addEventListener(`click`, e => {
      let pElem = e.target.parentElement;
      //   console.log(pElem.id);
      allMovie[pElem.id].watched = false;
      watchedBtn.classList.toggle(`dspBlock`);
      toWatchBtn.classList.add(`dspBlock`);

      console.log(allMovie[pElem.id]);
    });

    //   delete movie
    let span = document.createElement(`span`);
    span.innerText = `❌`;
    span.addEventListener(`click`, handleDelete);

    li.append(toWatchBtn, watchedBtn, span);
    ul.append(li);
  });
}

input.addEventListener(`keyup`, handleInput);
