import React from 'react'
import {IoIosMail} from 'react-icons/io';

function Email() {
  return (
    <div
        style={
            {
                marginTop:"10%",
                marginBottom:"10%"
            }
        }
    >
        <form>
            <div 
                class="input-group mb-3"
                style={
                    {
                        width:"40%",
                        marginLeft:"30%",
                    }
                }
            >
                <span class="input-group-text" id="basic-addon1">
                    <IoIosMail style={{fontSize:"30px"}}/>
                </span>
                <input 
                    type="text" 
                    class="form-control" 
                    placeholder="Your Email Address" 
                />
                
                <button 
                    class="btn btn-outline-secondary" 
                    type="button" 
                    id="button-addon2"
                    style={
                        {
                            borderRadius:"5px",
                            backgroundColor:"blue",
                            color:"white",
                        }
                    }
                >Submit</button>
            </div>
        </form>
    </div>
  )
}

export default Email