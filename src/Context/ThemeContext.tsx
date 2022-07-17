import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

interface ThemeProviderProps {
  children: ReactNode;
}

type ThemeContextData = {
  theme: boolean;
  handleToggleTheme: () => void;
};

const ThemeContext = createContext({} as ThemeContextData);

export function ThemeProvider({ children }: ThemeProviderProps) {
  const [theme, setTheme] = useState(true);

  useEffect(() => {
    const rootElement = document.documentElement;
    const currentTheme = theme;

    const prevTheme = currentTheme ? "dark" : "light";
    rootElement.classList.remove(prevTheme);

    const nextTheme = currentTheme ? "light" : "dark";
    rootElement.classList.add(nextTheme);

    localStorage.setItem("theme", nextTheme);
  }, [theme]);

  function handleToggleTheme() {
    setTheme(!theme);
  }

  return (
    <ThemeContext.Provider value={{ handleToggleTheme, theme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => useContext(ThemeContext);
