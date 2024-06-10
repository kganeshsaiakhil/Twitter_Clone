import React from 'react'
import "./Feed.css";
import { TweetBox } from './TweetBox/TweetBox';
import { Post } from './Post/Post';

const Feed = () => {
  return (
    <div className='feed'>
        <header className='feed_header'>
        <h2>Home</h2>
        </header>
        <TweetBox></TweetBox>
        <Post></Post>
        <Post></Post>
      
    </div>
  )
}

export default Feed