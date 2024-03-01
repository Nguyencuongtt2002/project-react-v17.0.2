import {
    FETCH_LIENHE_REQUEST, FETCH_LIENHE_SUCCESS, FETCH_LIENHE_ERROR, CREATE_LIENHE_REQUEST,
    UPDATE_LIENHE_SUCCESS
} from '../actions/lienheAction'
const INITIAL_STATE = {

    ListLienHe: [],
    isCreating: false
};
const lienheReducer = (state = INITIAL_STATE, action) => {

    switch (action.type) {
        case FETCH_LIENHE_REQUEST:
            return {
                ...state

            };

        case FETCH_LIENHE_SUCCESS:
            return {
                ...state, ListLienHe: action.data
            };
        case FETCH_LIENHE_ERROR:
            return {
                ...state
            };
        case CREATE_LIENHE_REQUEST:
            return {
                ...state, isCreating: false, ListLienHe: [...state.ListLienHe, action.data]
            };
        case UPDATE_LIENHE_SUCCESS:
            return {
                ...state,
                ListLienHe: state.ListLienHe.map(item => {
                    if (item.MaThuongHieu === action.data.MaThuongHieu) {
                        return action.data;
                    }
                    return item;
                })
            };

        default: return state;

    }

};

export default lienheReducer;