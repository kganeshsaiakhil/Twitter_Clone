import React from 'react';
import "./Sidebar.css";
import { SidebarOption } from './SidebarOption/SidebarOption';
import {
  BookmarkBorder,
  Home,
  ListAlt,
  MailOutline,
  MoreHoriz,
  NotificationsNone,
  PermIdentity,
  Search,
  Twitter} from '@mui/icons-material';

  import { Button } from '@mui/material';

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <Twitter className='sidebar_twitter_icon'></Twitter>
        
        <SidebarOption active Icon={Home} text='Home'></SidebarOption>
        <SidebarOption  Icon={Search} text='Explore'></SidebarOption>
        <SidebarOption  Icon={NotificationsNone} text='Notifications'></SidebarOption>
        <SidebarOption  Icon={MailOutline} text='Messages'></SidebarOption>
        <SidebarOption  Icon={BookmarkBorder} text='BookMarks'></SidebarOption>
        <SidebarOption  Icon={ListAlt} text='Lists'></SidebarOption>
        <SidebarOption  Icon={PermIdentity} text='Profile'></SidebarOption>
        <SidebarOption  Icon={MoreHoriz} text='More'></SidebarOption>

        <Button className="sidebar_twitter_btn" variant="outlined" fullWidth>
          Tweet
        </Button>
      
    
    </div>
    
  );
};

export default Sidebar;