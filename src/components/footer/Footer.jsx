import React from 'react';
import { NavLink } from 'react-router-dom';
import { BsFacebook, BsTwitter } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";
import './Footer.css'

const Footer = () => {
    return (
        <>
            <div className="container-fluid p-5 footer">
                <div className="row">
                    <div className="col-12 d-flex justify-content-between">
                        <div className="col-3 d-grid align-items-center">
                        <NavLink className="logo mx-5" >Kachchi <span className='logo-color'>Palace</span></NavLink>
                        </div>
                        <div className="col-3">
                            <h4>Follow Us</h4>
                            <ul className='navbar-nav gap-2 text'>

                                <li className='navbar-item'><a className='custom-link'><span className=' me-2'><BsFacebook/></span> Facebook</a></li>

                                <li className='navbar-item'><a className='custom-link'><span className='me-2'><AiFillInstagram /></span> Instagram</a></li>

                                <li className='navbar-item'><a className='custom-link'><span className='me-2'><BsTwitter /></span> Twitter</a></li>

                            </ul>
                        </div>
                        <div className="col-3">
                            <h4>Contact Us</h4>
                            <ul className='navbar-nav gap-2'>
                                <li className='navbar-item '><a className='custom-link' href='#'>abc@xyz.com</a></li>
                                <li className='navbar-item'><a className='custom-link' href='#'>+8801317470677</a></li>
                            </ul>
                        </div>
                        <div className="col-3">
                            <h4>Open Hours</h4>
                            <p>The store's opening <br /> hours are 9 a.m. to 6 p.m</p>
                            
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Footer;