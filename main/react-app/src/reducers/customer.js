import swal from 'sweetalert';

const CustomersReducer = (state = [],action) => {
    switch(action.type){
        case 'REGISTER':
                state.push(action.payload)
            return state
        case 'LOGIN':
                const customerindex = state.findIndex(
                    (user) => user.username === action.payload.username
                );
                if(customerindex===null||customerindex===undefined||customerindex<0){
                    swal("Username Not Found",'', "error");
                }else{
                    if(state[customerindex].password===action.payload.password){
                        state[customerindex].status=true
                        return state
                    }else{
                        swal("Incorrect Password",'', "error");
                    }
                }
        case 'LOGOUT':
                const loginindex = state.findIndex(
                    (user) => user.status === true
                );
                if(state[loginindex]!==undefined){
                    state[loginindex].status = false
                }
            return state
        default:
            return state
    }
}

export default CustomersReducer