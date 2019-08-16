import * as styledComponents from "styled-components";

interface IThemeInterface {
  black: string;
  blueGray: string;
  softGray: string;
  blue: string;
}

const {
  default: styled,
  css,
  createGlobalStyle,
  keyframes,
  ThemeProvider
} = styledComponents as styledComponents.ThemedStyledComponentsModule<IThemeInterface>;

export { css, createGlobalStyle, keyframes, ThemeProvider };
export default styled;
