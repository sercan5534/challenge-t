import { Theme } from "shared/src/types/Theme";

/* eslint-disable-next-line */
export interface ThemeChangerProps {
    onToggleTheme: (theme:Theme) => void,
    theme: string
}
