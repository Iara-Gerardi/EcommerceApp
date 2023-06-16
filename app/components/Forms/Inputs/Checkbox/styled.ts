import {Field} from 'formik';
import styled from 'styled-components/native';
// import { Colors } from "../../../Constants/colors";
const Colors = {
  white: '',
  black: '',
  spotifyGreen: '',
};

export const CheckBoxWrapper = styled.View`
  display: flex;
  margin-top: 20px;
  align-items: top;
  justify-content: left;
`;

export const CheckBoxLabel = styled.Text`
  font-weight: 500;
  font-size: small;
  padding: 0 7px;
  display: flex;
  align-items: center;
`;

export const CheckBoxInput = styled(Field)`
  height: 16px;
  width: 17px;
  color: ${Colors.white};
  appearance: none;
  border-radius: 2px;
  border: 1px solid ${Colors.black};

  :hover {
    cursor: pointer;
    border: 1px solid ${Colors.spotifyGreen};
  }

  :checked {
    background: ${Colors.spotifyGreen};
    color: ${Colors.white};
    border-radius: 2px;
    border: 1px solid ${Colors.spotifyGreen};
  }

  :active:before {
    content: '';
    width: 12px;
    padding: 5px;
    height: 12px;
    display: block;
    border-radius: 4px;
    border: 2px ${Colors.black}solid;
    position: relative;
    bottom: 5.7px;
    right: 5.7px;
  }

  :after {
    content: '';
    position: relative;
    left: 40%;
    top: 20%;
    width: 15%;
    height: 40%;
    border: solid #fff;
    border-width: 0 2px 2px 0;
    transform: rotate(50deg);
    display: none;
    border-radius: 2px;
  }

  :checked:after {
    display: block;
  }
`;
