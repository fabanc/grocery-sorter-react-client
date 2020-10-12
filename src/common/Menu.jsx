import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  // NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  // UncontrolledDropdown,
  // DropdownMenu,
  // DropdownItem,
} from 'reactstrap';
import { NavLink as RRNavLink } from 'react-router-dom';
// import logo from './logo.svg';
// import ToggleMenu from './ToggleMenu';
// import DarkModeButton from './DarkModeButton';


export default function Menu() {
  const [isOpen, setIsOpen] = React.useState(false);

  function toggle() {
    setIsOpen(!isOpen);
  }

  return (
    <div className='mb-4'>
        <Navbar color='dark' dark expand='md'>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav navbar>
          <NavItem>
              <NavLink tag={RRNavLink} to='/' exact>
                Home
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={RRNavLink} to='/groceryList' exact>
                Select your Grocery
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={RRNavLink} to='/about'>
                    About
              </NavLink>
            </NavItem>
            </Nav>
        </Collapse>
        </Navbar>    
    </div>
  );
}
