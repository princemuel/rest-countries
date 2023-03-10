import * as React from 'react';
import { ContextFactory } from './context-factory';
import { ContextKeys } from './context-keys';

type ThemeMode = 'dark' | 'light';
type IThemeContext = ReturnType<typeof useDarkMode>[0] | null;
type ISetThemeContext = ReturnType<typeof useDarkMode>[1] | null;

const ThemeContext = ContextFactory.createContext<IThemeContext>(
  ContextKeys.THEMESTATE
);

const SetThemeContext = ContextFactory.createContext<ISetThemeContext>(
  ContextKeys.THEMEDISPATCH
);
type Props = {
  children: React.ReactNode;
};

const ThemeProvider = ({ children }: Props) => {
  const [mode, setMode] = useDarkMode();

  const modeValue = React.useMemo(() => mode, [mode]);
  const setModeValue = React.useMemo(() => setMode, [setMode]);

  return (
    <ThemeContext.Provider value={modeValue}>
      <SetThemeContext.Provider value={setModeValue}>
        {children}
      </SetThemeContext.Provider>
    </ThemeContext.Provider>
  );
};

const useTheme = () =>
  ContextFactory.useContext<IThemeContext>(ContextKeys.THEMESTATE);

const useSetTheme = () =>
  ContextFactory.useContext<ISetThemeContext>(ContextKeys.THEMEDISPATCH);

// only these 3 exported functions below are for app usage
export { useTheme, useSetTheme, ThemeProvider };

////////////////////////////////////////
////                              /////
//////////////////////////////////////
// This useDarkMode hook is not for use.
// It exists only for the theme provider
const preferDarkQuery = '(prefers-color-scheme: dark)';

function useDarkMode() {
  const [mode, setMode] = React.useState<ThemeMode>(() => {
    const value = window.localStorage.getItem('theme-mode');
    if (value) {
      return value === 'dark' ? 'dark' : 'light';
    } else {
      return window.matchMedia(preferDarkQuery).matches ? 'dark' : 'light';
    }
  });

  React.useEffect(() => {
    const mediaQuery = window.matchMedia(preferDarkQuery);

    const handleChange = () => {
      setMode(mediaQuery.matches ? 'dark' : 'light');
    };

    mediaQuery.addEventListener('change', handleChange);

    return () => {
      mediaQuery.removeEventListener('change', handleChange);
    };
  }, []);

  React.useEffect(() => {
    window.localStorage.setItem('theme-mode', mode);
    document.documentElement.setAttribute('data-theme', mode);
  }, [mode]);

  // we're doing it this way instead of as an effect so we only
  // set the localStorage value if they explicitly change the default
  return [mode, setMode] as const;
}
