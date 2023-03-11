import React from "react";
import './style/slidebar.css';
import card_icon from './imges/free-time-icon.png';
import './style/mobile_style.css';
import background_img from './imges/scifi-city-sunset.jpg';

const Slidebar=()=>{
    return(
        <>
            <div className="main">
                {/*colum-text*/}
                <div className="container-fluid">
                    <div className="row slide-bar-row">
                        <div className="">
                            <div className="col-md-12 text-center">
                                <span>WHAT TO HAVE A GOOD TIME AND TO DRINK SOME COFFEE?</span>
                                <h1>COME TO OUR CAFE</h1>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium consequatur consequuntur cupiditate deleniti
                                    dolorem hic illo ipsa iusto laborum sunt vel vero!</p>
                                <button className="btn ">Read More</button>
                            </div>
                        </div>
                    </div>
                </div>
                {/*colum-card*/}

                <div className="container-fluid">
                    <div className="row justify-content-center">
                        <div className="cards">
                            <div className="justify-content-center d-flex flex-wrap">
                                <div className="col-md-3 col-sm-12  text-center">
                                    <div className="card">
                                        <div className="card-body">
                                            <img src={ card_icon } alt=""/>
                                            <h3>Tasty Coffee</h3>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam ratione reprehenderit
                                                unde velit? Ab culpa, ducimus illum omnis voluptatum!</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3 col-sm-12 text-center">
                                    <div className="card light-card">
                                        <div className="card-body">
                                            <img src={ card_icon } alt=""/>
                                            <h3>Fast Cooking</h3>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam ratione reprehenderit
                                                unde velit? Ab culpa, ducimus illum omnis voluptatum!</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3 col-sm-12 text-center">
                                    <div className="card">
                                        <div className="card-body">
                                            <img src={ card_icon } alt=""/>
                                            <h3>Free Devilery</h3>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam ratione reprehenderit
                                                unde velit? Ab culpa, ducimus illum omnis voluptatum!</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Slidebar;