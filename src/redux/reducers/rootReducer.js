import { combineReducers } from 'redux';


import loaispReducer from './loaispReducer';
import thuonghieuReducer from './thuonghieuReducer';

const rootReducer = combineReducers({

    loaisp: loaispReducer,
    thuonghieu: thuonghieuReducer
});

export default rootReducer;
