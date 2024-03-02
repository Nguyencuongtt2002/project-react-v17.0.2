import axios from 'axios';
// Define action types
export const FETCH_THUONGHIEU_REQUEST = 'FETCH_THUONGHIEU_REQUEST';
export const FETCH_THUONGHIEU_SUCCESS = 'FETCH_THUONGHIEU_SUCCESS';
export const FETCH_THUONGHIEU_ERROR = 'FETCH_THUONGHIEU_ERROR';

export const CREATE_THUONGHIEU_REQUEST = 'CREATE_THUONGHIEU_REQUEST';
export const CREATE_THUONGHIEU_SUCCESS = 'CREATE_THUONGHIEU_SUCCESS';
export const CREATE_THUONGHIEU_ERROR = 'CREATE_THUONGHIEU_ERROR';

export const UPDATE_THUONGHIEU_SUCCESS = 'UPDATE_THUONGHIEU_SUCCESS';
export const DELETE_THUONGHIEU_SUCCESS = 'DELeTE_THUONGHIEU_SUCCESS';
export const fetchAllThuonghieu = () => {
    return async (dispatch, getState) => {
        try {
            // Dispatch an action indicating the start of the requests
            dispatch({ type: FETCH_THUONGHIEU_REQUEST });

            // Perform the API request
            const res = await axios.get("http://localhost:4000/api/thuong-hieu/get-all");
            //console.log(res)
            const data = res && res.data ? res.data : [];

            // Dispatch an action with the retrieved data
            dispatch({
                type: FETCH_THUONGHIEU_SUCCESS,
                data
            });
        } catch (error) {
            // Dispatch an action with the error if the request fails
            dispatch({
                type: FETCH_THUONGHIEU_ERROR,
                error
            });
            console.log(error);
        }
    }
}
export const createTH = (data) => {
    return async (dispatch, getState) => {
        dispatch({ type: CREATE_THUONGHIEU_REQUEST });
        try {
            let res = await axios.post("http://localhost:4000/api/thuong-hieu/them", data);
            //console.log(res);
            if (res && res.data) {
                dispatch({ type: CREATE_THUONGHIEU_SUCCESS, data });
                dispatch(fetchAllThuonghieu());
            }
        } catch (error) {
            dispatch({ type: CREATE_THUONGHIEU_ERROR, error });
            console.log(error);
        }
    };
};
export const updateTH = (data) => {
    return async (dispatch, getState) => {
        //dispatch({ type: CREATE_LOAISP_REQUEST });
        try {
            let res = await axios.post("http://localhost:4000/api/thuong-hieu/update", data);
            console.log(res.data)
            if (res) {
                dispatch({ type: UPDATE_THUONGHIEU_SUCCESS, data });
                console.log(data)
                dispatch(fetchAllThuonghieu());
            }
        } catch (error) {
            console.log(error);
        }
    };
};

export const deleteTH = (id) => {
    return async (dispatch, getState) => {
        try {
            let res = await axios.delete(`http://localhost:4000/api/thuong-hieu/xoa/${id}`);
            if (res && res.data) {
                dispatch({ type: DELETE_THUONGHIEU_SUCCESS, data: { id } });
                console.log("ttf")
                dispatch(fetchAllThuonghieu());
            }
        } catch (error) {
            console.log(error);
        }
    };
};