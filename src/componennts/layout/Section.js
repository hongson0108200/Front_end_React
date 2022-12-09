import React from "react";
import banner1 from "../../assets/images/banner1.webp";
import banner2 from "../../assets/images/banner2.webp";
import section from "../css/section.css";

function Section() {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6 card text-bg-ligth">
                    <img src={banner1} className="card-img " alt="..." />
                    <div className="card-img-overlay">
                        <h3 className="card-title">Big Sale Products</h3>
                        <h2 className="card-text">Plants <br />
                            For Interior</h2>
                    </div>
                </div>

                <div className="col-md-6 card text-bg-ligth" id="top_product">
                    <img src={banner2} className="card-img" alt="..." />
                    <div className="card-img-overlay">
                        <h3 className="card-title">Top Products</h3>
                        <h2 className="card-text">Plants <br />
                            For Healthy</h2>
                    </div>
                </div>

                {/* <div className="col-md-4 card text-bg-ligth" id="top_product">
                    <img src={banner2} className="card-img" alt="..." />
                    <div className="card-img-overlay">
                        <h3 className="card-title">Top Products</h3>
                        <h2 className="card-text">Plants <br />
                            For Healthy</h2>
                    </div>
                </div> */}
            </div>
        </div>
    )
}

export default Section;