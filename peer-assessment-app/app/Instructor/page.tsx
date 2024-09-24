'use client'
import React from "react";
import Sidebar from "./components/Sidebar";
import { Dehaze } from "@mui/icons-material";
import Box from "@mui/material/Box";
import { Avatar } from "@mui/material";
import AccountMenu from "./components/AccountMenu";


export default function Home() {

    const courses = [{name: "SOEN 341", Instructor: "Mathieu Pare Vargas"}, {}];


    function openSidebar() {

            const sidebar = document.getElementById("sidebar");
            const navbar = document.getElementById("navbar");
            const button = document.getElementById("openbtn");
            if ( sidebar!== null && navbar !== null && button !== null){
                    sidebar.style.width = "200px";
                    navbar.style.marginLeft = "200px"
                    button.style.visibility = "hidden";
            }
    }

    return(
        <>
        <div id="navbar">
            <div style={{paddingTop: "10px", paddingBottom: "10px", paddingLeft: "10px", width: "100%", backgroundColor:"#111"}}>
                <button id="openbtn" className="openbtn" onClick={openSidebar}><Dehaze/></button>
                <AccountMenu></AccountMenu>
                {/* <button style={{float: "right", marginRight: "20px"}}><Avatar >M</Avatar></button> */}
            </div>
            <Box sx={{padding: "15px"}}>
                Hello
            </Box>
        </div>
        
        <Sidebar/>
        
        </>
    );
}
