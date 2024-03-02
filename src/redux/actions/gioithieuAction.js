import axios from 'axios';

// Define action types
export const FETCH_GIOITHIEU_REQUEST = 'FETCH_GIOITHIEU_REQUEST';
export const FETCH_GIOITHIEU_SUCCESS = 'FETCH_GIOITHIEU_SUCCESS';
export const FETCH_GIOITHIEU_ERROR = 'FETCH_GIOITHIEU_ERROR';


export const CREATE_GIOITHIEU_REQUEST = 'CREATE_GIOITHIEU_REQUEST';
export const CREATE_GIOITHIEU_SUCCESS = 'CREATE_GIOITHIEU_SUCCESS';
export const CREATE_GIOITHIEU_ERROR = 'CREATE_GIOITHIEU_ERROR';


export const DELETE_GIOITHIEU_SUCCESS = 'DELeTE_GIOITHIEU_SUCCESS';

export const UPDATE_GIOITHIEU_SUCCESS = 'UPDATE_GIOITHIEU_SUCCESS';

export const fetchAllGT = () => {
    return async (dispatch, getState) => {
        try {
            // Dispatch an action indicating the start of the request
            dispatch({ type: FETCH_GIOITHIEU_REQUEST });

            // Perform the API request
            const res = await axios.get("http://localhost:4000/api/gioi-thieu/get-all");
            //console.log(res)
            const data = res && res.data ? res.data : [];
            dispatch({
                type: FETCH_GIOITHIEU_SUCCESS,
                data
            });
        } catch (error) {
            // Dispatch an action with the error if the request fails
            dispatch({
                type: FETCH_GIOITHIEU_ERROR,
                error
            });
            console.log(error);
        }
    }
}

export const createGT = (data) => {
    return async (dispatch, getState) => {
        //dispatch({ type: CREATE_LIENHE_REQUEST });
        try {
            let res = await axios.post("http://localhost:4000/api/gioi-thieu/them", data);
            console.log(res);
            if (res && res.data) {
                dispatch({ type: CREATE_GIOITHIEU_SUCCESS, data });
                dispatch(fetchAllGT());
            }
        } catch (error) {
            // dispatch({ type: CREATE_LIENHE_ERROR, error });
            console.log(error);
        }
    };
};
export const updateGT = (data) => {
    return async (dispatch, getState) => {
        //dispatch({ type: CREATE_LOAISP_REQUEST });
        try {
            let res = await axios.post("http://localhost:4000/api/gioi-thieu/update", data);
            console.log(res.data);
            if (res && res.data) {
                dispatch({ type: UPDATE_GIOITHIEU_SUCCESS, data });
                dispatch(fetchAllGT());
            }
        } catch (error) {
            // dispatch({ type: CREATE_LOAISP_ERROR, error });
            console.log(error);
        }
    };
};

export const deleteGT = (id) => {
    return async (dispatch, getState) => {
        try {
            let res = await axios.delete(`http://localhost:4000/api/gioi-thieu/xoa/${id}`);
            console.log(res);
            if (res && res.data) {
                dispatch({ type: DELETE_GIOITHIEU_SUCCESS });
                dispatch(fetchAllGT());
            }
        } catch (error) {
            console.log(error);
        }
    };
};