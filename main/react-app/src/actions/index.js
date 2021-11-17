//Product
export const fetchallproduct = () => {
    return {
        type: 'FETCH_ALL_PRODUCT'
    }
}
export const addproduct = (name,description,price,rating,imageURL,quantity) => {
    return {
        type: 'ADD_PRODUCT',
        payload: {
            name:name,
            description:description,
            price:price,
            rating:rating,
            imageURL:imageURL,
            quantity:quantity
        }
    }
}
export const updateproduct = (id,name,description,price,rating,imageURL,quantity) => {
    return {
        type: 'UPDATE_PRODUCT',
        payload: {
            id:id,
            name:name,
            description:description,
            price:price,
            rating:rating,
            imageURL:imageURL,
            quantity:quantity
        }
    }
}
export const deleteproduct = (id) => {
    return {
        type: 'DELETE_PRODUCT',
        payload: id
    }
}

//Cart
export const fetchallcart = () => {
    return {
        type: 'FETCH_ALL_CART'
    }
}
export const addcart = (item) => {
    return {
        type: 'ADD_CART',
        payload: item
    }
}
export const deletecart = (id) => {
    return {
        type: 'DELETE_CART',
        payload: id
    }
}
export const updatecartdecrease = (id,quantity) => {
    return {
        type: 'UPDATE_CART_DECREASE',
        payload: {id:id,quantity:quantity}
    }
}
export const updatecartincrease = (id,quantity) => {
    return {
        type: 'UPDATE_CART_INCREASE',
        payload: {id:id,quantity:quantity}
    }
}

//Favorite
export const fetchallfavorite = () => {
    return {
        type: 'FETCH_ALL_FAVORITE'
    }
}
export const addfavorite = (item) => {
    return {
        type: 'ADD_FAVORITE',
        payload: item
    }
}
export const deletefavorite = (id) => {
    return {
        type: 'DELETE_FAVORITE',
        payload: id
    }
}

//Login
export const loggedin = () => {
    return {
        type: 'loggedIn'
    }
}

//Customer
export const registeraccount = (username,password,email,auth,status) => {
    return {
        type: 'REGISTER',
        payload: {
            username:username,
            password:password,
            email:email,
            auth:auth,
            status:status
        }
    }
}
export const loginaccount = (username,password) => {
    return {
        type: 'LOGIN',
        payload: {
            username:username,
            password:password
        }
    }
}
export const logoutaccount = () => {
    return {
        type: 'LOGOUT'
    }
}

//Order
export const addorder = (username,items,address,totalprice) => {
    return {
        type: 'ADD_ORDER',
        payload: {
            username:username,
            items:items,
            address:address,
            totalprice:totalprice
        }
    }
}

//current user
export const currentuser = (username) => {
    return {
        type:'CURRENT_USER',
        payload:username
    }
}

//auth user
export const authuser = () => {
    return {
        type:'AUTH_USER'
    }
}

export const userlogin = () => {
    return {
        type:'LOGGED_IN'
    }
}

export const userlogout = () => {
    return {
        type:'LOGGED_OUT'
    }
}