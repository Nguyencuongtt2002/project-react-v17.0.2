import {
    FETCH_SANPHAM_REQUEST, FETCH_SANPHAM_SUCCESS, FETCH_SANPHAM_ERROR,
} from '../actions/sanphamAction'
const INITIAL_STATE = {

    ListSanPham: [],
    isCreating: false
};
const sanphamReducer = (state = INITIAL_STATE, action) => {

    switch (action.type) {
        case FETCH_SANPHAM_REQUEST:
            return {
                ...state

            };

        case FETCH_SANPHAM_SUCCESS:
            return {
                ...state, ListSanPham: action.data
            };
        case FETCH_SANPHAM_ERROR:
            return {
                ...state
            };
        default: return state;

    }

};

export default sanphamReducer;