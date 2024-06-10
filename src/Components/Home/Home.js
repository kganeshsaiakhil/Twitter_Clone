import React from 'react';
import Sidebar from './Sidebar/Sidebar';
import Feed from './Feed/Feed';
import "./Home.css";
import { Widgets } from './Widgets/Widgets';

export const Home = () => {
  return (
    <div className='home'>
        {/**Sidebar */}
        <Sidebar></Sidebar>

        {/**Feed */}
        <Feed></Feed>

        {/**Widgets */}
        <Widgets></Widgets>
    </div>
  )
}

export default Home;