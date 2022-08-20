import React from 'react'
import './header.css';
import img from './man.jpg'
import {AiFillLinkedin,AiFillGithub,AiFillFacebook} from 'react-icons/ai'
const Header = () => {
  return (
    <header>
        <div className="container">
            <div className="center">
                <div className="info">
                    <h5>Hello,i'm</h5>
                    <h1>Peter Khalil</h1>
                    <h5 className='jobTitle'>Fullstack Developer</h5>
                </div>
                
                <div className="cta">
                    <a href="#" className='btn'>Download CV</a>
                    <a href="#" className='btn btn-primary'>Let's talk</a>
                </div>
                <div className="me">
                    <img src={img} alt="" />
                </div>
            </div>
            <div className="box">
                <div className="social">
                    <a href=""><AiFillLinkedin/></a>
                    <a href=""><AiFillGithub/></a>
                    <a href=""><AiFillFacebook/></a>
                </div>
                <a href="" className="scroll_down">scroll down</a>
            </div>
            
        </div>
    </header>
  );
}

export default Header