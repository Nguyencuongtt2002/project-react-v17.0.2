import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateGT } from "../../redux/actions/gioithieuAction";

const Update = ({ dataEdit }) => {
    //console.log(dataEdit)
    const dispatch = useDispatch();
    const [tieuDe, setTieuDe] = useState("");
    const [noiDung, setNoiDung] = useState("");
    const [hinhAnh, setHinhAnh] = useState("");

    useEffect(() => {
        if (dataEdit) {
            setTieuDe(dataEdit.TieuDe || "");
            setNoiDung(dataEdit.NoiDung || "");
            setHinhAnh(dataEdit.HinhAnh || "");
        }
    }, [dataEdit]);
    const onFileChange = (event) => {
        const fileList = event.target.files;
        if (fileList.length > 0) {
            setHinhAnh(fileList[0]);
        }
    };
    const handleEdit = () => {
        let formData = new FormData();
        formData.append('MaGioiThieu', dataEdit.MaGioiThieu)
        formData.append('TieuDe', tieuDe);
        formData.append('NoiDung', noiDung);
        formData.append('files', hinhAnh);
        dispatch(updateGT(formData))
        alert("Cập nhật giới thiệu thành công !")

    }

    return (
        <>
            <div className="modal fade" id="exampleModal1" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" style={{ maxWidth: "600px" }}>
                    <div className="modal-content">
                        <div className="modal-header bg-primary text-white">
                            <h5 className="modal-title">Giới Thiệu</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>

                        <div className="modal-body">
                            <form noValidate name="frmLoaiSP" id="frmLoaiSP" className="form-horizontal row-border">
                                <div className="form-group row">
                                    <label className="col-md-12 control-label" >Tiêu Đề : </label>
                                </div>
                                <div className="form-group row">
                                    <div className="col-md-12">
                                        <input type="text" id="idTenLoaiSanPham"
                                            className="form-control" name="TenLoaiSanPham"
                                            value={tieuDe}
                                            onChange={(event) => setTieuDe(event.target.value)} />
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label className="col-md-12 control-label" >Nội Dung: </label>
                                    <div className="col-md-12">
                                        <textarea
                                            id="idTenLoaiSanPham"
                                            className="form-control"
                                            style={{ height: "200px", resize: "none" }}
                                            value={noiDung}
                                            onChange={(event) => setNoiDung(event.target.value)}
                                        ></textarea>
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label className="col-md-12 control-label" >Hình Ảnh: </label>
                                    <div className="col-md-12">
                                        {/* Input loại 'file' trong React */}
                                        <input
                                            type="file"
                                            id="idTenLoaiSanPham"
                                            className="form-control"
                                            name="TenLoaiSanPham"
                                            onChange={onFileChange} // Xử lý sự kiện onChange
                                        />
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <div className="col-md-12 text-center">
                                        <button id="save" className="btn btn-success" onClick={handleEdit}>
                                            <i className="icon-save">Cập nhật</i>
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

export default Update;
