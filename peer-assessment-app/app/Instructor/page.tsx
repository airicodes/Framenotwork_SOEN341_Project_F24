'use client'
import React from "react";
import Sidebar from "./components/Sidebar";
import { Dehaze } from "@mui/icons-material";
import Box from "@mui/material/Box";
import AccountMenu from "./components/AccountMenu";
import List from "./components/List";


export default function Home() {

    function openSidebar() {

            const sidebar = document.getElementById("sidebar");
            const navbar = document.getElementById("main-container");
            const button = document.getElementById("openbtn");
            if ( sidebar!== null && navbar !== null && button !== null){
                    sidebar.style.width = "200px";
                    navbar.style.marginLeft = "200px"
                    button.style.visibility = "hidden";
            }
    }

    return(
        <>
        <div id="main-container">
            <div style={{paddingTop: "10px", paddingBottom: "10px", paddingLeft: "10px", width: "100%", backgroundColor:"#111"}}>
                <button id="openbtn" className="openbtn" onClick={openSidebar}><Dehaze/></button>
                <AccountMenu></AccountMenu>
            </div>
            <Box sx={{padding: "20px"}}>
                <List />
            </Box>
        </div>
        
        <Sidebar/>
        
        </>
    );
}
