import Button from 'shared/src/lib/button';
import { WRAPPER } from './elements';
import { ThemeChangerProps } from './interface';


export function ThemeChanger({ onToggleTheme, theme }: ThemeChangerProps) {
  const newTheme = theme === "dark"? "light": "dark";
  return (
    <WRAPPER>
      <Button size="small" text={`${theme === "dark" ? " ACIK" : "KOYU"} TEMA'YI KULLAN`} onClick={() => onToggleTheme(newTheme)}></Button>
    </WRAPPER>
  );
}

export default ThemeChanger;
