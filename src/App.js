
import FormInput from './form';
import './App.css';
import { useState } from 'react';
import FormList from './FormLists';

function App() {
  const[newObj,setnewObj] = useState([]);
  const dataHandler =(data)=>{
    setnewObj((previousData)=>[
      ...previousData,data
    ])
  }
  return (
    <>

    <FormInput ongetData={dataHandler} />
    {newObj.map(e=><FormList data={newObj}  key={e.id} name={e.name}  mail={e.mail} />)}
    </>
    
      
     
    
  );
}

export default App;
