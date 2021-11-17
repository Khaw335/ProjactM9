const CartReducer = (state = [],action) => {
    switch(action.type){
        case 'FETCH_ALL_CART':
            return state
        case 'ADD_CART':
            let new_action = {
                id:action.payload.id,
                name:action.payload.name,
                imageURL:action.payload.imageURL,
                description:action.payload.description,
                rating:action.payload.rating,
                price:action.payload.price,
                quantity:1
            }
            state.push(new_action)
            return state
        case 'DELETE_CART':
                const deleteindex = state.findIndex(
                    (item) => item.id === action.payload.id
                );
                state.splice(deleteindex, 1);
            return state
        case 'UPDATE_CART_DECREASE':
                const updateindexdec = state.findIndex(
                    (item)=> item.id === action.payload.id
                );
                state[updateindexdec].quantity = parseInt(action.payload.quantity) - 1
            return state
        case 'UPDATE_CART_INCREASE':
                const updateindexicr = state.findIndex(
                    (item)=> item.id === action.payload.id
                );
                state[updateindexicr].quantity = parseInt(action.payload.quantity) + 1
            return state
        default:
            return state
    }
}

export default CartReducer