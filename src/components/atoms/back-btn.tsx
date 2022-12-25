import { Link } from 'react-router-dom';
import { useTheme } from '../../context';

type Props = {};

const BackBtn = (props: Props) => {
  const theme = useTheme();
  const url = theme === 'light' ? 'light' : 'dark';

  return (
    <Link
      className='inline-flex items-center gap-4 rounded bg-neutral-100 px-12 py-2 text-[1.4rem] capitalize shadow-back dark:bg-primary-500'
      to={'/'}
    >
      <img src={`/assets/arrow-${url}.svg`} alt='back' />
      <span>Back</span>
    </Link>
  );
};

export { BackBtn };
