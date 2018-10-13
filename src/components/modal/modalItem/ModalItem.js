import React from 'react';
import './ModalItem.css';

const modalItem = (props) => {
  const picture = `assets/${props.image}`;
  console.log(props.id)
  return (
    <div>
    <li className='modalFlex'>
      <button className='minusButton' onClick={props.deleteItem}
        value={props.id} ><i className="fas fa-minus-circle minusLogo" value={props.id}
        ></i></button>
      <div className='modalLayout'>
        <img className='img-lay' src={picture} alt='' />
        <span>{props.name}</span>
        <span>{props.price} €</span>
      </div>
    </li>
    <hr/>
    </div>
  )
}

export default modalItem;
