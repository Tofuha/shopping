import React, { Component } from 'react';
import './Modal.css';
import ModalItem from './modalItem/ModalItem';

class Modal extends Component {
  state = {
    clicked: false
  }

  handleClick = () => {
    this.setState({
      clicked: !this.state.clicked
    })
  }

  render() {

    let show = this.state.clicked ? 'block' : 'none';
    let styles = {display: show};
    console.log(this.props.cart)
    let cartItems = this.props.cart.map((obj, i) => {
      return <ModalItem image={obj.image}
                        name={obj.name}
                        price={obj.price}
                        key={i}
                        id={i}
                        deleteItem={this.props.deleteItem}
            />

    });
    console.log(cartItems);
    let sum = this.props.cart.reduce((acc, curr) => {
      return acc += curr.price
    }, 0);
    return (
      <div>
        <i className="fas fa-shopping-cart" onClick={this.handleClick}></i>


        <div style={styles} id="myModal" className="modal">



          <div className="modal-content animated bounceInDown">
            <span onClick={this.handleClick} className="close">&times;</span>
            <ul className='modalListItems'>
              {cartItems.length > 0 ? cartItems : <p><em>Cart is empty</em></p>}
            </ul>
            {cartItems.length > 0 ? <span className='totalPrice'>
              <span className='totalPri'>Total Price:</span> {sum} €</span> : ''}
          </div>
        </div>
      </div>
    )
  }
}

export default Modal;
