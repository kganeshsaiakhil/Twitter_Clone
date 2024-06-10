import React from 'react'
import './TweetBox.css'
import {Avatar, Button} from '@mui/material'
import { CalendarTodayOutlined, GifBoxOutlined, ImageOutlined, LocationOnOutlined, PollOutlined, SentimentSatisfiedAltOutlined } from '@mui/icons-material'

export const TweetBox = () => {
  return (
    <div className='tweetbox'>
    <form className='tweetbox_form'>
    <Avatar></Avatar>
    <div className='tweetbox_form_field'>
    <div className='tweetbox_inputfield'>
        <div className='tweetbox_input'>
            <input type="text" placeholder="What's happening?"></input>
        </div>
        <div className='tweetbox_input'>
            <div className='tweetbox_icons'>
                <ImageOutlined  className='tweetbox_icon'></ImageOutlined>
                <GifBoxOutlined className='tweetbox_icon'></GifBoxOutlined>
                <PollOutlined className='tweetbox_icon'></PollOutlined>
                <SentimentSatisfiedAltOutlined className='tweetbox_icon'></SentimentSatisfiedAltOutlined>
                <CalendarTodayOutlined className='tweetbox_icon'></CalendarTodayOutlined>
                <LocationOnOutlined className='tweetbox_icon'></LocationOnOutlined>
            </div>
            <Button className='twweetbox_button'>Tweet</Button>
            
        </div>
     </div>
    </div>
    </form>
    </div>
  )
}
