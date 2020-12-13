//Reducer for character information Initialize State
const initState = {
    name: "Talha Uzun",
    occupation: "Backend Developer",
    age: 24
}

//Define Actions
const characterReducer = (state = initState, action) => {
    switch (action.type) {
            //Change character name
        case 'CHANGE_NAME':
            return {
                ...state,
                name: action.payload
            }

        case 'CHANGE_OCCUPATION':
            return {
                ...state,
                occupation: action.payload
            }
        case 'CHANGE_AGE':
            return {
                ...state,
                age: action.payload
            }
        default:
            return state
    }
}

export default characterReducer;