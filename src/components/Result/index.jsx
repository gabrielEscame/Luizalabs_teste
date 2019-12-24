import React from 'react';
import WrappedMap from '../Map'
import './style.css'

const Result = ({ locality, publicPlace, uf, neighborhood }) => {
  return (
    <div className='result-container'>
      <table>
        <thead>
          <tr>
            <th>Public Place</th>
            <th>neighhborhood</th>
            <th>locality</th>
            <th>uf</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{publicPlace}</td>
            <td>{neighborhood}</td>
            <td>{locality}</td>
            <td>{uf}</td>
          </tr>
        </tbody>
      </table>
      <div className="map-container">
        <WrappedMap
          className='map'
          googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${process.env.REACT_APP_MAPS_KEY}`}
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div style={{ height: `50vh`, width: '50vw', marginTop:'20px'}} />}
          mapElement={<div style={{ height: `250px` }} />}
          publicPlace={publicPlace}
        />
      </div>
    </div>
  );
}

export default Result;