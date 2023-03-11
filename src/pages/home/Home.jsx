import React from "react";
import Navbar from "../layout/Navbar";
import Slidebar from "../layout/Slidebar";
import Img_colum from "../layout/Img_colum";
import Service_colum from "../layout/Service_colum";

const Home=()=>{
    return(
        <>
            <Navbar/>
            <Slidebar/>
            <Img_colum/>
            <Service_colum/>
        </>
    )
}

export default Home;