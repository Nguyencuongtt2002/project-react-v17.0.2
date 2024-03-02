import { combineReducers } from 'redux';
import loaispReducer from './loaispReducer';
import thuonghieuReducer from './thuonghieuReducer';
import lienheReducer from './lienheReducer';
import gioithieuReducer from './gioithieuReducer';
import menuReducer from './menuReducer';
import sanphamReducer from './sanphamReducer';
import giamgiaReducer from './giamgiaReducer';
const rootReducer = combineReducers({

    loaisp: loaispReducer,
    thuonghieu: thuonghieuReducer,
    lienhe: lienheReducer,
    gioithieu: gioithieuReducer,
    menu: menuReducer,
    sanpham: sanphamReducer,
    giamgia: giamgiaReducer
});

export default rootReducer;
