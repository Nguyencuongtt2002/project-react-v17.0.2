import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllGT, deleteGT } from "../../redux/actions/gioithieuAction";
import Sidebar from "../../layout/sidebar";
import Add from "./Add";
import Update from "./update";
//import Update from "./update";

const GioiThieu = () => {
    const dispatch = useDispatch();
    const data = useSelector((state) => state.gioithieu.ListGioiThieu);
    const [dataEdit, setDataEdit] = useState({});
    const [rowSelected, setRowSelected] = useState(false);

    useEffect(() => {
        dispatch(fetchAllGT());
    }, []);

    const onRowClick = (item) => {
        setDataEdit(item);
        setRowSelected(true); // Đánh dấu rằng hàng đã được chọn
    };

    const handleDelete = () => {
        if (!rowSelected) {
            alert("Vui lòng chọn một hàng trước khi xóa!");
        } else {
            const confirmDelete = window.confirm(`Bạn có chắc chắn muốn xóa giới thiệu này không?`);
            if (confirmDelete) {
                dispatch(deleteGT(dataEdit.MaGioiThieu));
            }
        }
    };


    const hanleUpdate = () => {
        if (!rowSelected) {
            alert("Vui lòng chọn một hàng trước khi cập nhật!");
        } else {
            const toggle = rowSelected ? "modal" : "";
            const target = rowSelected ? "#exampleModal1" : "";
            const updateButton = document.getElementById("updateButton");
            updateButton.setAttribute("data-toggle", toggle);
            updateButton.setAttribute("data-target", target);
        }
    };

    return (
        <div className="w-100">
            <div className="row w-100 ml-0">
                <div className="col-2" style={{ minHeight: "100vh" }}>
                    <Sidebar />
                </div>
                <div className="col-10 pl-5 pr-2" style={{ backgroundColor: "#f1f2f6" }}>
                    <div className="content" style={{ width: "1200px" }}>
                        <div className="layout-page-customer">
                            <h3 className="text-center mb-3 font-weight-bold" data-aos="flip-right">Danh sách thông tin giới thiệu</h3>
                            <p className="text-muted font-13 m-b-30">
                                <button className="btn btn-primary fa fa-plus" data-toggle="modal" data-target="#exampleModal">Tạo mới</button>
                                <button id="updateButton" className="btn btn-warning btn-sm ml-2" onClick={() => hanleUpdate()}>
                                    <i className="fas fa-edit"></i> Cập nhật
                                </button>
                                <button className="btn btn-danger btn-sm ml-2" onClick={handleDelete}>
                                    <i className="fas fa-trash-alt"></i> Xóa
                                </button>
                            </p>

                            <table className="table table-bordered table-striped">
                                <thead className="thead-dark">
                                    <tr className="text-center">
                                        <th style={{ width: '5%' }}>#</th>
                                        <th style={{ width: '15%' }}>Tiêu Đề</th>
                                        <th style={{ width: '25%' }}>Nội Dung</th>
                                        <th style={{ width: '15%' }}>Hình Ảnh</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {data && data.length > 0 &&
                                        data.map((item, index) => (
                                            <tr onClick={() => onRowClick(item)} key={index} className="text-center">
                                                <td>{index + 1}</td>
                                                <td>{item.TieuDe}</td>
                                                <td>{item.NoiDung}</td>
                                                <td> <img
                                                    src={`/assets/Images/${item.HinhAnh}`}
                                                    alt="Hình ảnh"
                                                    style={{ width: '150px', height: '150px' }}
                                                /></td>
                                            </tr>
                                        ))
                                    }
                                </tbody>

                            </table>
                        </div>
                    </div>
                    <Add />
                    <Update dataEdit={dataEdit} />
                </div>
            </div>
        </div >
    );
}

export default GioiThieu;
