import styled from 'styled-components/native';
import {ThemeMode} from '../HOC/ThemeProvider/types';

interface Theme {
  theme: ThemeMode;
}
export const HeroWrapper = styled.View`
  ${({theme}: Theme) =>
    `display: flex;
    width: auto;
    height: 150px;
    padding: 10px;
    margin: 10px;
    border-radius: 10px;
    background-color:${theme.primary};`}
`;

export const TextHero = styled.Text`
  ${({theme}: Theme) => `color:${theme.text}; font-size: 40px;`}
`;
