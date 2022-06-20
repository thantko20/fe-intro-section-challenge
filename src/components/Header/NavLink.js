const NavLink = ({ children }) => {
  return (
    <li className='text-neutral-gray flex items-center font-medium cursor-pointer hover:text-neutral-black'>
      {children}
    </li>
  );
};

export default NavLink;
