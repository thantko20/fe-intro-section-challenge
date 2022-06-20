import icons from '../../icons';

export const CollapsibleItem = ({ itemName, icon }) => {
  return (
    <li className='py-3 px-8 flex gap-4 items-center hover:text-neutral-black'>
      {icon && <i>{icon}</i>}

      <button>{itemName}</button>
    </li>
  );
};

export const CollapsibleContainer = ({ isOpen, children }) => {
  return (
    <ul
      className={`text-neutral-gray py-2 flex flex-col ${
        !isOpen ? 'hidden' : ''
      }`}
    >
      {children}
    </ul>
  );
};

export const SidenavLinkCollapsible = ({
  linkName,
  children,
  isOpen,
  toggle,
}) => {
  return (
    <div className='relative'>
      <button
        className={`flex items-center gap-2 ${
          isOpen ? 'text-neutral-black' : ''
        }`}
        onClick={toggle}
      >
        <span>{linkName}</span>
        <i>
          {isOpen && icons.arrowUp}
          {!isOpen && icons.arrowDown}
        </i>
      </button>
      {children}
    </div>
  );
};
