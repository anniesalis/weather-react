import React, { useState, } from 'react';
import axios from 'axios';
import './Weather.css';
import 'bootstrap/dist/css/bootstrap.min.css';


export default function Weather() {
  
          return (
            
        <div className='weather'>
          <form>
            <div className='row'>
              <div className='col-9'>
            <input type='search'
             placeholder='Enter a City'
             required className='form-control'
             autoFocus='on'
             />
             </div>
             <div className='col-3'>

            <input type='submit' value='search' className='btn btn-primary w-100' />
            
            </div>
            </div>
         
         </form>


           <h1>Porto</h1>
             <ul>
                           <li>
                Wednesday 07:00
              </li>
              <li>
              Mostly Cloudy
              </li>

             </ul>
          
          <div className='row'>
            <div className='col-6'> 
            <img src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"  alt="weather icon"/> 
            {" "}  <span className='temperature'>7 </span>°C | ºF
              </div>
              
              
              
              
              <div className='col-6'>
                <ul>
                  <li>
                    Precipitation: 15%
                  </li>
                  <li>
                    Humidity: 72%
                  </li>
                  <li>
                    Wind: 13kmh%
                  </li>
                </ul>
              
                </div>
                
              
              </div>
              </div>
              
              
);
}