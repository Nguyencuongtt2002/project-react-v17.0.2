import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createMN } from "../../redux/actions/menuAction";

const Add = () => {

    const [tenMenu, setTenMenu] = useState("");
    const [link, setLink] = useState("");
    const dispatch = useDispatch();

    const Them = () => {
        const obj = {
            TenMenu: tenMenu,
            Link: link,
        };
        dispatch(createMN(obj))
        alert("Thêm menu thành công !")
        setTenMenu("")
        setLink("")
    }

    return (
        <>
            <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" style={{ maxWidth: "600px" }}>
                    <div className="modal-content">
                        <div className="modal-header bg-primary text-white">
                            <h5 className="modal-title">Menu</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>

                        <div className="modal-body">
                            <form noValidate name="frmLoaiSP" id="frmLoaiSP" className="form-horizontal row-border">
                                <div className="form-group row">
                                    <label className="col-md-12 control-label" >Tên Menu : </label>
                                </div>
                                <div className="form-group row">
                                    <div className="col-md-12">
                                        <input type="text" id="idTenLoaiSanPham"
                                            className="form-control" name="TenLoaiSanPham"
                                            value={tenMenu}
                                            onChange={(event) => setTenMenu(event.target.value)} />
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label className="col-md-12 control-label" >Link: </label>
                                    <input type="text" id="idTenLoaiSanPham"
                                        className="form-control" name="TenLoaiSanPham"
                                        value={link}
                                        onChange={(event) => setLink(event.target.value)} />
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
