import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllThuonghieu, deleteTH } from "../../redux/actions/thuonghieuAction";
import Sidebar from "../../layout/sidebar";
import Add from "./Add";
const ThuongHieu = () => {
    const dispatch = useDispatch();

    const data = useSelector((state) => state.thuonghieu.ListThuongHieu)
    //const [dataLoaispEdit, setDataLoaispEdit] = useState({})
    useEffect(() => {
        dispatch(fetchAllThuonghieu());
    }, []);

    const Delete = (item) => {
        dispatch(deleteTH(item.MaThuongHieu))
    }
    return (
        <div className="w-100">
            <div className="row w-100 ml-0">
                <div className="col-2" style={{ minHeight: "100vh" }}>
                    <Sidebar />
                </div>

                <div className="col-10 pl-5 pr-2" style={{ backgroundColor: "#f1f2f6" }}>
                    <div className="content" style={{ width: "1200px" }}>
                        <div className="layout-page-customer">
                            <h3 className="text-center mb-3 font-weight-bold" data-aos="flip-right">Danh sách thương hiệu</h3>

                            <p className="text-muted font-13 m-b-30">
                                <button className="btn btn-primary fa fa-plus" data-toggle="modal" data-target="#exampleModal">Tạo mới</button>
                            </p>
                            <table className="table table-striped table-hover">
                                <thead className="thead-dark">
                                    <tr className="text-center">
                                        <th style={{ width: "10%" }}>#</th>
                                        <th style={{ width: "15%" }}>Tên TH</th>
                                        <th style={{ width: "65%" }}>Giới Thiệu</th>
                                        <th colSpan="2">Thao tác</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {data && data.length > 0 &&
                                        data.map((item, index) => (
                                            <tr key={index} className="text-center">
                                                <td>{index + 1}</td>
                                                <td>{item.TenThuongHieu}</td>
                                                <td>{item.GioiThieu}</td>
                                                <td className="w-100" colSpan="2">
                                                    <div className="btn-group" role="group">
                                                        <button type="button" className="btn btn-primary mx-1 btn-xs"

                                                            data-toggle="modal" data-target="#exampleModal1">
                                                            <i className="fas fa-edit"></i>
                                                        </button>
                                                        <button type="button" onClick={() => Delete(item)} className="btn btn-danger mx-1 btn-xs">
                                                            <i className="fas fa-trash-alt"></i>
                                                        </button>
                                                    </div>
                                                </td>
                                            </tr>
                                        ))
                                    }
                                </tbody>

                            </table>
                        </div>
                    </div>
                    <Add />
                </div>
            </div>
        </div>
    );
}

export default ThuongHieu;
