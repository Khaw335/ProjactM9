import cartReducers from './cart'
import favoriteReducers from './favorite'
import productReducers from './product'
import loggedReducers from './loggedIn'
import customersReducer from './customer'
import ordersReducer from './order'
import currentReducer from './currentuser'
import authuserreducer from './authuser'

import {combineReducers} from 'redux'

const allReducers = combineReducers({
    cart: cartReducers,
    favorite: favoriteReducers,
    product: productReducers,
    logged: loggedReducers,
    customer: customersReducer,
    order: ordersReducer,
    current: currentReducer,
    auth:authuserreducer
})

export default allReducers