import React, {useState, useEffect} from 'react';
import {GoogleMap, withScriptjs, withGoogleMap, Marker} from 'react-google-maps'
import Geocode from 'react-geocode';

Geocode.setApiKey('AIzaSyD_IJS-_ZkNbU2cCbXcQZwv1xxkE_VjNUA');
Geocode.setLanguage('en');
Geocode.setRegion('br');

const Map = (publicPlace) => {
  const [lat, setLat] = useState(-23.533773);
  const [lng, setLng] = useState(-46.625290);

  useEffect(()=>{
    Geocode.fromAddress(publicPlace.publicPlace)
      .then(response => {
        const {lat, lng} = response.results[0].geometry.location;
        setLat(lat);
        setLng(lng)
      },
      error => {
        console.log(error);
      })
  }, [publicPlace])

    console.log(publicPlace);
  return(
    <GoogleMap defaultZoom={10} defaultCenter={{ lat: lat,  lng: lng}}>
      <Marker position={{ lat: lat, lng: lng }}/>
    </GoogleMap>
  );
}

const WrappedMap = withScriptjs(withGoogleMap(Map));

export default WrappedMap;