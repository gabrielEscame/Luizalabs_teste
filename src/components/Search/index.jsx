import React from 'react';
import './style.css';

const Search = ({placeholder, type, method, value, onClick})=> {
  return(
    <>
    <div className='search-container'>
    <h1>Find adress</h1>
    <p>To find your adress just enter your zipCode in this field below.</p>
    <h3>Enter your <span className='search-zipcode-bold'>zipCode</span></h3>
    <input type={type} placeholder={placeholder} onChange={method} value={value}/>
    <button onClick={onClick} type='submit' >Search</button>
    </div>
    </>
  )
}

export default Search;