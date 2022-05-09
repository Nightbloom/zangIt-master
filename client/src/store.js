import { createStore, combineReducers, applyMiddleware } from "redux"
import thunk from "redux-thunk"
import { composeWithDevTools } from "redux-devtools-extension"
import { getAllProductReducer, getSinlgeProductReducer } from './reducers/product-reducer';
import { cartReducer } from './reducers/cart-reducer';

const rootReducer = combineReducers({
    product: getAllProductReducer,
    singleProduct: getSinlgeProductReducer,
    cart: cartReducer
})

const cartFromLocalStorage = localStorage.getItem("cartItem") ? JSON.parse(localStorage.getItem("cartItem")) : []

const initial = {
    cart: {
        cartItem: cartFromLocalStorage
    }
}

const store = createStore(rootReducer,
    initial,
    composeWithDevTools(applyMiddleware(thunk))
);

export default store;