import './form.css';
import { useState } from 'react';
const FormInput = (props)=>{
    const submitHandler= (event)=>{
        event.preventDefault();

        const newObj ={
            id:Math.random(),
            name:name,
            mail:email
        }
        props.ongetData(newObj);
        setEmail('');
        setName('');



    }
const[name,setName] = useState('');
    const nameChangeHandler =(e)=>{
        setName(e.target.value);

    }

    const[email,setEmail] = useState('');
    const emailChangeHandler =(e)=>{
        setEmail(e.target.value);

    }
    return(
        <div className="main_container">
            <form  onSubmit={submitHandler}>
                <label className="name">NAME</label>
                <input type="text"  className="input_field" value={name} onChange={nameChangeHandler}/>
                <label className="name">EMAIL</label>
                <input type="email" name="" id="" value={email} className="input_field" onChange={emailChangeHandler}/>
                <button type="submit">Submit</button>

            </form>
        </div>

    );
}

export default FormInput;