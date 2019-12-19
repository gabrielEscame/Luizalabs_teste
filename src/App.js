import React, {useState, useEffect} from 'react';
import api from './service/';
import Search from './components/Search';
import Button from './components/Button'

function App(props) {
  const [adress, setAdress] = useState([]);

  useEffect(()=> {
    api.get('03410030/json/?callback=zipCode')
     .then(response => setAdress(response.data))
     .catch(err => console.log(err)) 
  }, [])

  console.log(adress);  
  return (
    <>
    <Search placeholder='search a zipCode' type='number' /> 
    <Button label='Search' onClick={() => console.log('oi')} />
    <div className="App">
      {adress.logradouro}
    </div>
    </>
  );
}

export default App;
