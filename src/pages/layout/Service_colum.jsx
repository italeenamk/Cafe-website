import React from "react";
import colum_first_img from "./imges/coffee-shop-shop-coffee-cafe.jpg";
import './style/mobile_style.css';


const Service_colum=()=>{
    return(
        <>
            <div className="container-fluid mt-5 mb-5">
                <div className="row justify-content-center d-flex">
                    <div className="col-md-5">
                        <h3>Excellent Service</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus consequatur<br/>
                            enim eveniet in ipsa officia perspiciatis quo quos repellendus repudiandae<br/>
                            enim eveniet in ipsa officia consectetur adipisicing elit.<br/>
                            perspiciatis quo?</p>
                        <button className="btn btn-danger">More Info</button>
                    </div>
                    <div className="col-md-4 ">
                        <img src={ colum_first_img } alt="" className="img-fluid"/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Service_colum;