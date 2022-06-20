import { useState } from 'react';
import icons from '../../icons';
import Button from '../Button';
import Container from '../Container';
import Logo from './Logo';
import Nav from './Nav';
import Sidenav from './Sidenav';

const HeaderCTA = () => {
  return (
    <div className='hidden hero-breakpoint:flex items-center gap-4'>
      <Button variant='tertiary'>Login</Button>
      <Button variant='secondary'>Register</Button>
    </div>
  );
};

const Header = () => {
  const [isSidenavOpen, setIsSidenavOpen] = useState(false);

  const toggleSidenav = () => setIsSidenavOpen((prev) => !prev);

  return (
    <header className='w-full bg-transparent px-2'>
      <Container>
        <div className='py-6 flex justify-between items-center'>
          <div className='flex gap-8 lg:gap-16'>
            <Logo />
            <Nav />
          </div>
          <div className='flex items-center'>
            <HeaderCTA />
            <button
              onClick={toggleSidenav}
              className='flex items-center justify-center hero-breakpoint:hidden w-12 h-12 rounded-full hover:bg-gray-500/10 focus:outline-none focus:ring-2 ring-black/40'
            >
              {icons.menu}
            </button>
          </div>
        </div>
      </Container>
      <Sidenav isOpen={isSidenavOpen} toggle={toggleSidenav} />
    </header>
  );
};

export default Header;
