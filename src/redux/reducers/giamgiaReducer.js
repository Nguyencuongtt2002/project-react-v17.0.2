import {
    FETCH_GIAMGIA_REQUEST, FETCH_GIAMGIA_SUCCESS, FETCH_GIAMGIA_ERROR, CREATE_GIAMGIA_SUCCESS,
    UPDATE_GIAMGIA_SUCCESS
} from '../actions/giamgiaAction'
const INITIAL_STATE = {

    ListGiamGia: [],
    isCreating: false
};
const giamgiaReducer = (state = INITIAL_STATE, action) => {

    switch (action.type) {
        case FETCH_GIAMGIA_REQUEST:
            return {
                ...state

            };

        case FETCH_GIAMGIA_SUCCESS:
            return {
                ...state, ListGiamGia: action.data
            };
        case FETCH_GIAMGIA_ERROR:
            return {
                ...state
            };
        case CREATE_GIAMGIA_SUCCESS:
            return {
                ...state, isCreating: false, ListGiamGia: [...state.ListGiamGia, action.data]
            };
        case UPDATE_GIAMGIA_SUCCESS:
            //console.log(action.data)
            return {
                ...state,
                ListGiamGia: state.ListGiamGia.map(item => {
                    if (item.MaGioiThieu === action.data.MaGioiThieu) {
                        return action.data;
                    }
                    return item;
                })
            };

        default: return state;

    }

};

export default giamgiaReducer;