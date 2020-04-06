import React from 'react';
import { connect } from 'react-redux';
import { selectCartItems } from '../../redux/cart/cart.select';
import { withRouter } from 'react-router-dom';
import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';
import './cart-dropdown.scss';
import { toggleCartHidden } from '../../redux/cart/cart.action';
const CartDropdown = ({ cartItems, history, dispatch }) => (
    <div className="cart-dropdown">
        <div className="cart-items">
            {cartItems.length ?
                cartItems.map(cartItem => (<CartItem key={cartItem.id} item={cartItem} />))
                :
                <span className="empty-string">Your cart is empty</span>
            }
        </div>
        <CustomButton onClick={() => {
            history.push('/checkout')
            dispatch(toggleCartHidden())
        }}>CHECKOUT</CustomButton>
    </div>
)
const mapStateToProps = (state) => ({
    cartItems: selectCartItems(state)
})
export default withRouter(connect(mapStateToProps)(CartDropdown));