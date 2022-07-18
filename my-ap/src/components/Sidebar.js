import React from 'react';
import { SidebarData,ulStyle } from './SidebarData';
import '../App.css';


function Sidebar(){
    return(
        <div className="Sidebar">
        <h1>
        Asset Manager
        </h1>
        <ul style={ulStyle} className="SidebarList">
        {SidebarData.map((val,key)=>{
            return(
                <div className = "Hover">
                <li key = {key}
                className = "row"
                 onClick = {() => {window.location.pathname = val.link}}>
                    {" "}
                    <div className = "Icon" id="icon">{val.icon}</div>{""}
                    <div className = "Title" id="title">
                        {val.title}
                    </div>
                </li>
                </div>
            )
        })}
        </ul>
        </div>
    )
}
export default Sidebar;