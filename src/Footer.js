import React from 'react'

import {BsTelephone, BsTwitter} from 'react-icons/bs';
import {AiOutlineCopyrightCircle} from 'react-icons/ai';
import {IoIosMail} from 'react-icons/io';
import {IoLocationSharp, IoLogoInstagram} from 'react-icons/io5';
import {ImFacebook} from 'react-icons/im';

function Footer() {
  return (
    <div style={{backgroundColor:"lightgray"}}>

        <div
            style={
                {
                    width:"100%",
                    display:"flex",
                }
            }
        >
            <div
                style={
                    {
                        paddingTop:"5%",
                        marginLeft:"4%",
                        width:"12%"
                    }
                }
            >
                <h3>
                    Quick Links
                </h3>

                <ul
                    style={
                        {
                            listStyleType:"none"
                        }
                    }
                >
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us </li>
                    <li>Careers</li>
                </ul>
            </div>

            <div
                style={
                    {
                        paddingTop:"5%",
                        marginLeft:"10%",
                        width:"15%"
                    }
                }
            >
                <h3>
                    Services
                </h3>

                <ul
                    style={
                        {
                            listStyleType:"none"
                        }
                    }
                >
                    <li>Food Stuff Trading</li>
                    <li>Building Material</li>
                    <li>Import & Export </li>
                    <li>General Contracting</li>
                </ul>
            </div>

            <div
                style={
                    {
                        paddingTop:"5%",
                        marginLeft:"10%",
                        width:"25%"
                    }
                }
            >
                <h3>
                    Contact Us
                </h3>

                <div style={{display:"flex",}}>
                    <IoLocationSharp style={{fontSize:"30px", margin:"10px"}}/>
                    <br/>
                    311 P, C 496, Suhar, Muscat
                </div>
                
                <div style={{display:"flex",}}>
                    <BsTelephone style={{fontSize:"30px", margin:"10px"}}/>
                    <br/>
                    +96826759366
                </div> 

                <div style={{display:"flex",}}>
                    <IoIosMail style={{fontSize:"30px", margin:"10px"}}/>
                    <br/>
                    info@namaralghubairaa.com
                </div>

            </div> 

            <div
                style={
                    {
                        paddingTop:"5%",
                        
                        width:"10%"
                    }
                }
            >
                <h3>
                    Follow Us

                    <div
                        style={
                            {
                                display:"flex"
                            }
                        }
                    >
                        <ImFacebook style={{fontSize:"30px", margin:"10px"}}/> 
                        <IoLogoInstagram style={{fontSize:"30px", margin:"10px"}}/> 
                        <BsTwitter style={{fontSize:"30px", margin:"10px"}}/>
                    </div>
                </h3>
            </div>

        </div>    

        <hr style={
                {
                    width:"85%",
                    border: "1px solid gray"
                }
            }
        />

            <center>
                <AiOutlineCopyrightCircle style={{fontSize:"20px", marginRight:"5px"}}/> 
                <b>2022 NAMAR AL GHUBAIRAA TRADING. All Rights Reserved. </b>
            </center>

    </div>
  )
}

export default Footer