//defining theme params
export type themeParams = {
  isDark: boolean;
  primary: string;
  secondary: string;
  textColor: string;
};

export type themeProps = {
  theme: themeParams;
};

//adding type of themes we have
export enum themeName {
  DARK = "dark",
  LIGHT = "light",
}

// light theme
export const lightTheme: themeParams = {
  isDark: false,
  primary: "#fbfbfb",
  secondary: "#fff",
  textColor: "#3e3e3e",
};

// dark theme
export const darkTheme: themeParams = {
  isDark: true,
  primary: "#222",
  secondary: "#000",
  textColor: "#fdfdfd",
};

// get theme config form theme name
export function getTheme(
  theme: themeName = themeName.LIGHT
): themeParams {
  switch (theme) {
    case themeName.DARK:
      return darkTheme;
    default:
      return lightTheme;
  }
}
