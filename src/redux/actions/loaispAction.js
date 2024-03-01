import axios from 'axios';

// Define action types
export const FETCH_LOAISP_REQUEST = 'FETCH_LOAISP_REQUEST';
export const FETCH_LOAISP_SUCCESS = 'FETCH_LOAISP_SUCCESS';
export const FETCH_LOAISP_ERROR = 'FETCH_LOAISP_ERROR';


export const CREATE_LOAISP_REQUEST = 'CREATE_LOAISP_REQUEST';
export const CREATE_LOAISP_SUCCESS = 'CREATE_LOAISP_SUCCESS';
export const CREATE_LOAISP_ERROR = 'CREATE_LOAISP_ERROR';


export const DELETE_LOAISP_SUCCESS = 'DELeTE_LOAISP_SUCCESS';

export const UPDATE_LOAISP_SUCCESS = 'UPDATE_LOAISP_SUCCESS';

export const fetchAllLoaisp = () => {
    return async (dispatch, getState) => {
        try {
            // Dispatch an action indicating the start of the request
            dispatch({ type: FETCH_LOAISP_REQUEST });

            // Perform the API request
            const res = await axios.get("http://localhost:4000/api/loaisp/get-all");
            console.log(res)
            const data = res && res.data ? res.data : [];

            // Dispatch an action with the retrieved data
            dispatch({
                type: FETCH_LOAISP_SUCCESS,
                data
            });
        } catch (error) {
            // Dispatch an action with the error if the request fails
            dispatch({
                type: FETCH_LOAISP_ERROR,
                error
            });
            console.log(error);
        }
    }
}

export const createLoaisp = (data) => {
    return async (dispatch, getState) => {
        dispatch({ type: CREATE_LOAISP_REQUEST });
        try {
            let res = await axios.post("http://localhost:4000/api/loaisp/them", data);
            console.log(res);
            if (res && res.data) {
                dispatch({ type: CREATE_LOAISP_SUCCESS });
                dispatch(fetchAllLoaisp());
            }
        } catch (error) {
            dispatch({ type: CREATE_LOAISP_ERROR, error });
            console.log(error);
        }
    };
};
export const updateLoaisp = (data) => {
    return async (dispatch, getState) => {
        //dispatch({ type: CREATE_LOAISP_REQUEST });
        try {
            let res = await axios.post("http://localhost:4000/api/loaisp/update", data);
            console.log(res.data);
            if (res && res.data) {
                dispatch({ type: UPDATE_LOAISP_SUCCESS });
                dispatch(fetchAllLoaisp());
            }
        } catch (error) {
            // dispatch({ type: CREATE_LOAISP_ERROR, error });
            console.log(error);
        }
    };
};

export const deleteLoaisp = (id) => {
    return async (dispatch, getState) => {
        try {
            let res = await axios.delete(`http://localhost:4000/api/loaisp/xoa/${id}`);
            console.log(res);
            if (res && res.data) {
                dispatch({ type: DELETE_LOAISP_SUCCESS });
                dispatch(fetchAllLoaisp());
            }
        } catch (error) {
            console.log(error);
        }
    };
};