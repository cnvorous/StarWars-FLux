import React, { useEffect, useState } from "react";
import "../../styles/home.css";
import {CharacterCard} from "../component/CharacterCard"; // ../component cause getting out of views folder 
import {PlanetCard} from "../component/PlanetCard";
// two large collections of items means two arrays 
//create reusable card component 
//map through arrays and render card for each

//home is landing page 

export const Home = () => {

	const [personCard, setPersonCard] =useState([]);
	const [planetCard, setPlanetCard]= useState([]);

	useEffect(() => {
		fetch("https://swapi.dev/api/people/", {
			method: "GET", 
		}) 
		.then((response) => {
			return response.json();
		})
		.then((characters) => {
			console.log(characters.results)
			setPersonCard(characters.results);
		});
	}, 
	[]);

	useEffect(() => {
		fetch("https://swapi.dev/api/planets/", {
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
		{personCard.map((item)=>{
			return(
				<CharacterCard/>
			);
		}
		)}
		<PlanetCard/>
	</div>
);
}
