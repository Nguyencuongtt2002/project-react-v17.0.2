import { combineReducers } from 'redux';


import loaispReducer from './loaispReducer';
import thuonghieuReducer from './thuonghieuReducer';
import lienheReducer from './lienheReducer';
const rootReducer = combineReducers({

    loaisp: loaispReducer,
    thuonghieu: thuonghieuReducer,
    lienhe: lienheReducer
});

export default rootReducer;
