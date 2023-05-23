import React from 'react'
import Carousel from 'react-bootstrap/Carousel'

function Carosal() {

  return (
        <div
            style={
                {
                    width:"100%",
                    height:"100%",
                    position:"relative",
                }
            }
        >
            <img src="banner_02.jpg"/>
            <div 
                style={
                    {
                        position: "absolute",
                        top: "30%",
                        left: "35%",
                        transform: "translate(-50%, -50%)",
                        color: "black"
                    }
                }       
            >
                <Carousel>
                    <Carousel.Item interval={3000}> 
                        <div>
                            <h1 style={{color:"blue"}}>
                                OUR SERVICES
                            </h1>

                            <p 
                                style={
                                    {
                                        color:"white",
                                        fontSize:"100px"
                                    }
                                }
                            >
                                <b>Building Materials</b>
                            </p>
                            <h3>We Distributes & Represent major Brands</h3>
                        </div>
                    </Carousel.Item>    

                    <Carousel.Item> 
                    <div>
                            <h1 style={{color:"blue"}}>
                                OUR SERVICES
                            </h1>

                            <p 
                                style={
                                    {
                                        color:"white",
                                        fontSize:"100px"
                                    }
                                }
                            >
                                <b>Import & Export</b>
                            </p>
                            <h3>We Distributes & Represent major Brands</h3>
                        </div>
                    </Carousel.Item>               
                </Carousel>
            </div>
        </div>
  )
}

export default Carosal