import clsx from 'clsx';
import { useSetTheme, useTheme } from '../../lib';
import { Text } from './text';

interface Props {
  classname: string;
}

const ThemeBtn = ({ classname }: Props) => {
  const setTheme = useSetTheme();
  const theme = useTheme();

  const url = theme === 'light' ? 'light' : 'dark';

  return (
    <button
      type='button'
      title='Toggle Theme'
      className={clsx(
        'flex items-center gap-4 text-[1.2rem] font-semibold capitalize md:text-2xl',
        classname && classname
      )}
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
    >
      <img src={`/assets/${url}.svg`} alt={theme} aria-hidden />
      <Text>{theme} mode</Text>
    </button>
  );
};

export { ThemeBtn };
