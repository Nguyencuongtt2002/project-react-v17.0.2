import React from "react";


const Sidebar = () => {
    return (
        <>
            <nav className="sidebar" id="sidebar-nav">
                <div className="text py-3">
                    <div className="mb-2">
                        {/* Thêm đường dẫn và alt cho hình ảnh */}
                        <img src="/assets/Images/logo.jpg" alt="Logo" style={{ width: "50px", height: "50px", borderRadius: "50%" }} />
                    </div>
                    {/* Thêm nội dung cho thẻ h3 */}
                    <h3>Website của tôi</h3>
                </div>
            </nav >
        </>
    );
}

export default Sidebar;
