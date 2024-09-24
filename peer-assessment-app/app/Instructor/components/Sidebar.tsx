'use client'
import Divider from '@mui/material/Divider';
import DehazeIcon from '@mui/icons-material/Dehaze';
import "./style.css";
import React from 'react';


export default function Sidebar() {

    // const [width, setWidth] = useState("0px");

    function closeSidebar() {

            const sidebar = document.getElementById("sidebar");
            const navbar = document.getElementById("navbar");
            const button = document.getElementById("openbtn");
            if ( sidebar!== null && navbar !== null && button !== null){
                    sidebar.style.width = "0px";
                    navbar.style.marginLeft = "0px";
                    button.style.visibility = "visible";
                }
            }


    return(
        <div className='sidebar' id='sidebar'>
            <a href='#' className='closebtn' onClick={closeSidebar}><DehazeIcon/></a>
            <a href='#'>Dashboard</a>
            <Divider sx={{backgroundColor: 'white'}} variant='middle' />
            <a href='#'>My Course</a>
            <a href='#'>My Profile</a>
        </div>
    );
}
