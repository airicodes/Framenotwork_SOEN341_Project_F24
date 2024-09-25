'use client'
import React, { useState } from "react";
// import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import Box from "@mui/material/Box";
import CourseCard from "./components/Course"
// import { Divider, Stack, Typography } from "@mui/material";
// import { Padding } from "@mui/icons-material";
import StudentList from "./components/StudentList";
import LeftSidebar from "./components/LeftSidebar";

export default function Home() {

    // const users = [ 
    //     "Mathieu Pare Vargas", 
    //     "Trevys Fiorito Theriault", 
    //     "Hocine Ait-Mohoub", 
    //     "Samuel Giroux", 
    //     "Sami Jouamaa Deshautels", 
    //     "Julien Gregoire",
    //     "Evan Teboul",
    //     "Tim Whatever",
    //     "Bulat Abdulin",
    //     "Jeremy Idk ",
    //     "Jee I forgot"
    // ];

    // const components = []

    // users.forEach((user)=>{
    //     components.push(StudentCard(user))
    // });

    const [course, setCourse] = useState(true);
    const showList = () => {
        setCourse(false);
    }

    return(
        <>
        {/* <Box sx={{display: "flex", flexWrap: "wrap",border: "2px solid white", margin: "80px", padding: "30px 30px 30px 30px",  gap:"7px"}}> */}
            {/* <Stack direction="row" divider={<Divider orientation="vertical" flexItem />} spacing={2} useFlexGap sx={{ flexWrap: "wrap" }}>
                {...components}
            </Stack> */}
            {/* <Typography></Typography>
            <StudentList/>
        </Box> */}

        {/* This is a template of the course dashboard to be implemented later */}
        <LeftSidebar />

        {course?<Box sx={{display: "flex", flexWrap: "wrap", margin: "20px", padding: "10px", gap:"7px"}}>
            <CourseCard onClick={showList}/></Box>:<StudentList/>}
        
        {/* <Sidebar/> */}
        
        </>
    );
}
