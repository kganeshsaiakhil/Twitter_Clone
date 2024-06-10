import React from 'react'
import './Post.css';
import {Avatar} from '@mui/material'
import { MoreHoriz,
    ChatBubbleOutline,
    Repeat,
    FavoriteBorderOutlined,
    PublishOutlined,
} from '@mui/icons-material';

export const Post = () => {
  return (
    <div className='post'>
        <Avatar src='images/twitter_logo.png' className='post_avatar'></Avatar>
        <div className='post_content'>
        <div className='post_header'>
            <div className='post_titles'> 
            <h3>Akhil Kompella</h3>
            <h4>@kganeshsaiakhil</h4>
            </div>
           
            <MoreHoriz className='post_options'></MoreHoriz>

        </div>
        <div className='post_description'>
         A Drop of Water can fill the persons Thrust
        </div>
        <div className='post_media'>
            <img src='images/drop.jpeg' alt=''></img>
        </div>
        <div className='post_footer'>
            <ChatBubbleOutline fontSize='small'></ChatBubbleOutline>
            <Repeat fontSize='small'></Repeat>
            <FavoriteBorderOutlined fontSize='small'></FavoriteBorderOutlined>
            <PublishOutlined fontSize='small'></PublishOutlined>
            

        </div>
        </div>

    </div>
  )
}

export default Post;
