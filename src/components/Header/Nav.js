import { useState } from 'react';
import NavLink from './NavLink';
import {
  NavLinkDropDown,
  DropDownContainer,
  DropDownItem,
} from './NavLinkDropDown';
import icons from '../../icons';

const FeaturesDropDown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen((prev) => !prev);

  return (
    <NavLinkDropDown linkName='Features' isOpen={isOpen} toggle={toggle}>
      <DropDownContainer isOpen={isOpen} placement='right'>
        <DropDownItem itemName='Todolist' icon={icons.todo} />
        <DropDownItem itemName='Calendar' icon={icons.calendar} />
        <DropDownItem itemName='Reminder' icon={icons.reminder} />
        <DropDownItem itemName='Planning' icon={icons.planning} />
      </DropDownContainer>
    </NavLinkDropDown>
  );
};

const CompanyDropDown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen((prev) => !prev);

  return (
    <NavLinkDropDown linkName='Company' isOpen={isOpen} toggle={toggle}>
      <DropDownContainer isOpen={isOpen} placement='left'>
        <DropDownItem itemName='History' />
        <DropDownItem itemName='Our&nbsp;Team' />
        <DropDownItem itemName='Blog' />
      </DropDownContainer>
    </NavLinkDropDown>
  );
};

const Nav = () => {
  return (
    <nav className='hidden hero-breakpoint:block'>
      <ul className='flex gap-10'>
        <NavLink>
          <FeaturesDropDown />
        </NavLink>
        <NavLink>
          <CompanyDropDown />
        </NavLink>
        <NavLink>Careers</NavLink>
        <NavLink>About</NavLink>
      </ul>
    </nav>
  );
};

export default Nav;
