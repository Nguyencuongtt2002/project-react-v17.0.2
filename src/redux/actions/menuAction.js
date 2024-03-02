import axios from 'axios';

// Define action types
export const FETCH_MENU_REQUEST = 'FETCH_MENU_REQUEST';
export const FETCH_MENU_SUCCESS = 'FETCH_MENU_SUCCESS';
export const FETCH_MENU_ERROR = 'FETCH_MENU_ERROR';


export const CREATE_MENU_REQUEST = 'CREATE_MENU_REQUEST';
export const CREATE_MENU_SUCCESS = 'CREATE_MENU_SUCCESS';
export const CREATE_MENU_ERROR = 'CREATE_MENU_ERROR';


export const DELETE_MENU_SUCCESS = 'DELeTE_MENU_SUCCESS';

export const UPDATE_MENU_SUCCESS = 'UPDATE_MENU_SUCCESS';

export const fetchAllMN = () => {
    return async (dispatch, getState) => {
        try {
            // Dispatch an action indicating the start of the request
            dispatch({ type: FETCH_MENU_REQUEST });

            // Perform the API request
            const res = await axios.get("http://localhost:4000/api/menu/get-all");
            console.log(res)
            const data = res && res.data ? res.data : [];

            // Dispatch an action with the retrieved data
            dispatch({
                type: FETCH_MENU_SUCCESS,
                data
            });
        } catch (error) {
            // Dispatch an action with the error if the request fails
            dispatch({
                type: FETCH_MENU_ERROR,
                error
            });
            console.log(error);
        }
    }
}

export const createMN = (data) => {
    return async (dispatch, getState) => {
        dispatch({ type: CREATE_MENU_REQUEST });
        try {
            let res = await axios.post("http://localhost:4000/api/menu/them", data);
            console.log(res);
            if (res && res.data) {
                dispatch({ type: CREATE_MENU_SUCCESS });
                dispatch(fetchAllMN());
            }
        } catch (error) {
            dispatch({ type: CREATE_MENU_ERROR, error });
            console.log(error);
        }
    };
};
export const updateMN = (data) => {
    return async (dispatch, getState) => {
        //dispatch({ type: CREATE_LOAISP_REQUEST });
        try {
            let res = await axios.post("http://localhost:4000/api/menu/update", data);
            console.log(res.data);
            if (res && res.data) {
                dispatch({ type: UPDATE_MENU_SUCCESS });
                dispatch(fetchAllMN());
            }
        } catch (error) {
            // dispatch({ type: CREATE_LOAISP_ERROR, error });
            console.log(error);
        }
    };
};

export const deleteMN = (id) => {
    return async (dispatch, getState) => {
        try {
            let res = await axios.delete(`http://localhost:4000/api/menu/xoa/${id}`);
            console.log(res);
            if (res && res.data) {
                dispatch({ type: DELETE_MENU_SUCCESS });
                dispatch(fetchAllMN());
            }
        } catch (error) {
            console.log(error);
        }
    };
};