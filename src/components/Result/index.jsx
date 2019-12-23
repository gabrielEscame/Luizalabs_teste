import React from 'react';

const Result = ({locality, publicPlace, uf, neighborhood}) => {
  return(
    <div>
      <h1>{publicPlace}</h1>
      <h2>{neighborhood}</h2>
      <h3>{locality}</h3>
      <h4>{uf}</h4>
    </div>
  );
}

export default Result;