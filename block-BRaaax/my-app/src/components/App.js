/** @format */

import "../style/App.css";
import Button from "./Button";

import { ButtonSizes, ButtonTypes } from "./ButtonInfo";

function App() {
  return (
    <>
      <Button label="click Me" size={ButtonSizes.SMALL} />
      <Button label="click Me" type="tertiary" size="large" />

      <Button
        label="click Me"
        type={ButtonTypes.SECONDARY}
        size={ButtonSizes.MEDIUM}
      />
      <Button label="click Me" type={ButtonTypes.PRIMARY} size="large" />
      <Button label="click Me" type={ButtonTypes.TERTIARY} />
      <Button type={ButtonTypes.SECONDARY} size={ButtonSizes.LARGE} />
      <Button type={ButtonTypes.SECONDARY} size="large" />
      <Button type="tertiary" size="small" />

      <Button
        onClickHandler={() => alert(`you clicked me`)}
        ype="tertiary"
        size="large"
      />
      <Button size="large" disabled />
    </>
  );
}

export default App;
