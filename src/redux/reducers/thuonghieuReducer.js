import {
    FETCH_THUONGHIEU_REQUEST, FETCH_THUONGHIEU_SUCCESS, FETCH_THUONGHIEU_ERROR, CREATE_THUONGHIEU_SUCCESS,
    UPDATE_THUONGHIEU_SUCCESS, DELETE_THUONGHIEU_SUCCESS
} from '../actions/thuonghieuAction'
const INITIAL_STATE = {

    ListThuongHieu: [],
    isCreating: false
};
const thuonghieuReducer = (state = INITIAL_STATE, action) => {

    switch (action.type) {
        case FETCH_THUONGHIEU_REQUEST:
            return {
                ...state

            };

        case FETCH_THUONGHIEU_SUCCESS:
            return {
                ...state, ListThuongHieu: action.data
            };
        case FETCH_THUONGHIEU_ERROR:
            return {
                ...state
            };
        case CREATE_THUONGHIEU_SUCCESS:
            return {
                ...state, isCreating: false, ListThuongHieu: [...state.ListThuongHieu, action.data]
            };
        case UPDATE_THUONGHIEU_SUCCESS:
            return {
                ...state,
                ListThuongHieu: state.ListThuongHieu.map(item => {
                    if (item.MaThuongHieu === action.data.MaThuongHieu) {
                        return action.data;
                    }
                    return item;
                })
            };
        case DELETE_THUONGHIEU_SUCCESS:
            //console.log(action.data);
            //console.log("tyu")
            return {
                ...state,
                ListThuongHieu: state.ListThuongHieu.filter(item => item.MaThuongHieu !== action.data.id)
            };

        default: return state;

    }

};

export default thuonghieuReducer;