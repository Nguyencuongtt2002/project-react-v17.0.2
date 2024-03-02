import {
    FETCH_GIOITHIEU_REQUEST, FETCH_GIOITHIEU_SUCCESS, FETCH_GIOITHIEU_ERROR, CREATE_GIOITHIEU_SUCCESS,
    UPDATE_GIOITHIEU_SUCCESS
} from '../actions/gioithieuAction'
const INITIAL_STATE = {

    ListGioiThieu: [],
    isCreating: false
};
const gioithieuReducer = (state = INITIAL_STATE, action) => {

    switch (action.type) {
        case FETCH_GIOITHIEU_REQUEST:
            return {
                ...state

            };

        case FETCH_GIOITHIEU_SUCCESS:
            return {
                ...state, ListGioiThieu: action.data
            };
        case FETCH_GIOITHIEU_ERROR:
            return {
                ...state
            };
        case CREATE_GIOITHIEU_SUCCESS:
            return {
                ...state, isCreating: false, ListGioiThieu: [...state.ListGioiThieu, action.data]
            };
        case UPDATE_GIOITHIEU_SUCCESS:
            console.log(action.data)
            return {
                ...state,
                ListGioiThieu: state.ListGioiThieu.map(item => {
                    if (item.MaGioiThieu === action.data.MaGioiThieu) {
                        return action.data;
                    }
                    return item;
                })
            };

        default: return state;

    }

};

export default gioithieuReducer;