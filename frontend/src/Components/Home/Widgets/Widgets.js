import React from 'react';
import "./Widgets.css";
import{TwitterTimelineEmbed} from 'react-twitter-embed'
export const Widgets = () => {
  return (
    <div className='widgets'>
       <TwitterTimelineEmbed
       className="widgest_container"
  sourceType="profile"
  screenName="saurabhnemade"
  options={{height: 400}}
/>
    </div>
  )
}
export default Widgets;