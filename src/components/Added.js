import React from 'react'
import {Link, useNavigate} from 'react-router-dom';
import Cricketers from './Cricketers';
import './added.css';


export default function Added() {
  let history=useNavigate();
  history('/');

  return (
    <div className='background'>
    <h1>Personal Information</h1>
    <div className='tablecard'>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>RollNo</th>
            <th>Email</th>
          </tr>

        </thead>
        <tbody>
          {
            Cricketers.map((item)=>{
              return(
                <tr >
                  <td>{item.b}</td>
                  <td>{item.a}</td>
                  <td>{item.c}</td>
                  <td>{item.d}</td>
                </tr>
              )
            }
            )
          }
        </tbody>
      </table>
      </div>

    </div>
  )
}

