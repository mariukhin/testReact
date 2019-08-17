import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  width: 80%;
  margin: 0 auto;
  margin-top: 30px;
  margin-bottom: 30px;
`;

export const Nav = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
`;
export const NavItem = styled.li`
  vertical-align: middle;
  line-height: 38px;
`;
export const Description = styled.p`
  text-align: justify;
  font-size: 16px;
  line-height: 22px;
  margin-bottom: 20px;
`;
export const Price = styled.p`
  text-align: center;
  font-size: 18px;
  margin-bottom: 20px;
`;
export const StyledNavLink = styled(NavLink)`
  font-size: 18px;
  line-height: 18px;
  font-weight: 600;
`;
