import React, {useState, useCallback} from 'react';
import { useAlert } from 'react-alert'
import api from '../service/';
import './style.css'
import Search from '../components/Search';
import Result from '../components/Result';
import Nav from '../components/Nav';

const App = (props)=> {
  const [adress, setAdress] = useState({localidade: 'São Paulo', logradouro: 'Praça da sé', uf:'sp', bairro: 'Sé'});
  const [value, setValue] = useState('');
  const alert = useAlert();

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
      alert.show('insert your zipCode')
    } else {
      api.get(`${value}/json/?callback=zipCode`)
      .then(response => {
        if(response.data.erro){
          alert.show('not found...')
          setAdress([])
        } else{
          setAdress(response.data)
        }
      })
      .catch(err => {
        console.log(err);
        setAdress('')
        alert.show(`${value} is not a valid zip code...`)
      }) 
    }
  }, [value, alert])
  
  return (
    <>
    <Nav />
    <div className='page-container'>
    <Search placeholder='xxxxx-xxx' value={value} type='text' method={onChange} onClick={() => onClick()}/> 
    <Result locality={adress.localidade} publicPlace={adress.logradouro} uf={adress.uf} neighborhood={adress.bairro} />
    </div>
    </>
  );
}

export default App;