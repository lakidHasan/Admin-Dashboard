import React from 'react';
import "./Widget.scss";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";

const Widget = () => {
    return (
        <div className='widget'>
            <div className="left">
                <span className="title">USERS</span>
                <span className="counter">2131</span>
                <span className="link">See All User</span>
            </div>
            <div className="right">
                <div className="percentage">
               <KeyboardArrowUpIcon />
                20%</div>
            </div>
            <PersonOutlinedIcon className='icon'/>
        </div>
    );
};

export default Widget;