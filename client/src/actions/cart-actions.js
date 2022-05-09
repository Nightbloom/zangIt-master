import { ADD_TO_CART, REMOVE_FROM_CART } from "../constants/cart-constants"
import axios from 'axios';

export const addToCartAction = (id, qty) => async (dispatch, getState) => {
    // console.log(id);
    const { data } = await axios.get(`http://localhost:5000/api/products/${id}`);
    dispatch({ type: ADD_TO_CART, payload: { ...data.result, qty } })
    localStorage.setItem("cartItem", JSON.stringify(getState().cart.cartItem))
    // console.warn({ ...data.result, qty });
}

export const removeFromCartAction = (id) => async (dispatch, getState) => {
    console.log(id);
    dispatch({ type: REMOVE_FROM_CART, payload: id })
    localStorage.setItem("cartItem", JSON.stringify(getState().cart.cartItem))
}