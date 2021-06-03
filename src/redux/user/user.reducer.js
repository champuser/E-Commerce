const INITIAL_STATE = {
    currentUser : null
}

const userReducer =  (state = INITIAL_STATE,action) => {
    // state will be the currentState that passed to reducer when user fires action
    // this time it doesnt know any state so initialize the initial state
    // Imp -----> If state is not set then state will go to initial state  & null is considered value

    switch (action.type){
        case 'SET_CURRENT_USER':

        return{
            ...state,
            currentUser: action.payload
        }

        default:
            return state;
    }


    
}


export default userReducer;