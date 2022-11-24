/** @format */

import Button from "./Button";
import Color from "../data/colors.json";

let blue = Color.blue;
let cyan = Color.cyan;
let grape = Color.grape;
let gray = Color.gray;
let green = Color.green;
let indigo = Color.indigo;
let lime = Color.lime;
let orange = Color.orange;
let pink = Color.pink;
let red = Color.red;
let teal = Color.teal;
let violet = Color.violet;
let yellow = Color.yellow;

let colors = [
  blue,
  cyan,
  grape,
  gray,
  green,
  indigo,
  lime,
  orange,
  pink,
  red,
  teal,
  violet,
  yellow,
];

let colorName = [
  `Blue`,
  `Cyan`,
  `Grape`,
  `Gray`,
  `Green`,
  `Indigo`,
  `Lime`,
  `Orange`,
  `Pink`,
  `Red`,
  `Teal`,
  `Violet`,
  `Yellow`,
];
let numberCode = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900];

function ButtonContainer() {
  return (
    <>
      {colors.map((colorArray, i) => {
        return (
          <div key={colorArray} className="colorContainer">
            <h2 style={{ color: `${colorName[i]}` }}>{colorName[i]}</h2>
            {colorArray.map((color, j) => {
              return <Button key={color} color={color} count={numberCode[j]} />;
            })}
          </div>
        );
      })}
    </>
  );
}

export default ButtonContainer;
