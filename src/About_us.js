import React from 'react'
import {motion} from "framer-motion";

function About_us() {
  return (
    <div
        style={
            {
                display:"flex",
                padding:"5%",
                width:"100%"
            }
        }
    >
        <motion.div 
            whileInView={{scale: 1}}
            initial={{scale:0}}
            transition={{duration:2}}
            class="container"
            style={{width:"50%"}}
        >
            <img 
                src="about-us_03.jpg"
                style={{width:"100%"}}
            />
        </motion.div>

        <div
            style={
                {
                    width:"50%",
                    padding:"3%"
                }
            }
        >
            <h2>ABOUT US</h2>

            <h1>
                <b>
                    We work with you
                </b>
            </h1>

            <p 
                style={
                    {
                        textAlign:"left",
                        fontSize:"20px"
                    }
                }
            >
                Namar Al Ghubairaa Trading was established in 2011 as Food Stuff Trading company. 
                But our continuous efforts and business we have expended in Food Stuff Trading, 
                Building Materials and General Trading based at the Sultanate of Oman. 
                The imports were started from many part of the world and neighboring GCO countries.
            </p>

            <button
                style={
                    {
                        backgroundColor:"darkblue",
                        color:"white",
                        border:"0px",
                        fontSize:"20px",
                        padding:"15px"
                    }
                }
            >
                View More
            </button>
        </div>
    </div>
  )
}

export default About_us