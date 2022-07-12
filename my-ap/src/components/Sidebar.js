import React from 'react';
import { SidebarData } from './SidebarData';
import '../App.css';

function Sidebar(){
    return(
        <div classname="Sidebar">
        <ul classname="SidebarList">
        {SidebarData.map((val,key)=>{
            return(
                <li key = {key}
                className = "row"
                 onClick = {() => {window.location.pathname = val.link}}>
                    {" "}
                    <div id="icon">{val.icon}</div>{" "}
                    <div id="title">
                        {val.title}
                    </div>
                </li>
            )
        })}
        </ul>
        </div>
    )
}
export default Sidebar;