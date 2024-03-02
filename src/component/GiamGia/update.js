import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateGG } from "../../redux/actions/giamgiaAction";
import { fetchAllSanPham } from "../../redux/actions/sanphamAction";
const Update = ({ dataEdit }) => {
    console.log(dataEdit)
    const dispatch = useDispatch();
    const [maSanPham, setMaSanPham] = useState("");
    const [phamTram, setPhanTram] = useState("");
    const [ngayBD, setNgayBD] = useState("");
    const [ngayKT, setNgayKT] = useState("");
    const data = useSelector((state) => state.sanpham.ListSanPham);
    const formatDate = (date) => {
        const originalDate = new Date(date);
        originalDate.setDate(originalDate.getDate() + 1);
        const formattedDate = originalDate.toISOString().slice(0, 10);
        return formattedDate;
    }
    useEffect(() => {
        if (dataEdit) {
            setMaSanPham(dataEdit.MaSanPham || "");
            setPhanTram(dataEdit.PhanTram || "");
            setNgayBD(dataEdit.NgayBD ? formatDate(dataEdit.NgayBD) : "");
            setNgayKT(dataEdit.NgayKT ? formatDate(dataEdit.NgayKT) : "");
            dispatch(fetchAllSanPham());
        }
    }, [dataEdit]);
    const handleEdit = () => {
        const obj = {
            MaGiamGia: dataEdit.MaGiamGia,
            MaSanPham: maSanPham,
            PhanTram: phamTram,
            NgayBD: ngayBD,
            NgayKT: ngayKT
        };
        dispatch(updateGG(obj));
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
                                    <label className="col-md-12 control-label">Tên Sản Phẩm :</label>
                                </div>
                                <div className="form-group row">
                                    <div className="col-md-12">
                                        <select className="form-control" id="MaSanPham" name="MaSanPham" value={maSanPham} onChange={(event) => setMaSanPham(event.target.value)} >
                                            <option value="" disabled selected>Chọn  sản phẩm</option>
                                            {data.map(item => (
                                                <option key={item.MaSanPham} value={item.MaSanPham}>{item.TenSP}</option>
                                            ))}
                                        </select>
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label className="col-md-12 control-label">Phần Trăm :</label>
                                </div>
                                <div className="form-group row">
                                    <div className="col-md-12">
                                        <input type="text" id="idTenLoaiSanPham"
                                            className="form-control" name="TenLoaiSanPham"
                                            value={phamTram}
                                            onChange={(event) => setPhanTram(event.target.value)} />
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label className="col-md-12 control-label">Ngày BĐ :</label>
                                </div>
                                <div className="form-group row">
                                    <div className="col-md-12">
                                        <input type="date" id="idTenLoaiSanPham"
                                            className="form-control" name="TenLoaiSanPham"
                                            value={ngayBD}
                                            onChange={(event) => setNgayBD(event.target.value)} />
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label className="col-md-12 control-label">Ngày KT :</label>
                                </div>
                                <div className="form-group row">
                                    <div className="col-md-12">
                                        <input type="date" id="idTenLoaiSanPham"
                                            className="form-control" name="TenLoaiSanPham"
                                            value={ngayKT}
                                            onChange={(event) => setNgayKT(event.target.value)} />
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
