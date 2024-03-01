import {
    FETCH_LOAISP_REQUEST, FETCH_LOAISP_SUCCESS, FETCH_LOAISP_ERROR, CREATE_LOAISP_REQUEST, CREATE_LOAISP_SUCCESS
    , CREATE_LOAISP_ERROR, UPDATE_LOAISP_SUCCESS
} from '../actions/loaispAction'
const INITIAL_STATE = {

    ListLoaisp: [],
    isCreating: false,
    isUpdating: false
};
const loaispReducer = (state = INITIAL_STATE, action) => {

    switch (action.type) {
        case FETCH_LOAISP_REQUEST:
            return {
                ...state

            };

        case FETCH_LOAISP_SUCCESS:
            return {
                ...state, ListLoaisp: action.data
            };
        case FETCH_LOAISP_ERROR:
            //console.log(action)
            return {
                ...state
            };
        case CREATE_LOAISP_REQUEST:
            return {
                ...state, isCreating: true

            };

        case CREATE_LOAISP_SUCCESS:
            //console.log(action)
            return {
                ...state, isCreating: false, ListLoaisp: [...state.ListLoaisp, action.data]
            };
        case CREATE_LOAISP_ERROR:
            //console.log(action)
            return {
                ...state, isCreating: false
            };
        case UPDATE_LOAISP_SUCCESS:
            console.log(action.data)
            return {
                ...state, isUpdating: false
            };
        default: return state;

    }

};

export default loaispReducer;