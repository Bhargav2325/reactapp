import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);

	const handleToggle = () => {
		setIsOpen(!isOpen);
	};

	return (
		<>
			<div className="container-fluid nav_bg">
				<div className="row">
					<div className="col-10 mx-auto">
						<nav className="navbar navbar-expand-lg bg-body-tertiary">
							<div className="container-fluid">
								<NavLink className="navbar-brand" to="/">
									Bhargav Technical
								</NavLink>
								<button
									className="navbar-toggler"
									type="button"
									aria-controls="navbarSupportedContent"
									aria-expanded={isOpen}
									aria-label="Toggle navigation"
									onClick={handleToggle}
								>
									<span className="navbar-toggler-icon"></span>
								</button>
								<div
									className={`collapse navbar-collapse ${isOpen ? "show" : ""}`}
									id="navbarSupportedContent"
								>
									<ul className="navbar-nav ms-auto mb-2 mb-lg-0">
										<li className="nav-item">
											<NavLink
												exact
												className="nav-link"
												aria-current="page"
												to="/"
											>
												Home
											</NavLink>
										</li>
										<li className="nav-item">
											<NavLink exact className="nav-link" to="/services">
												Services
											</NavLink>
										</li>
										<li className="nav-item">
											<NavLink exact className="nav-link" to="/about">
												About Us
											</NavLink>
										</li>
										<li className="nav-item">
											<NavLink exact className="nav-link" to="/contact">
												Contact
											</NavLink>
										</li>
									</ul>
								</div>
							</div>
						</nav>
					</div>
				</div>
			</div>
		</>
	);
};

export default Navbar;
