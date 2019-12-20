import React, {useState, useCallback} from 'react';
import api from './service/';
import Search from './components/Search';
import Button from './components/Button'

function App(props) {
  const [adress, setAdress] = useState([]);
  const [value, setValue] = useState();
  const [alert, setAlert] = useState('');

  const onChange = useCallback((e) => {
    e.preventDefault();
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
        } else{
          setAlert('');
          setAdress(response.data)
        }
      })
      .catch(err => console.log(err)) 
    }
  })

  console.log(adress); 
  console.log(alert) 
  return (
    <>
    <Search placeholder='search a zipCode' value={value} type='text' method={onChange}/> 
    <Button label='Search' onClick={() => onClick()} />
    <p>{alert}</p>
    <div className="App">
      {adress.logradouro}
    </div>
    </>
  );
}

export default App;
