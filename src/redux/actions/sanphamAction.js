import axios from 'axios';

// Define action types
export const FETCH_SANPHAM_REQUEST = 'FETCH_SANPHAM_REQUEST';
export const FETCH_SANPHAM_SUCCESS = 'FETCH_SANPHAM_SUCCESS';
export const FETCH_SANPHAM_ERROR = 'FETCH_SANPHAM_ERROR';



export const fetchAllSanPham = () => {
    return async (dispatch, getState) => {
        try {
            // Dispatch an action indicating the start of the request
            dispatch({ type: FETCH_SANPHAM_REQUEST });

            // Perform the API request
            const res = await axios.get("http://localhost:4000/api/san-pham/get-all");
            console.log(res)
            const data = res && res.data ? res.data : [];

            // Dispatch an action with the retrieved data
            dispatch({
                type: FETCH_SANPHAM_SUCCESS,
                data
            });
        } catch (error) {
            // Dispatch an action with the error if the request fails
            dispatch({
                type: FETCH_SANPHAM_ERROR,
                error
            });
            console.log(error);
        }
    }
}