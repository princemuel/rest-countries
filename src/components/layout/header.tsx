import { Text, ThemeBtn } from '../atoms';

type Props = {};

const Header = (props: Props) => {
  return (
    <header className='bg-neutral-100 shadow-header dark:bg-primary-500'>
      <div className='flex items-center justify-between py-12 h-container'>
        <Text as='h1' className='text-[1.6rem] font-extrabold md:text-4xl'>
          Where in the world?
        </Text>
        <ThemeBtn classname='' />
      </div>
    </header>
  );
};

export { Header };
