import {
    FETCH_MENU_REQUEST, FETCH_MENU_SUCCESS, FETCH_MENU_ERROR, CREATE_MENU_REQUEST, CREATE_MENU_SUCCESS
    , CREATE_MENU_ERROR, UPDATE_MENU_SUCCESS
} from '../actions/menuAction'
const INITIAL_STATE = {

    ListMenu: [],
    isCreating: false,
    isUpdating: false
};
const menuReducer = (state = INITIAL_STATE, action) => {

    switch (action.type) {
        case FETCH_MENU_REQUEST:
            return {
                ...state

            };

        case FETCH_MENU_SUCCESS:
            return {
                ...state, ListMenu: action.data
            };
        case FETCH_MENU_ERROR:
            //console.log(action)
            return {
                ...state
            };
        case CREATE_MENU_REQUEST:
            return {
                ...state, isCreating: true

            };

        case CREATE_MENU_SUCCESS:
            //console.log(action)
            return {
                ...state, isCreating: false, ListMenu: [...state.ListMenu, action.data]
            };
        case CREATE_MENU_ERROR:
            //console.log(action)
            return {
                ...state, isCreating: false
            };
        case UPDATE_MENU_SUCCESS:
            console.log(action.data)
            return {
                ...state, isUpdating: false
            };
        default: return state;

    }

};

export default menuReducer;