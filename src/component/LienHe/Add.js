import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createLH } from "../../redux/actions/lienheAction";

const Add = () => {

    const [email, setEmail] = useState("");
    const [diaChi, setDiaChi] = useState("");
    const [soDienThoai, setSoDienThoai] = useState("");
    const dispatch = useDispatch();

    const Them = () => {
        const obj = {
            Email: email,
            DiaChi: diaChi,
            SoDienThoai: soDienThoai
        };
        dispatch(createLH(obj))
        alert("Thêm lien hệ thành công !")
        setEmail("")
        setDiaChi("")
        setSoDienThoai("")
    }

    return (
        <>
            <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" style={{ maxWidth: "600px" }}>
                    <div className="modal-content">
                        <div className="modal-header bg-primary text-white">
                            <h5 className="modal-title">Liên Hệ</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>

                        <div className="modal-body">
                            <form noValidate name="frmLoaiSP" id="frmLoaiSP" className="form-horizontal row-border">
                                <div className="form-group row">
                                    <label className="col-md-12 control-label" >Email : </label>
                                </div>
                                <div className="form-group row">
                                    <div className="col-md-12">
                                        <input type="text" id="idTenLoaiSanPham"
                                            className="form-control" name="TenLoaiSanPham"
                                            value={email}
                                            onChange={(event) => setEmail(event.target.value)} />
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label className="col-md-12 control-label" >Địa chỉ: </label>
                                    <input type="text" id="idTenLoaiSanPham"
                                        className="form-control" name="TenLoaiSanPham"
                                        value={diaChi}
                                        onChange={(event) => setDiaChi(event.target.value)} />
                                </div>
                                <div className="form-group row">
                                    <label className="col-md-12 control-label" >SĐT: </label>
                                    <input type="text" id="idTenLoaiSanPham"
                                        className="form-control" name="TenLoaiSanPham"
                                        value={soDienThoai}
                                        onChange={(event) => setSoDienThoai(event.target.value)} />
                                </div>

                                <div className="form-group row">
                                    <div className="col-md-12 text-center">
                                        <button id="save" className="btn btn-success" onClick={() => Them()}>
                                            <i className="icon-save">Thêm</i>
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>

                        <div className="modal-footer">
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Add;
