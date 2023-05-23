import React from 'react'

function Clientele() {
  return (
    <div
        style={
            {
                backgroundColor:"darkblue",
                color:"white",
                paddingTop:"5%",
                paddingBottom:"5%"
            }
        }
    >
        <center>
            <h4
                style={{margin:"2%"}}
            >
                OUR CLIENTELE
            </h4>
            <h1
                style={{margin:"2%"}}
            >
                <b>
                    Our Client base has increased by 
                    <br/>
                    40% Annually
                </b>
            </h1>

            <table>
                <tr>
                    <td>
                        <img src="client_logo/bastil_03.jpg"/>
                    </td>
                    <td>
                        <img src="client_logo/bolier_03.jpg"/>
                    </td>
                    <td>
                        <img src="client_logo/dankside_03.jpg"/>
                    </td>
                    <td>
                        <img src="client_logo/dig-it_03.jpg"/>
                    </td>
                    <td>
                        <img src="client_logo/Namar-home-page_03.jpg"/>
                    </td>
                    
                </tr>
            </table>
        </center>
    </div>
  )
}

export default Clientele