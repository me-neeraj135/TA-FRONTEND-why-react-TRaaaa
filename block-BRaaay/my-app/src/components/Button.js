/** @format */

function Button(props) {
  //   console.log(props.color);
  return (
    <div className="colorBox">
      <div
        style={{ backgroundColor: `${props.color}` }}
        className="color"
      ></div>
      <p>
        <span className="numberCode"> {props.count}</span>
        <span className="colorCode">{props.color}</span>
      </p>
    </div>
  );
}

export default Button;
