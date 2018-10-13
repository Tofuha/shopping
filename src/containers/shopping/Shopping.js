import React, { Component } from 'react';
import Main from '../../components/main/Main';
import Header from '../../components/header/Header';

class Shopping extends Component {
  state = {
    database: [
      {
        name: 'Xiaomi Redmi Note 5 Pro',
        dsize: '5.99"',
        dresolution: '1080x2160 pixels',
        cresolution: '12 MP',
        cvideo: '1080@30fps',
        ram: '6 GB',
        storage: '64 GB',
        chip: 'Snapdragon 636',
        battery: '4000 mAh',
        image: 'xiaomi-redmi-note-5-pro-1.jpg',
        price: 156
      },
      {
        name: 'Samsung Galaxy Note9',
        dsize: '6.4"',
        dresolution: '1440 x 2960 pixels',
        cresolution: '12 MP',
        cvideo: '2160p@60fps',
        ram: '8 GB',
        storage: '512 GB',
        chip: 'Snapdragon 845',
        battery: '4000 mAh',
        image: 'samsung-galaxy-note9-1.jpg',
        price: 750
      },
      {
        name: 'Google Pixel 3 XL',
        dsize: '6.3"',
        dresolution: '1440 x 2960 pixels',
        cresolution: '12 MP',
        cvideo: '2160p@30fps',
        ram: '4 GB',
        storage: '128 GB',
        chip: 'Snapdragon 845',
        battery: '3430 mAh',
        image: 'google-pixel-3xl-4.jpg',
        price: 949
      },
      {
        name: 'Nokia 7.1',
        dsize: '5.84"',
        dresolution: '1080 x 2280 pixels',
        cresolution: '12 MP',
        cvideo: '2160p@30fps',
        ram: '4 GB',
        storage: '64 GB',
        chip: 'Snapdragon 636',
        battery: '3060 mAh',
        image: 'nokia-71-plus-7.jpg',
        price: 339

      },
      {
        name: 'Apple iPhone XS Max',
        dsize: '6.5"',
        dresolution: '1242 x 2688 pixels',
        cresolution: '12 MP',
        cvideo: '2160p@24/30/60fps',
        ram: '4 GB',
        storage: '512 GB',
        chip: 'Apple A12 Bionic',
        battery: '3174 mAh',
        image: 'apple-iphone-xs-max-5.jpg',
        price: 1200
      },
      {
        name: 'Nokia 7 plus',
        dsize: '6"',
        dresolution: '1080x2160 pixels',
        cresolution: '13 MP',
        cvideo: '2160p@30fps',
        ram: '4 GB',
        storage: '64 GB',
        chip: 'Snapdragon 660',
        battery: '3800 mAh',
        image: 'nokia-7-plus-1.jpg',
        price: 309
      },
      {
        name: 'Google Pixel',
        dsize: '5"',
        dresolution: '1080 x 1920 pixels',
        cresolution: '12 MP',
        cvideo: '2160p@30fps',
        ram: '4 GB',
        storage: '128 GB',
        chip: 'Snapdragon 821',
        battery: '2770 mAh',
        image: 'google-pixel-04.jpg',
        price: 315
      },
      {
        name: 'Samsung Galaxy J7 Prime',
        dsize: '5.5"',
        dresolution: '1080 x 1920 pixels',
        cresolution: '13 MP',
        cvideo: '1080@30fps',
        ram: '3 GB',
        storage: '32 GB',
        chip: 'Exynos 7870 Octa',
        battery: '3300 mAh',
        image: 'samsung-galaxy-j7-prime-1.jpg',
        price: 200
      },
      {
        name: 'Apple iPhone 6',
        dsize: '4.7"',
        dresolution: '750 x 1334 pixels',
        cresolution: '8 MP',
        cvideo: '1080@60fps',
        ram: '1 GB',
        storage: '128 GB',
        chip: 'Apple A8',
        battery: '1810 mAh',
        image: 'apple-iphone-6-1.jpg',
        price: 180
      },
      {
        name: 'Xiaomi Pocophone F1',
        dsize: '6.18"',
        dresolution: '1080 x 2246 pixels',
        cresolution: '12 MP',
        cvideo: '2160p@30fps',
        ram: '8 GB',
        storage: '256 GB',
        chip: 'Snapdragon 845',
        battery: '4000 mAh',
        image: 'xiaomi-pocophone-f1-2.jpg',
        price: 310
      }
    ],
    output: [],
    price: {min: 100, max: 1200},
    ram: {min: 1, max: 8},
    storage: {min: 32, max: 512},
    size: {min: 4.7, max: 6.5},
    cart: []

  }


  handleChange = (event) => {
    if (event.target.checked) {
      let currentDB = [...this.state.database].filter(obj => {
        return obj.name.replace(/ .*/,'').toLowerCase() === event.target.value;
      });
      this.setState(prevState => ({
        output: prevState.output.concat(currentDB)
      }));
    } else if (!event.target.checked) {
      let current = [...this.state.output].filter(obj => {
        return obj.name.replace(/ .*/,'').toLowerCase() !== event.target.value;
      });
      this.setState({
        output: current
      })
    }
  }

  addCart = (event) => {
    let added = this.state.database.filter(obj => {
      return obj.name === event.target.value;
    });
    this.setState(prevState => ({
      cart: prevState.cart.concat(added)
    }));
  }

  priceSlider = (value) => {
    this.setState({price: value})
  }

  ramSlider = (value) => {
    this.setState({ram: value})
  }

  storageSlider = (value) => {
    this.setState({storage: value})
  }

  sizeSlider = (value) => {
    this.setState({size: value})
  }

  deleteItem = (event) => {
    let tempCart = this.state.cart;
    tempCart.splice(event.target.value, 1);
    this.setState({
      cart: tempCart
    });
  }

  render() {
    return (
      <div>
        <Header cart={this.state.cart} deleteItem={this.deleteItem}/>
        <Main
          output={this.state.output}
          database={this.state.database}
          price={this.state.price}
          ram={this.state.ram}
          storage={this.state.storage}
          size={this.state.size}
          handleChange={this.handleChange}
          addCart={this.addCart}
          priceSlider={this.priceSlider}
          ramSlider={this.ramSlider}
          storageSlider={this.storageSlider}
          sizeSlider={this.sizeSlider}
        />
      </div>
    )
  }
}

export default Shopping;
