import React from 'react'
import { ReactComponent as Cart } from '../../assets/cart.svg';
import './cart-icon.scss';
import { connect } from 'react-redux';
import { toggleCartHidden } from '../../redux/cart/cart.action';
import { selectCartItemsCount } from '../../redux/cart/cart.select';
const CartIcon = ({ toggleCartHidden, itemCount }) => (
    <div className="cart-icon" onClick={toggleCartHidden}>
        <Cart className="shopping-icon" />
        <span className="item-count">{itemCount}</span>
    </div>
)
const mapStateToProps = (state) => ({
    itemCount: selectCartItemsCount(state)
})
const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
})
export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);