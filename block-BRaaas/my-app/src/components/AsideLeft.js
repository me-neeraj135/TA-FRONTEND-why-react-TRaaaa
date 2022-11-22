/** @format */

function handleClick(params) {
  alert(`Hello React Event`);
}

function Aside() {
  return (
    <>
      <div>
        <button onClick={handleClick}>click me</button>
      </div>
    </>
  );
}

export default Aside;
