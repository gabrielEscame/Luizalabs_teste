import React from 'react';
import './style.css'

const Result = ({locality, publicPlace, uf, neighborhood}) => {
  return(
    <div className='result-container'>
      <table>
        <tr>
        <th>Public Place</th>
        <th>neighhborhood</th>
        <th>locality</th>
        <th>uf</th>
        </tr>
        <tr>
          <td>{publicPlace}</td>
          <td>{neighborhood}</td>
          <td>{locality}</td>
          <td>{uf}</td>
        </tr>
      </table>
    </div>
  );
}

export default Result;