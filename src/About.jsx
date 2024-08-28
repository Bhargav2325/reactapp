import React from "react";
import "./App.css";
import Common from "./Common";
import web from "../src/images/about.jpg";


const About = () => {
	return (
		<>
			<Common
				name="Welcome to the About page"
				imgsrc={web}
				visit="/contact"
				btname="Contact Now"
			/>
			
		</>
	);
};

export default About;
