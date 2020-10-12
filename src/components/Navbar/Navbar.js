import React from 'react';
import { Link } from 'react-router-dom';
import {
  NavigationContainer,
  NavigationItem,
  NavigationLink,
}
  from './Navbar.styles';

const Navbar = () => (
  <NavigationContainer>
    <NavigationItem>
      <Link
        to="/profile"
      >
        <NavigationLink>
          Profile
        </NavigationLink>
      </Link>
    </NavigationItem>
    <NavigationItem>
      <Link
        to="/dialogs"
      >
        <NavigationLink>
          Messages
        </NavigationLink>
      </Link>
    </NavigationItem>
    <NavigationItem>
      <Link
        to="/news"
      >
        <NavigationLink>
          News
        </NavigationLink>
      </Link>
    </NavigationItem>
  </NavigationContainer>
);

export default Navbar;
