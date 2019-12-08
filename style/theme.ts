const theme = {
  background_color: "#F1F5FB",
  text_color: "#141414",
  black_yellow: "#141414",
  black_white: "#141414",
  white_black: "#FFFFFF",
  white_gray: "#FFFFFF",
  black: "#141414",
  black_lightgray: "#141414",
  bluegray_darkblue: "#F1F5FB",
  thin_gray: "#757575",
  blue_gray: "#F1F5FB",
  light_gray: "#D7D7D7",
  dark_blue: "#1b2733",
  blue: "#3897f0",
  link_color: "#0557A5",
  brighten_blue: "#51EEFF",
  orange: "#FCB532",
  gradient: "linear-gradient(180deg, #dff4f2 30%, white 100%)"
};
export type ThemeType = {
  [key in keyof typeof theme]: string;
};
export default theme;
