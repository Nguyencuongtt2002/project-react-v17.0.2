import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateLoaisp } from "../../redux/actions/loaispAction";
const Update = ({ dataEdit }) => {
    console.log(dataEdit)
    const dispatch = useDispatch();
    const [email, setEmail] = useState("");
    const [diaChi, setDiaChi] = useState("");
    const [soDienThoai, setSoDienThoai] = useState("");
    useEffect(() => {
        if (dataEdit) {
            setEmail(dataEdit.Email || "");
            setDiaChi(dataEdit.DiaChi || "");
            setSoDienThoai(dataEdit.SoDienThoai || "");
        }
    }, [dataEdit]);
    const handleEdit = () => {
        const obj = {

        };
        dispatch(updateLoaisp(obj));
    };

    return (
        <>
            <div className="modal fade" id="exampleModal1" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" style={{ maxWidth: "600px" }}>
                    <div className="modal-content">
                        <div className="modal-header bg-primary text-white">
                            <h5 className="modal-title">Liên hệ</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>

                        <div className="modal-body">
                            <form noValidate name="frmLoaiSP" id="frmLoaiSP" className="form-horizontal row-border">
                                <div className="form-group row">
                                    <label className="col-md-12 control-label">Email :</label>
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
                                    <label className="col-md-12 control-label">Địa Chỉ :</label>
                                </div>
                                <div className="form-group row">
                                    <div className="col-md-12">
                                        <input type="text" id="idTenLoaiSanPham"
                                            className="form-control" name="TenLoaiSanPham"
                                            value={diaChi}
                                            onChange={(event) => setDiaChi(event.target.value)} />
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label className="col-md-12 control-label">SDT :</label>
                                </div>
                                <div className="form-group row">
                                    <div className="col-md-12">
                                        <input type="text" id="idTenLoaiSanPham"
                                            className="form-control" name="TenLoaiSanPham"
                                            value={soDienThoai}
                                            onChange={(event) => setSoDienThoai(event.target.value)} />
                                    </div>
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
