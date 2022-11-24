/** @format */

function Button(props) {
  function getStyle() {
    let { type = "primary", size = "medium" } = props;
    return `button  ${type} ${size}`;
  }
  return (
    <button
      onClick={props.onClickHandler}
      className={getStyle()}
      disabled={props.disabled}
    >
      {props.label || "button"}
    </button>
  );
}

export default Button;
