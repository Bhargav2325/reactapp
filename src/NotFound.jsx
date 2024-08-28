import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

const NotFound = () => {
	return (
		<container className="text-center mt-5">
			<row>
				<col>
					<h1 className="display-1">404</h1>
					<p className="lead">Page Not Found</p>
					<Link to="/">
						<button variant="primary">Go Home</button>
					</Link>
				</col>
			</row>
		</container>
	);
};

export default NotFound;
