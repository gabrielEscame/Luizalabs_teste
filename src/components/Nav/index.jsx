import React from 'react';
import './style.css';

const Nav = () => {
  return(
    <nav>
      <img src={process.env.PUBLIC_URL + 'findzip.png'} alt="logo"/>
      <ul>
        <li><a href="https://www.google.com.br/">Home</a></li>
        <li><a href="https://www.google.com.br/">About</a></li>
        <li><a href="https://www.google.com.br/">Contacts</a></li>
      </ul>
    </nav>
  );
}

export default Nav;