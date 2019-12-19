import React, {useState, useEffect, useCallback} from 'react';
import api from './service/';
import Search from './components/Search';
import Button from './components/Button'

function App(props) {
  const [adress, setAdress] = useState([]);
  const [value, setValue] = useState('');

  useEffect(()=> {
    api.get('03410030/json/?callback=zipCode')
     .then(response => setAdress(response.data))
     .catch(err => console.log(err)) 
  }, [])

  const onChange = useCallback((e) => {
    let {value} = e.target
    const filter = /^\d{1,8}$/;
    if(value === '' || filter.test(value)){
      setValue(e.target.value)
    }
  }, [])

  console.log(adress);  
  return (
    <>
    <Search placeholder='search a zipCode' value={value} type='text' method={onChange}/> 
    <Button label='Search' onClick={() => console.log('oi')} />
    <div className="App">
      {adress.logradouro}
    </div>
    </>
  );
}

export default App;
