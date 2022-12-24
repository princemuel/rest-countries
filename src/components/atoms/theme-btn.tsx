import { useSetTheme, useTheme } from '../../context';
import { clsx } from '../../utils';
import { Text } from './text';

type Props = { classname: string };

const ThemeBtn = ({ classname }: Props) => {
  const setTheme = useSetTheme();
  const theme = useTheme();

  return (
    <button
      type='button'
      title='Toggle Theme'
      className={clsx(
        'flex items-center gap-4 text-2xl font-semibold capitalize text-primary-300',
        classname && classname
      )}
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
    >
      <span></span>
      <Text>{theme} mode</Text>
    </button>
  );
};

export { ThemeBtn };
