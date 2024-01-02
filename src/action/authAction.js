const { SET_CURRENT_USER } = require ("./types")

export const setCurrentUser = user => {
    return {
        type: SET_CURRENT_USER,
        payload : user 
    }
}