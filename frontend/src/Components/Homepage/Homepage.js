import React from 'react'
import "./Homepage.css";

const Homepage = () => {
  return (
    <div className='homepage'>
      <div className='homepage_top'>
        <div className='homepage_top_leftside'> 
          <img className='homepage_top_leftside_img' 
          src = "/images/twitter_home.jpeg"
          alt="twitter_home"></img></div>

        <div className='homepage_top_rightside'>
          <img className='homepage_rightside_img'
          src = "/images/twitter_logo.png"
          alt = "logo"></img>   
          <h1 className='homepage_top_rightside_title'>Happening now</h1>    
          <h2 className = 'homepage_top_rightside_subtitle'>Join Twitter today.</h2>

          <div className='homepage_top_rightside_auth_buttons'> 
            <button className='primary_button'>Signup with Google</button>
            <button className='primary_button'>Signup with Apple</button>
            <button className='secondary_button'>Signup with Phone or email</button>

            <p className='homepage_top_rightside_terms'>
              By Signing up, you agree to the <a href='#'>Terms of service</a> and <a href='#'>Privacy Policy </a>
              Including <a href='#'>Cookie Use</a>
            </p>
          </div> 

            <div className='homepage_top_rightside_auth_buttons'>
              <h3>Already have an account?</h3>
              <button className='primary_button'>Sign In</button>
            </div>
        </div>
      </div>

          <footer className='footer'>
          <ul className='footer_list'>
            <li className='footer_list_items'>
            <a href='/'>About</a>
            </li>
            <li className='footer_list_items'>
            <a href='/'>Help Center</a>
            </li>
            <li className='footer_list_items'>
            <a href='/'>Terms of service</a>
            </li>
            <li className='footer_list_items'>
            <a href='/'>Privacy Policy</a>
            </li>
            <li className='footer_list_items'>
              <a href='/'>Cookie Policy</a>
            </li>
            <li className='footer_list_items'>
              <a href='/'>Accessability</a>
            </li>
            <li className='footer_list_items'>
              <a href='/'>Ads Info</a>
            </li>
            <li className='footer_list_items'>
              <a href='/'>Terms of Service</a>
            </li>
            <li className='footer_list_items'>
            <a href='/'>Blogs</a>
            </li>
            <li className='footer_list_items'>
            <a href='/'>Status</a>
            </li>
            <li className='footer_list_items'>
              <a href='\'>Careers</a>
            </li>
            <li className='footer_list_items'>
            <a href='/'>Brand Resources</a>
            </li>
            <li className='footer_list_items'>
            <a href='/'>Advertising</a>
            </li>
            <li className='footer_list_items'> 
              <a href='\'>Twitter For Business</a>
            </li>
            <li className='footer_list_items'>
              <a href='\'>Developers</a>
            </li>
            <li className='footer_list_items'>
              <a href='\'>Directory</a>
            </li>
        
            </ul>
           <p className='footer_settings'>
           <a href='/'>Settings</a>
           <span>&copy;Kompella Ganesh Sai Akhil's Twitter Clone</span>
           </p>
       
  
          </footer>
       
    </div>
  )
}

export default Homepage