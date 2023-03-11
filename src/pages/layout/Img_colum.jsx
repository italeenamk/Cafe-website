import React from "react";
import './style/img_colum.css';
import colum_first_img from './imges/coffee-background-img.jpg';
import './style/mobile_style.css';

const Img_colum=()=>{
    return(
        <>
            <div className="container-fluid">
                <div className="row justify-content-center d-flex">
                    <div className="col-md-12">
                        <div className="main-header-text">
                            <h1>You will enjoy our cafe if you love...</h1>
                        </div>
                    </div>
                    {/*colum*/}
                </div>
            </div>
            {/*colum*/}
            <div className="container-fluid">
                <div className="row justify-content-center d-flex">
                    <div className="col-md-4 ">
                        <img src={ colum_first_img } alt="" className="img-fluid"/>
                    </div>
                    <div className="col-md-5">
                        <h3>Homely Atmosphere</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus consequatur<br/>
                            enim eveniet in ipsa officia perspiciatis quo quos repellendus repudiandae<br/>
                            enim eveniet in ipsa officia consectetur adipisicing elit.<br/>
                            perspiciatis quo?</p>
                        <button className="btn btn-danger">View More</button>
                    </div>
                </div>
            </div>
        </>
    )
}


export default Img_colum;