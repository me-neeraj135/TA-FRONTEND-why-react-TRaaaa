/** @format */

import data from "../data/data.json";

function fruitName(event) {
  if (event.target.nodeName === "BUTTON") {
    let value = event.target.innerText;

    switch (value) {
      case value:
        alert(value);
        break;

      default:
        break;
    }
  }
}

function Fruits() {
  return (
    <>
      <div onClick={fruitName}>
        {data.map(elm => {
          return <Fruit key={elm.id} {...elm} />;
        })}
      </div>
    </>
  );
}

function Fruit(props) {
  return (
    <>
      <button>{props.value}</button>
    </>
  );
}

export default Fruits;
