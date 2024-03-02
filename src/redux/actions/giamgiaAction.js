import axios from 'axios';

// Define action types
export const FETCH_GIAMGIA_REQUEST = 'FETCH_GIAMGIA_REQUEST';
export const FETCH_GIAMGIA_SUCCESS = 'FETCH_GIAMGIA_SUCCESS';
export const FETCH_GIAMGIA_ERROR = 'FETCH_GIAMGIA_ERROR';


export const CREATE_GIAMGIA_REQUEST = 'CREATE_GIAMGIA_REQUEST';
export const CREATE_GIAMGIA_SUCCESS = 'CREATE_GIAMGIA_SUCCESS';
export const CREATE_GIAMGIA_ERROR = 'CREATE_GIAMGIA_ERROR';


export const DELETE_GIAMGIA_SUCCESS = 'DELeTE_GIAMGIA_SUCCESS';

export const UPDATE_GIAMGIA_SUCCESS = 'UPDATE_GIAMGIA_SUCCESS';

export const fetchAllGG = () => {
    return async (dispatch, getState) => {
        try {
            // Dispatch an action indicating the start of the request
            dispatch({ type: FETCH_GIAMGIA_REQUEST });

            // Perform the API request
            const res = await axios.get("http://localhost:4000/api/giam-gia/get-all");
            //console.log(res)
            const data = res && res.data ? res.data : [];
            dispatch({
                type: FETCH_GIAMGIA_SUCCESS,
                data
            });
        } catch (error) {
            // Dispatch an action with the error if the request fails
            dispatch({
                type: FETCH_GIAMGIA_ERROR,
                error
            });
            console.log(error);
        }
    }
}

export const createGG = (data) => {
    return async (dispatch, getState) => {
        //dispatch({ type: CREATE_LIENHE_REQUEST });
        try {
            let res = await axios.post("http://localhost:4000/api/giam-gia/them", data);
            console.log(res);
            if (res && res.data) {
                dispatch({ type: CREATE_GIAMGIA_SUCCESS, data });
                dispatch(fetchAllGG());
            }
        } catch (error) {
            // dispatch({ type: CREATE_LIENHE_ERROR, error });
            console.log(error);
        }
    };
};
export const updateGG = (data) => {
    return async (dispatch, getState) => {
        //dispatch({ type: CREATE_LOAISP_REQUEST });
        try {
            let res = await axios.post("http://localhost:4000/api/giam-gia/update", data);
            console.log(res.data);
            if (res && res.data) {
                dispatch({ type: UPDATE_GIAMGIA_SUCCESS, data });
                dispatch(fetchAllGG());
            }
        } catch (error) {
            // dispatch({ type: CREATE_LOAISP_ERROR, error });
            console.log(error);
        }
    };
};

export const deleteGG = (id) => {
    return async (dispatch, getState) => {
        try {
            let res = await axios.delete(`http://localhost:4000/api/giam-gia/xoa/${id}`);
            console.log(res);
            if (res && res.data) {
                dispatch({ type: DELETE_GIAMGIA_SUCCESS });
                dispatch(fetchAllGG());
            }
        } catch (error) {
            console.log(error);
        }
    };
};