import React from 'react';
import "./Sidebar.scss";
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import Inventory2RoundedIcon from '@mui/icons-material/Inventory2Rounded';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import AssessmentIcon from '@mui/icons-material/Assessment';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import SettingsSystemDaydreamIcon from '@mui/icons-material/SettingsSystemDaydream';
import PsychologyIcon from '@mui/icons-material/Psychology';
import SettingsIcon from '@mui/icons-material/Settings';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import LogoutIcon from '@mui/icons-material/Logout';

const Sidebar = () => {
    return (
        <div className='sidebar'>
            <div className="top">
                <span className="logo">Sports Club</span>
            </div>
            <hr />
            <div className="center">
                <ul>
                    <p className="title">Main</p>
                    <li>
                        <DashboardIcon className='icon'/>
                        <span>Dashboard</span>
                    </li>
                    <p className="title">List</p>
                    <li>
                        <PersonOutlineOutlinedIcon className='icon'/>
                    <span>Users</span>
                    </li>
                    <li>
                        <Inventory2RoundedIcon className='icon'/>
                        <span>Products</span>
                        </li>
                    <li>
                        <BorderColorIcon className='icon'/>
                        <span>Orders</span>
                        </li>
                    <li>
                        <LocalShippingIcon className='icon'/>
                        <span>Deleivery</span>
                        </li>
                        <p className="title">Useful</p>
                    <li>
                        <AssessmentIcon className='icon'/>
                        <span>Statis</span>
                        </li>
                    <li>
                        <NotificationsNoneIcon className='icon'/>
                        <span>Notificafion</span>
                        </li>
                        <p className="title">Services</p>
                    <li>
                        <SettingsSystemDaydreamIcon className='icon'/>
                        <span>System Health</span>
                    </li>
                    <li>
                        <PsychologyIcon className='icon'/>
                        <span>Logs</span>
                        </li>
                    <li>
                        <SettingsIcon className='icon' />
                        <span>Settings</span>
                    </li>
                    <p className="title">User</p>
                    <li>
                        <AssignmentIndIcon className='icon' />
                        <span>Profile</span>
                        </li>
                    <li>
                        <LogoutIcon className='icon' />
                        <span>Logout</span>
                        </li>
                </ul>
            </div>
            <div className="buttom">
                <div className="colorOption"></div>
                <div className="colorOption"></div>
            </div>
        </div>
    );
};

export default Sidebar;