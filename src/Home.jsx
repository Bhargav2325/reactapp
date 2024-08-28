import React from "react";
import "./App.css";
import Common from "./Common";
import web from "../src/images/home.png";


const Home = () => {
	return (
		<>
			<Common
				name="Grow your Business with"
				imgsrc={web}
				visit="/services"
				btname="Get Started"
			/>
			
		</>
	);
};

export default Home;
