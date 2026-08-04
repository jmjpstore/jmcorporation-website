import React, { createContext, useContext, useState, useEffect } from 'react';

export type ThemeMode = 'bright' | 'classic';

interface ThemeContextType {
  theme: ThemeMode;
  setTheme: (theme: ThemeMode) => void;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType>({
  theme: 'classic',
  setTheme: () => {},
  toggleTheme: () => {},
});

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setThemeState] = useState<ThemeMode>('classic');

  const setTheme = (newTheme: ThemeMode) => {
    setThemeState(newTheme);
    localStorage.setItem('jm_corp_theme', newTheme);
  };

  const toggleTheme = () => {
    const nextTheme = theme === 'bright' ? 'classic' : 'bright';
    setTheme(nextTheme);
  };

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme, toggleTheme }}>
      <div className={theme === 'bright' ? 'theme-bright bg-slate-50 text-slate-800 transition-colors duration-300' : 'theme-classic bg-slate-950 text-white transition-colors duration-300'}>
        {children}
      </div>
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
