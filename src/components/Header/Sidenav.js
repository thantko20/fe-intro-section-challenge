import SidenavContent from './SidenavContent';

const Sidenav = ({ isOpen, toggle }) => {
  return (
    <div
      className={`fixed inset-0 w-full h-full z-10 hero-breakpoint:hidden ${
        isOpen ? 'visible' : 'invisible'
      }`}
    >
      <button
        onClick={toggle}
        className='absolute w-full h-full bg-black/20'
        aria-label='close sidenav'
      ></button>
      <SidenavContent isOpen={isOpen} toggle={toggle} />
    </div>
  );
};

export default Sidenav;
