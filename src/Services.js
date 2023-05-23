import React from 'react'
import './Services.css';

function Services() {
  return (
    <div
		style={
			{paddingBottom:"10%"}
		}
	>
        
        <center>
            <h2>
                OUR SERVICES
            </h2>

            <h1>
                <b>
					What we Are Offering To 
                	<br/>
                	Customers
				</b>
            </h1>

            	<div 
					style={
						{
							display:"flex"
						}
					}
				>
					<div class="container">
						<img 
							src="services/food_03.jpg" 
							class="image_size"
						/>
						<div class="center">
							<img src="services/leaf.png"/>
							<br/>
							Food Stuff Trading
						</div>
					</div>
					<div class="container">
						<img 
							src="services/building-material_03.jpg" 
							class="image_size"
						/>
						<div class="center">
							<img src="services/building.png"/>
							<br/>
							Building Material
						</div>
					</div>

				</div>

				<div 
					style={
						{
							display:"flex"
						}
					}
				>
					
					<div class="container">
						<img 
							src="services/import_03.jpg" 
							class="image_size"
						/>
						<div class="center">
							<img src="services/ship.png"/>
							<br/>
							Import And Export
						</div>
					</div>

					<div class="container">
						<img 
							src="services/contract_03.jpg" 
							class="image_size"
						/>
						<div class="center">
							<img src="services/spanner.png"/>
							<br/>
							General Contracting
						</div>
					</div>
				</div>    
        </center>
    </div>
  )
}

export default Services