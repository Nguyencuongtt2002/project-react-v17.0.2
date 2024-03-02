import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllLH, deleteLH } from "../../redux/actions/lienheAction";
import Sidebar from "../../layout/sidebar";
import Add from "./Add";
import Update from "./update";

const LienHe = () => {
    const dispatch = useDispatch();
    const data = useSelector((state) => state.lienhe.ListLienHe);
    const [dataEdit, setDataEdit] = useState({});
    const [rowSelected, setRowSelected] = useState(false);

    useEffect(() => {
        dispatch(fetchAllLH());
    }, []);

    const onRowClick = (item) => {
        setDataEdit(item);
        setRowSelected(true); // Đánh dấu rằng hàng đã được chọn
    };

    const handleDelete = () => {
        if (!rowSelected) {
            alert("Vui lòng chọn một hàng trước khi cập nhật!");
        } else {
            const confirmDelete = window.confirm(`Bạn có chắc chắn muốn xóa Email:${dataEdit.Email} không?`);
            if (confirmDelete) {
                dispatch(deleteLH(dataEdit.MaLienHe));
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
                            <h3 className="text-center mb-3 font-weight-bold" data-aos="flip-right">Danh sách loại sản phẩm</h3>
                            <p className="text-muted font-13 m-b-30">
                                <button className="btn btn-primary fa fa-plus" data-toggle="modal" data-target="#exampleModal">Tạo mới</button>
                                <button id="updateButton" className="btn btn-warning btn-sm ml-2" onClick={() => hanleUpdate()}>
                                    <i className="fas fa-edit"></i> Cập nhật
                                </button>
                                <button className="btn btn-danger btn-sm ml-2" onClick={handleDelete}>
                                    <i className="fas fa-trash-alt"></i> Xóa
                                </button>
                            </p>

                            <table className="table table-striped table-hover">
                                <thead className="thead-dark">
                                    <tr className="text-center">
                                        <th style={{ width: '5%' }}>STT</th>
                                        <th style={{ width: '15%' }}>Email</th>
                                        <th style={{ width: '25%' }}>Địa Chỉ</th>
                                        <th style={{ width: '15%' }}>Số Điện thoại</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {data && data.length > 0 &&
                                        data.map((item, index) => (
                                            <tr onClick={() => onRowClick(item)} key={index} className="text-center">
                                                <td>{index + 1}</td>
                                                <td>{item.Email}</td>
                                                <td>{item.DiaChi}</td>
                                                <td>{item.SoDienThoai}</td>
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

export default LienHe;
