import React from 'react';
import Stack from 'react-bootstrap/Stack';
import Dropdown from 'react-bootstrap/Dropdown';
import {motion} from "framer-motion";

function Header() {
  return (
    <div 
        style={
            {
                width:"100%",
                height:"50%",
                display:"flex",
                flexDirection:"column",
                fontSize:"20px"
            }
        }
    >   
        <Stack direction="horizontal" gap={1}>
            <img 
                src="logo.png"
                style={
                    {
                        width:"150px",
                        padding:"20px"
                    }
                }
            />
        
            <table style={{width:"80%", textAlign:"center"}}>                            
                <tr>
                    <motion.td
						whileHover={{scale: 1.5}}
                        style={{width:"15%"}}
                    >
                        Home
                    </motion.td>
                    <motion.td
						whileHover={{scale: 1.5}}
                        style={{width:"15%"}}
                    >
                        About Us
                    </motion.td>
                    
                    <td style={{width:"15%"}}>
                        <Dropdown>
                            <Dropdown.Toggle id="dropdown-basic"
                                style={
                                    {
                                        backgroundColor:"white",
                                        border:"0px",
                                        color:"black"
                                    }
                                }
                            >
                                Services
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item href="#/action-1">Food Stuff Trading</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Building Material</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">Import And Export</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">General Contracting</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </td>
                    <motion.td
						whileHover={{scale: 1.5}}
                        style={{width:"15%"}}
                    >
                        Career
                    </motion.td>

                    <motion.td
						whileHover={{scale: 1.5}}
                        style={{width:"15%"}}
                    >
                        Contact Us
                    </motion.td>
                </tr>
            </table>
        </Stack>
          
    </div>
  )
}

export default Header