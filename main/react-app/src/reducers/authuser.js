const authreducer = (state = false,action) => {
    switch(action.type){
        case 'AUTH_USER':
            return state
        case 'LOGGED_IN':
            return !state
        case 'LOGGED_OUT':
            if(state=true){
                state = false
                return state
            }else{
                return state
            } 
        default:
            return state
    }
}

export default authreducer