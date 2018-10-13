import React from 'react';
import './Navigation.css';


const navigation = (props) => {
  return (
    <div className='navigationLayout'>
      <fieldset>
      <legend>Brands</legend>

      <div>
          <input type="checkbox" id="apple" name="feature"
                 value="apple" onChange={props.handleChange}/>Apple
      </div>
      <div>
          <input type="checkbox" id="samsung" name="feature"
                 value="samsung" onChange={props.handleChange}/>Samsung
      </div>
      <div>
          <input type="checkbox" id="nokia" name="feature"
                 value="nokia" onChange={props.handleChange}/>Nokia
      </div>
      <div>
          <input type="checkbox" id="google" name="feature"
                 value="google" onChange={props.handleChange}/>Google
      </div>
      <div>
          <input type="checkbox" id="xiaomi" name="feature"
                 value="xiaomi" onChange={props.handleChange}/>Xiaomi
      </div>
      </fieldset>

      {props.children}
    </div>
  )
}

export default navigation;
