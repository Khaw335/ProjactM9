const FavoritesReducer = (state = [],action) => {
    switch(action.type){
        case 'FETCH_ALL_FAVORITE':
            return state
        case 'ADD_FAVORITE':
                state.push(action.payload)
            return state
        case 'DELETE_FAVORITE':
                const favoriteindex = state.findIndex(
                    (item) => item.id === action.payload.id
                );
                state.splice(favoriteindex, 1);
            return state
        default:
            return state
    }
}

export default FavoritesReducer