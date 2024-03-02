import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllLoaisp, deleteLoaisp } from "../../redux/actions/loaispAction";
import Sidebar from "../../layout/sidebar";
import Add from "./Add";
import Update from "./update";
const Home = () => {
    const dispatch = useDispatch();
    const data = useSelector((state) => state.loaisp.ListLoaisp)
    const [dataLoaispEdit, setDataLoaispEdit] = useState({})
    useEffect(() => {
        dispatch(fetchAllLoaisp());
    }, []);

    const Delete = (item) => {
        dispatch(deleteLoaisp(item.MaLoaiSanPham))
    }

    const hanleUpdate = (item) => {
        setDataLoaispEdit(item);
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
                            <h3 className="text-center mb-3 font-weight-bold" data-aos="flip-right">Danh sách loại sản phẩm</h3>

                            <p className="text-muted font-13 m-b-30">
                                <button className="btn btn-primary fa fa-plus" data-toggle="modal" data-target="#exampleModal">Tạo mới</button>
                            </p>
                            <p>Tổng có :{data.length} loại sản phẩm </p>
                            <table className="table table-striped table-hover">
                                <thead className="thead-dark">
                                    <tr className="text-center">
                                        <th style={{ width: "10%" }}>Mã Loại</th>
                                        <th style={{ width: "15%" }}>Tên Loại</th>
                                        <th style={{ width: "65%" }}>Giới Thiệu</th>
                                        <th colSpan="2">Thao tác</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {data && data.length > 0 &&
                                        data.map((item, index) => (
                                            <tr key={index} className="text-center">
                                                <td>{index + 1}</td>
                                                <td>{item.TenLoaiSanPham}</td>
                                                <td>{item.GioiThieu}</td>
                                                <td className="w-100" colSpan="2">
                                                    <div className="btn-group" role="group">
                                                        <button type="button" className="btn btn-primary mx-1 btn-xs"
                                                            onClick={() => hanleUpdate(item)}
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
                    <Update
                        dataLoaispEdit={dataLoaispEdit}
                    />
                </div>
            </div>
        </div>
    );
}

export default Home;
