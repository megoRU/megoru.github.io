import { useTheme } from '../hooks/useTheme';
import { Sun, Moon, Monitor } from 'lucide-react';
import { motion } from 'framer-motion';

export const Header = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="py-10 px-6 max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="text-center md:text-left"
      >
        <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-[var(--heading-color)]">
          Привет, я mego!
        </h1>
        <p className="mt-2 text-xl md:text-2xl font-medium text-[var(--description-color)]">
          Java Backend Developer
        </p>
      </motion.div>

      <div className="flex items-center gap-6">
        <a
          href="https://github.com/megoRU"
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 rounded-full hover:bg-[var(--switcher-hover-bg)] transition-colors duration-200"
        >
          <svg className="w-7 h-7 text-[var(--heading-color)]" viewBox="0 0 16 16" fill="currentColor">
            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
          </svg>
        </a>

        <button
          onClick={toggleTheme}
          className="p-3 rounded-full hover:bg-[var(--switcher-hover-bg)] transition-colors duration-200 relative w-12 h-12 flex items-center justify-center"
          title="Toggle theme"
        >
          {theme === 'light' && <Sun className="w-6 h-6 text-[var(--heading-color)]" />}
          {theme === 'dark' && <Moon className="w-6 h-6 text-[var(--heading-color)]" />}
          {theme === 'auto' && <Monitor className="w-6 h-6 text-[var(--heading-color)]" />}
        </button>
      </div>
    </header>
  );
};
