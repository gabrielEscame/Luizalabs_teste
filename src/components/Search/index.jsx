import React from 'react';

const Search = ({placeholder, type, method, value})=> {
  return(
    <input type={type} placeholder={placeholder} onChange={method} value={value}/>
  )
}

export default Search;