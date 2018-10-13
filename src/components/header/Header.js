import React from 'react';
import './Header.css';
import Modal from '../modal/Modal';

const header = (props) => {
  return (
    <div>
      <div className='headerLayout'>
        <a href='/'><span className='logo'>Smartphones</span></a>
        <Modal cart={props.cart} deleteItem={props.deleteItem}/>
      </div>
    </div>
  )
};

export default header;
