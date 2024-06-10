import React from 'react';
import './SidebarOption.css';

export const SidebarOption = (props) => {
    const{text, Icon,active} =props;
  return (
    <div className={'sidebar_option ${active && "sidebar_option_active"}'}>
        <Icon className="sidebar_option_icon" />
        <h2>{text}</h2>
    </div>
  )
}
