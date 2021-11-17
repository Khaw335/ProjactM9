const currentreducer = (state = '',action) => {
    switch(action.type){
        case 'CURRENT_USER':
            state = action.payload
            return state
        default:
            return state
    }
}

export default currentreducer