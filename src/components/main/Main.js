import React from 'react';
import Items from '../Items/Items';
import Navigation from '../navigation/Navigation';
import './Main.css';
import InputRange from 'react-input-range';
import 'react-input-range/lib/css/index.css';


const main = (props) => {
  const output = (props.output.length > 0 ? props.output : props.database)
                  .filter(obj =>
                    (obj.price >= props.price.min && obj.price <= props.price.max) &&
                    (obj.ram.replace(/ .*/,'') >= props.ram.min && obj.ram.replace(/ .*/,'') <= props.ram.max) &&
                    (obj.storage.replace(/ .*/,'') >= props.storage.min && obj.storage.replace(/ .*/,'') <= props.storage.max) &&
                    (obj.dsize.replace(/"/,'') >= props.size.min && obj.dsize.replace(/"/,'') <= props.size.max)
                  );
  return (
    <div className='mainLayout'>
      <div className='navL'>
        <Navigation
          handleChange={props.handleChange}
          value={props.value}props
        >
          <span className='sliderTitle'>Price</span>
          <InputRange
            maxValue={1200}
            minValue={100}
            value={props.price}
            onChange={value => props.priceSlider(value)} />
          <span className='sliderTitle'>RAM</span>
          <InputRange
            maxValue={8}
            minValue={1}
            value={props.ram}
            onChange={value => props.ramSlider(value)} />
          <span className='sliderTitle'>Storage</span>
          <InputRange
            maxValue={512}
            minValue={32}
            value={props.storage}
            onChange={value => props.storageSlider(value)} />
          <span className='sliderTitle'>Size</span>
          <InputRange
            maxValue={6.5}
            minValue={4.7}
            step={.1}
            value={props.size}
            onChange={value => props.sizeSlider(value)} />

        </Navigation>
      </div>
      <div className='mainL'>
        <Items database={output} addCart={props.addCart}/>
      </div>
    </div>
  )

};

export default main;
