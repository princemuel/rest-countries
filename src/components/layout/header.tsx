import { Text, ThemeBtn } from '../atoms';

type Props = {};

const Header = (props: Props) => {
  return (
    <header className='shadow-header'>
      <div className='flex items-center justify-between py-8 h-container'>
        <Text as='h1' className='text-4xl font-extrabold text-primary-300'>
          Where in the world?
        </Text>
        <ThemeBtn classname='' />
      </div>
    </header>
  );
};

export { Header };
