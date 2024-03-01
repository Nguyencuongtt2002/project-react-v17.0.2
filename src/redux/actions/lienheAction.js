import axios from 'axios';

// Define action types
export const FETCH_LIENHE_REQUEST = 'FETCH_LIENHE_REQUEST';
export const FETCH_LIENHE_SUCCESS = 'FETCH_LIENHE_SUCCESS';
export const FETCH_LIENHE_ERROR = 'FETCH_LIENHE_ERROR';


export const CREATE_LIENHE_REQUEST = 'CREATE_LIENHE_REQUEST';
export const CREATE_LIENHE_SUCCESS = 'CREATE_LIENHE_SUCCESS';
export const CREATE_LIENHE_ERROR = 'CREATE_LIENHE_ERROR';


export const DELETE_LIENHE_SUCCESS = 'DELeTE_LIENHE_SUCCESS';

export const UPDATE_LIENHE_SUCCESS = 'UPDATE_LIENHE_SUCCESS';

export const fetchAllLH = () => {
    return async (dispatch, getState) => {
        try {
            // Dispatch an action indicating the start of the request
            dispatch({ type: FETCH_LIENHE_REQUEST });

            // Perform the API request
            const res = await axios.get("http://localhost:4000/api/lien-he/get-all");
            console.log(res)
            const data = res && res.data ? res.data : [];
            dispatch({
                type: FETCH_LIENHE_SUCCESS,
                data
            });
        } catch (error) {
            // Dispatch an action with the error if the request fails
            dispatch({
                type: FETCH_LIENHE_ERROR,
                error
            });
            console.log(error);
        }
    }
}

export const createLH = (data) => {
    return async (dispatch, getState) => {
        dispatch({ type: CREATE_LIENHE_REQUEST });
        try {
            let res = await axios.post("http://localhost:4000/api/lien-he/them", data);
            console.log(res);
            if (res && res.data) {
                dispatch({ type: CREATE_LIENHE_SUCCESS });
                dispatch(fetchAllLH());
            }
        } catch (error) {
            dispatch({ type: CREATE_LIENHE_ERROR, error });
            console.log(error);
        }
    };
};
export const updateLH = (data) => {
    return async (dispatch, getState) => {
        //dispatch({ type: CREATE_LOAISP_REQUEST });
        try {
            let res = await axios.post("http://localhost:4000/api/lien-he/update", data);
            console.log(res.data);
            if (res && res.data) {
                dispatch({ type: UPDATE_LIENHE_SUCCESS });
                dispatch(fetchAllLH());
            }
        } catch (error) {
            // dispatch({ type: CREATE_LOAISP_ERROR, error });
            console.log(error);
        }
    };
};

export const deleteLH = (id) => {
    return async (dispatch, getState) => {
        try {
            let res = await axios.delete(`http://localhost:4000/api/lien-he/xoa/${id}`);
            console.log(res);
            if (res && res.data) {
                dispatch({ type: DELETE_LIENHE_SUCCESS });
                dispatch(fetchAllLH());
            }
        } catch (error) {
            console.log(error);
        }
    };
};