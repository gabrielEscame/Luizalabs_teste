import React from 'react';
import './style.css';

const Nav = () => {
  return(
    <nav>
      <img src={process.env.PUBLIC_URL + 'findzip.png'} alt="logo"/>
      <ul>
        <li><a href="https://www.google.com.br/"></a>Home</li>
        <li><a href="https://www.google.com.br/"></a>About</li>
        <li><a href="https://www.google.com.br/"></a>Contacts</li>
      </ul>
    </nav>
  );
}

export default Nav;