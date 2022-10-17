import React, { useState } from 'react'
import Cricketers from './Cricketers';
import './Form.css';
import { Link, useNavigate } from 'react-router-dom';


export default function Form() {
  const [Age, setage] = useState('');
  const [Name, setname] = useState('');
  const [RollNo, setroll] = useState('');
  const [Email, setEmail] = useState('');

  let history = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    let a = RollNo, b = Name, c = Age , d=Email;
    Cricketers.push({ a, b, c ,d});
    // console.log(Cricketers);
    history('/added');


  }

  return (
    <div>
      <h1>Place Your Order</h1>
      <form className='container'>
        
        <label >Name</label><br></br>
        <input type="text" placeholder='Enter Your Name' onChange={(e) => setroll(e.target.value)} required></input><br></br>
        <label>Dish Name</label><br></br>
        <input type="text"   placeholder='Enter Name' onChange={(e) => setname(e.target.value)} required></input><br></br>
        <label>Quantity</label><br></br>
        <input type="number"   placeholder='Enter Quantiy' onChange={(e) => setage(e.target.value)} required></input><br></br>
        <label >Beverage</label><br />
                <input type="text"
                    placeholder='Enter Beverage'
                    onChange={(e) => setEmail(e.target.value)}
                    required>
                </input>
                <br />
        <Link to='/added'>
          <input className='btn' type="submit" onClick={handleSubmit}></input>
        </Link>

      </form>


    </div>
  )
}
