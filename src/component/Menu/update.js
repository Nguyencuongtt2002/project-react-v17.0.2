import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateMN } from "../../redux/actions/menuAction";
const Update = ({ dataEdit }) => {
    //console.log(dataEdit)
    const dispatch = useDispatch();
    const [tenMenu, setTenMenu] = useState("");
    const [link, setLink] = useState("");
    useEffect(() => {
        if (dataEdit) {
            setTenMenu(dataEdit.TenMenu || "");
            setLink(dataEdit.Link || "");
        }
    }, [dataEdit]);
    const handleEdit = () => {
        const obj = {
            MaMenu: dataEdit.MaMenu,
            TenMenu: tenMenu,
            Link: link
        };
        dispatch(updateMN(obj));
        alert("Cập nhật thành công !")
    };

    return (
        <>
            <div className="modal fade" id="exampleModal1" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
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
                                        <button id="save" className="btn btn-success" onClick={handleEdit}>
                                            <span>Cập nhật</span>
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Update;
