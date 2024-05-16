import React from 'react';
import { NavbarStyled } from './Navbar.styled';

export const Navbar = () => {
  return (
    <NavbarStyled>
      <button type="button">Add New DIV</button>
      <div>
        <label htmlFor="width">width:</label>
        <input id="width" type="text" placeholder="100px" />
        <label htmlFor="height">height:</label>
        <input id="height" type="text" placeholder="100px" />
      </div>
    </NavbarStyled>
  );
};
