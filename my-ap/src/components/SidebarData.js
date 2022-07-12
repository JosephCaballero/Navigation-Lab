import React from 'react';
import HomeIcon from '@mui/icons-material/Home';
import MailIcon from '@mui/icons-material/Mail';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PeopleIcon from '@mui/icons-material/People';
import CropOriginalIcon from '@mui/icons-material/CropOriginal';

export const SidebarData =[
    {
        title: "Home",
        icon: <HomeIcon/>,
        link: "/home"
    },
    {
        title: "Mail",
        icon: <MailIcon/>,
        link: "/mail"
    },
    {
        title: "Analytics",
        icon: <AnalyticsIcon/>,
        link: "/Analytics"
    },
    {
        title: "Dashboard",
        icon: <DashboardIcon/>,
        link: "/dashboard"
    },
    {
        title: "People",
        icon: <PeopleIcon/>,
        link: "/people"
    },
    {
        title: "CropOriginal",
        icon: <CropOriginalIcon/>,
        link: "/CropOriginal"
    },
]