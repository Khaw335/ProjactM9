import data from '../app/data'

const ProductsReducer = (state = data,action) => {
    switch(action.type){
        case 'FETCH_ALL_PRODUCT':
            return state
        case 'ADD_PRODUCT':
            let id = state.length + 1
            let new_product = {
                id:id,
                name:action.payload.name,
                description:action.payload.description,
                price:action.payload.price,
                rating:action.payload.rating,
                imageURL:action.payload.imageURL,
                quantity:action.payload.quantity
            }
            state.push(new_product)
            return state
        case 'UPDATE_PRODUCT':
            const updateindex = state.findIndex(
                (item) => item.id === action.payload.id
            )
            let updated_product = {
                id:action.payload.id,
                name:action.payload.name,
                description:action.payload.description,
                price:action.payload.price,
                rating:action.payload.rating,
                imageURL:action.payload.imageURL,
                quantity:action.payload.quantity
            }
            state.splice(updateindex,1)
            state.push(updated_product)
            return state
        case 'DELETE_PRODUCT':
            const deleteindex = state.findIndex(
                (item) => item.id === action.payload
            );
            state.splice(deleteindex, 1);
            return state
        default:
            return state
    }
}

export default ProductsReducer