// import { BasicInputProps } from "../../RegisterForm/types";
import { CheckBoxInput, CheckBoxLabel, CheckBoxWrapper } from "./styled";

function Checkbox({ name, label }: any) {
  return (
    <CheckBoxWrapper>
      <CheckBoxInput type="checkbox" name={name} />
      <CheckBoxLabel>{label}</CheckBoxLabel>
    </CheckBoxWrapper>
  );
}

export default Checkbox;
