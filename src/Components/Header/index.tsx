import { FaSun, FaMoon } from "react-icons/fa";
import { useTheme } from "../../Context/ThemeContext";

export function Header() {
  const { handleToggleTheme, theme } = useTheme();

  return (
    <header className="w-full h-20 px-10 mb-5 flex items-center justify-between text-xl text-zinc-600 dark:text-zinc-200 dark:bg-transparent transition-all duration-300 ">
      <span>All Tasks</span>
      <div>
        {theme ? (
          <FaSun
            fontSize={32}
            className="cursor-pointer text-zinc-400 "
            onClick={handleToggleTheme}
          />
        ) : (
          <FaMoon
            fontSize={32}
            className="cursor-pointer text-zinc-700 "
            onClick={handleToggleTheme}
          />
        )}
      </div>
    </header>
  );
}
