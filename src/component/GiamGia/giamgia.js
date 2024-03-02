import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllGG, deleteGG } from "../../redux/actions/giamgiaAction";
import Sidebar from "../../layout/sidebar";
import Update from "./update";

const GiamGia = () => {
    const dispatch = useDispatch();
    const data = useSelector((state) => state.giamgia.ListGiamGia);
    const [dataEdit, setDataEdit] = useState({});
    const [rowSelected, setRowSelected] = useState(false);

    useEffect(() => {
        dispatch(fetchAllGG());
    }, []);

    const onRowClick = (item) => {
        setDataEdit(item);
        setRowSelected(true); // Đánh dấu rằng hàng đã được chọn
    };

    const handleDelete = () => {
        if (!rowSelected) {
            alert("Vui lòng chọn một hàng trước khi xóa!");
        } else {
            const confirmDelete = window.confirm(`Bạn có chắc chắn muốn xóa giảm giá này không?`);
            if (confirmDelete) {
                dispatch(deleteGG(dataEdit.MaGiamGia));
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
                            <h3 className="text-center mb-3 font-weight-bold" data-aos="flip-right">Danh sách thông tin giảm giá</h3>
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
                                        <th style={{ width: '20%' }}>#</th>
                                        <th style={{ width: '20%' }}>Tên SP</th>
                                        <th style={{ width: '20%' }}>Phần trăm </th>
                                        <th style={{ width: '20%' }}>Ngày BĐ</th>
                                        <th style={{ width: '20%' }}>Ngày KT</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {data && data.length > 0 &&
                                        data.map((item, index) => (
                                            <tr onClick={() => onRowClick(item)} key={index} className="text-center">
                                                <td>{index + 1}</td>
                                                <td>{item.TenSP}</td>
                                                <td>{item.PhanTram}</td>
                                                <td>{new Intl.DateTimeFormat('en-US').format(new Date(item.NgayBD))}</td>
                                                <td>{new Intl.DateTimeFormat('en-US').format(new Date(item.NgayKT))}</td>
                                            </tr>
                                        ))
                                    }
                                </tbody>

                            </table>
                        </div>
                    </div>
                    <Update dataEdit={dataEdit} />

                </div>
            </div>
        </div >
    );
}

export default GiamGia;
