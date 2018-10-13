import React from 'react';
import Item from './Item/Item';
import './Items.css';

const items = (props) => {
  let listItems = [];
  for (let i = 0; i < props.database.length; i++) {
    listItems.push(<Item
      key={i}
      name={props.database[i].name}
      dsize={props.database[i].dsize}
      dresolution={props.database[i].dresolution}
      cresolution={props.database[i].cresolution}
      cvideo={props.database[i].cvideo}
      ram={props.database[i].ram}
      storage={props.database[i].storage}
      chip={props.database[i].chip}
      battery={props.database[i].battery}
      image={props.database[i].image}
      price={props.database[i].price}
      addCart={props.addCart}
    />);
  }

  return (
    <div className='itemsLayout'>
      {listItems}
    </div>
  )
}

export default items;
