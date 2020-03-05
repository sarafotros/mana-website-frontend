import React from 'react';
import { Link } from "react-router-dom"

const MainContainer = () => {

    return (
			<div>
				{/* <Banner /> */}
				<div class="products-service-parent">
					<div class="products-container">
						<Link to="/products">
							<button class="btn-c">Products</button>
							{/* <img src="images/mainContainer/services.png" alt="logo" /> */}
						</Link>
					</div>
					<div class="service-container">
						<Link to="/services">
							<button class="btn-c">Services</button>
							{/* <img src="https://res.cloudinary.com/ddxhjhvdj/image/upload/c_scale,w_500/v1583247534/service_f5aemg.jpg" alt="logo" /> */}{' '}
						</Link>
					</div>
				</div>
			</div>
		);

}
 
export default MainContainer;