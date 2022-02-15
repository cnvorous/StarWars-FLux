import React, { useEffect } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import {StarWarsCard} from "../component/StarWarsCard"; // ../component cause getting out of views folder 
// two large collections of items means two arrays 
//create reusable card component 
//map through arrays and render card for each

//home is landing page 

export const Home = () => {

	const [personCard, setPersonCard] =useState([]);
	const [planetCard, setPlanetCard]= useState([]);

	useEffect(() => {
		fetch(https://swapi.dev/api/people/, {
			method: "GET", 
		}) 
		.then((response) => {
			return response.json();
		})
		.then((characters) => {
			setPersonCard(characters.results);
		});
	}, 
	[]);

	useEffect(() => {
		fetch(https://swapi.dev/api/planets/?page=2", {
			method: "GET", 
		}) 
		.then((response) => {
			return response.json();
		})
		.then((planets) => {
			setPlanetCard(planents.results);
		});
	}, 
	[]);

	return (
	<div>
		<StarWarsCard/>
	</div>
);
}
