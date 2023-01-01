import { Text, ThemeBtn } from '../atoms';

type Props = {};

const Header = (props: Props) => {
  return (
    <header className='sticky top-0 z-50 bg-neutral-100 shadow-header dark:bg-primary-500'>
      <div className='flex items-center justify-between py-12 h-container'>
        <Text variant='h1' className='text-[1.6rem] font-extrabold md:text-4xl'>
          Where in the world?
        </Text>
        <ThemeBtn classname='' />
      </div>
    </header>
  );
};

export { Header };
