import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateTH } from "../../redux/actions/thuonghieuAction";
const Update = (props) => {
    const { dataEdit } = props
    console.log(dataEdit)
    const dispatch = useDispatch();

    const [tenThuongHieu, setTenThuongHieu] = useState("");
    const [gioiThieu, setGioiThieu] = useState("");

    useEffect(() => {
        if (dataEdit) {
            setTenThuongHieu(dataEdit.TenThuongHieu || "");
            setGioiThieu(dataEdit.GioiThieu || "");
        }
    }, [dataEdit]);
    const handleEdit = () => {
        const obj = {
            MaThuongHieu: dataEdit.MaThuongHieu,
            TenThuongHieu: tenThuongHieu,
            GioiThieu: gioiThieu
        };
        dispatch(updateTH(obj));
    };

    return (
        <>
            <div className="modal fade" id="exampleModal1" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" style={{ maxWidth: "600px" }}>
                    <div className="modal-content">
                        <div className="modal-header bg-primary text-white">
                            <h5 className="modal-title">Loại Sản Phẩm</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>

                        <div className="modal-body">
                            <form noValidate name="frmLoaiSP" id="frmLoaiSP" className="form-horizontal row-border">
                                <div className="form-group row">
                                    <label className="col-md-12 control-label">Tên Thương hiệu :</label>
                                </div>
                                <div className="form-group row">
                                    <div className="col-md-12">
                                        <input type="text" id="idTenLoaiSanPham"
                                            className="form-control" name="TenLoaiSanPham"
                                            value={tenThuongHieu}
                                            onChange={(event) => setTenThuongHieu(event.target.value)} />
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label className="col-md-12 control-label">Giới thiệu :</label>
                                    <textarea
                                        id="idTenLoaiSanPham"
                                        className="form-control"
                                        style={{ height: "200px", resize: "none" }}
                                        value={gioiThieu}
                                        onChange={(event) => setGioiThieu(event.target.value)}
                                    ></textarea>
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
