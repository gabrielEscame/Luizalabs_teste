import React, {useState, useCallback} from 'react';
import api from '../service/';
import Search from '../components/Search';
import Result from '../components/Result';
import Nav from '../components/Nav';

function App(props) {
  const [adress, setAdress] = useState([]);
  const [value, setValue] = useState('');
  const [alert, setAlert] = useState('');

  const onChange = useCallback((e) => {
    let {value} = e.target;
    const filter = /^\d{1,8}$/;
    if(value === '' || filter.test(value)){
      setValue(e.target.value)
    }
  }, [])

  const onClick = useCallback(() => {
    if(!value){
      setAdress([]);
      setAlert('insert zipcode');
    } else {
      api.get(`${value}/json/?callback=zipCode`)
      .then(response => {
        if(response.data.erro){
          setAlert('not found...')
          setAdress([])
        } else{
          setAlert('');
          setAdress(response.data)
        }
      })
      .catch(err => {
        console.log(err);
        setAdress('')
        setAlert(`${value} is not a valid zip code. Please double-cheack it and try again.`)
      }) 
    }
  }, [value])

  console.log(adress); 
  console.log(alert) 
  return (
    <>
    <Nav />
    <Search placeholder='xxxxx-xxx' value={value} type='text' method={onChange} onClick={() => onClick()}/> 
    <Result alert={alert} locality={adress.localidade} publicPlace={adress.logradouro} uf={adress.uf} neighborhood={adress.bairro} />

    </>
  );
}

export default App;