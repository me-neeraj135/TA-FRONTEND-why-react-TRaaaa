/** @format */

function handleClick(params) {
  alert(`To learn React use https://reactjs.org
    - React and ReactDOM works together
    - Babel helps in writing JSX`);
}

function greeting(event) {
  if (event.target.nodeName === "BUTTON") {
    let value = event.target.innerText;

    switch (value) {
      case value:
        alert(`Hello ${value}`);
        break;

      default:
        break;
    }
  }
}

function Main(params) {
  return (
    <>
      <main>
        <div>
          <button onClick={handleClick}> How can I help you?</button>
        </div>

        <div onClick={event => greeting(event)}>
          <button>Arya</button>
          <button>John</button>
          <button>Bran</button>
        </div>
      </main>
    </>
  );
}

export default Main;
