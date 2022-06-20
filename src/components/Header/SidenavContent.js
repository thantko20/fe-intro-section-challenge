import { useState } from 'react';
import icons from '../../icons';
import Button from '../Button';
import {
  SidenavLinkCollapsible,
  CollapsibleContainer,
  CollapsibleItem,
} from './SIdenavLinkCollapsible';

const SidenavLink = ({ children, icon }) => {
  return (
    <li className='text-neutral-gray flex items-center font-medium cursor-pointer hover:text-neutral-black'>
      {children}
    </li>
  );
};

const FeaturesCollapsible = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen((prev) => !prev);

  return (
    <SidenavLinkCollapsible linkName='Features' isOpen={isOpen} toggle={toggle}>
      <CollapsibleContainer isOpen={isOpen}>
        <CollapsibleItem itemName='Todolist' icon={icons.todo} />
        <CollapsibleItem itemName='Calendar' icon={icons.calendar} />
        <CollapsibleItem itemName='Reminder' icon={icons.reminder} />
        <CollapsibleItem itemName='Planning' icon={icons.planning} />
      </CollapsibleContainer>
    </SidenavLinkCollapsible>
  );
};

const CompanyCollapsible = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen((prev) => !prev);

  return (
    <SidenavLinkCollapsible linkName='Company' isOpen={isOpen} toggle={toggle}>
      <CollapsibleContainer isOpen={isOpen}>
        <CollapsibleItem itemName='History' />
        <CollapsibleItem itemName='Our&nbsp;Team' />
        <CollapsibleItem itemName='Blog' />
      </CollapsibleContainer>
    </SidenavLinkCollapsible>
  );
};

const SidenavContent = ({ isOpen, toggle }) => {
  return (
    <div
      className={`absolute flex flex-col text-neutral-gray py-8 px-6 min-w-[240px] h-full top-0 right-0 bg-white transform transition-transform ${
        isOpen ? '' : 'translate-x-full'
      }`}
    >
      <button onClick={toggle} className='ml-auto hover:text-neutral-black'>
        {icons.close}
      </button>

      <nav className='mt-10 flex flex-col gap-8'>
        <SidenavLink>
          <FeaturesCollapsible />
        </SidenavLink>
        <SidenavLink>
          <CompanyCollapsible />
        </SidenavLink>
        <SidenavLink>Career</SidenavLink>
        <SidenavLink>About</SidenavLink>
      </nav>
      <div className='flex flex-col mt-10 items-stretch'>
        <Button variant='tertiary'>Login</Button>
        <Button variant='secondary'>Register</Button>
      </div>
    </div>
  );
};

export default SidenavContent;
