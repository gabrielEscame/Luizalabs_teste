import React from 'react';

const Search = ({placeholder, type, method})=> {
  return(
    <input type={type} placeholder={placeholder} onChange={method} maxLength={8}/>
  )
}

export default Search;