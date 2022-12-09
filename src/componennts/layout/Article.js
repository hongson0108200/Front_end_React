import React from "react";
import product1 from "../../assets/images/product1.webp";
import product2 from "../../assets/images/product3.webp";
import product3 from "../../assets/images/product7.webp";
import product4 from "../../assets/images/product8.webp";
import { CiStar } from "react-icons/ci";
import article from "../css/article.css"

function Article() {
    return (
        <div className="container">
            <div className="text_product">
                <h2>Our Products</h2>
            </div>
            <div className="row">
                <div className="col-md-3" >
                    <div className="card" style={{ width: "18rem" }}>
                        <img src={product1} className="card-img-top" alt="..." />
                        <lable className="abc">abc</lable>
                        <div className="card-body">
                            <div className="product_rating">
                                <a href="">
                                    <i className="icon-star"><CiStar /></i>
                                    <i className="icon-star"><CiStar /></i>
                                    <i className="icon-star"><CiStar /></i>
                                    <i className="icon-star"><CiStar /></i>
                                    <i className="icon-star"><CiStar /></i>
                                </a>
                            </div>

                            <div className="product_name">
                                <a href="#">
                                    <h5>Adipiscing cursus</h5>
                                </a>
                            </div>

                            <div className="price_box">$60.00</div>
                        </div>
                    </div>
                </div>

                <div className="col-md-3">
                    <div className="card" style={{ width: "18rem" }}>
                        <img src={product2} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <div className="product_rating">
                                <a href="">
                                    <i className="icon-star"><CiStar /></i>
                                    <i className="icon-star"><CiStar /></i>
                                    <i className="icon-star"><CiStar /></i>
                                    <i className="icon-star"><CiStar /></i>
                                    <i className="icon-star"><CiStar /></i>
                                </a>
                            </div>

                            <div className="product_name">
                                <a href="#">
                                    <h5>Adipiscing cursus</h5>
                                </a>
                            </div>

                            <div className="price_box">$60.00</div>

                        </div>
                    </div>
                </div>

                <div className="col-md-3">
                    <div className="card" style={{ width: "18rem" }}>
                        <img src={product3} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <div className="product_rating">
                                <a href="">
                                    <i className="icon-star"><CiStar /></i>
                                    <i className="icon-star"><CiStar /></i>
                                    <i className="icon-star"><CiStar /></i>
                                    <i className="icon-star"><CiStar /></i>
                                    <i className="icon-star"><CiStar /></i>
                                </a>
                            </div>

                            <div className="product_name">
                                <a href="#">
                                    <h5>Adipiscing cursus</h5>
                                </a>
                            </div>

                            <div className="price_box">$60.00</div>
                        </div>
                    </div>
                </div>

                <div className="col-md-3">
                    <div className="card" style={{ width: "18rem" }}>
                        <img src={product4} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <div className="product_rating">
                                <a href="">
                                    <i className="icon-star"><CiStar /></i>
                                    <i className="icon-star"><CiStar /></i>
                                    <i className="icon-star"><CiStar /></i>
                                    <i className="icon-star"><CiStar /></i>
                                    <i className="icon-star"><CiStar /></i>
                                </a>
                            </div>

                            <div className="product_name">
                                <a href="#">
                                    <h5>Adipiscing cursus</h5>
                                </a>
                            </div>

                            <div className="price_box">$60.00</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Article;