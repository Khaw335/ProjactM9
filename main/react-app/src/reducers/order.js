const OrderCustomer = (state = [],action) => {
    switch(action.type){
        case 'ADD_ORDER':
            const object = {
                username: action.payload.username,
                items:action.payload.items,
                address:action.payload.address,
                totalprice:action.payload.totalprice
            }
            state.push(object)
            return state
        default:
            return state
    }
}

export default OrderCustomer