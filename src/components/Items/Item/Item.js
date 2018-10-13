import React from 'react';
import TableData from './tableData/TableData';
import './Item.css';

const item = (props) => {
  const image = `assets/${props.image}`;
  return (
    <div className='itemLayout'>
      {/*<img src={Image} className='item-img' alt='' /> */}
      <img src={image} className='item-img' alt='' />
      <div className='item-description'>
        <span><strong>{props.name}</strong></span>
        <TableData
          dsize={props.dsize}
          dresolution={props.dresolution}
          cresolution={props.cresolution}
          cvideo={props.cvideo}
          ram={props.ram}
          storage={props.storage}
          chip={props.chip}
          battery={props.battery}
        />
        <div className='button-price'>
          <button className='add-cart' value={props.name}
            onClick={props.addCart}>Add to Cart</button>
          <span className='price'><strong>Price:</strong> {props.price} €</span>
        </div>
      </div>
    </div>
  )
};

export default item;
