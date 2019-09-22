import * as styledComponents from "styled-components";

interface IThemeInterface {
  background_color: string;
  text_color: string;
  black_yellow: string;
  black_white: string;
  black: string;
  thin_gray: string;
  blue_gray: string;
  light_gray: string;
  blue: string;
  orange: string;
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
