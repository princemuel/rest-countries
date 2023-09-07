import { Container, ThemeSwitch } from '../atoms';

export function Header() {
  return (
    <header className='sticky top-0 z-50 bg-white shadow-header dark:bg-brand-500'>
      <Container>
        <div className='flex items-center justify-between py-6 '>
          <h1 className='text-base font-extrabold md:text-xl'>
            Where in the world?
          </h1>

          <div className=''>
            <ThemeSwitch />
          </div>
        </div>
      </Container>
    </header>
  );
}
