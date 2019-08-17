import React from 'react';
import { Button } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';
import { Container, Nav, StyledNavLink, NavItem } from './styles';

const Header = () => (
  <Container>
    <Nav>
      <NavItem>
        <StyledNavLink to="/">Products</StyledNavLink>
      </NavItem>
      <NavItem>
        <NavLink to="/cart">
          <Button primary icon="shopping cart" />
        </NavLink>
      </NavItem>
    </Nav>
  </Container>
);
export default Header;
