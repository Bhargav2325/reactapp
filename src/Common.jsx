import React from "react";
import "./App.css";
import { NavLink } from "react-router-dom";
// import web from "../src/images/home.png";

const Comman = (props) => {
	return (
		<>
			<section id="header" className="d-flex align-item-center">
				<div className="container-fluid">
					<div className="row">
						<div className="col-10 pt-5 my-5 mx-auto">
							<div className="row">
								<div className="col-md-6 pt-5 pt-lg-0 mt-5 order-2 order-lg-1 d-flex align-item-center flex-column">
									<h1 className="mt-5 my-3">
										{props.name}
										<strong className="brand-name"> Bhargav Technical</strong>
									</h1>
									<h2 className="my-3">
										We are the team of talented developer making websites
									</h2>
									<div className="mt-3">
										<NavLink to={props.visit} className="btn-get-started">
											{props.btname}
										</NavLink>
									</div>
								</div>
								<div className="col-lg-6 order-1 order-lg-2 header-img">
									<img
										src={props.imgsrc}
										alt="home img"
										className="img-fluid animated"
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default Comman;
