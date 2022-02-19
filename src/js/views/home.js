import React, { useEffect, useState } from "react";
import "../../styles/home.css";
import {CharacterCard} from "../component/CharacterCard"; // ../component cause getting out of views folder 
import {PlanetCard} from "../component/PlanetCard";
import { SingleCharacterInfo } from "./SingleCharacterInfo";
import { SinglePlanetInfo } from "./SinglePlanetInfo";

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
			setPlanetCard(planets.results);
		});
	}, 
	[]);


	return (
	<div>
		<h1>Characters</h1>
		<div className="character-scroll">
		<div className="cards-box d-md-inline-flex">  {/*justify-content-around flex-wrap*/}
		{personCard.map((item, index)=>{  //the item is the bulk of info between {} given, whats inside is different properties
			return(
				<CharacterCard 
					//person={item.name}
					//gender={item.gender}
					//hair_color={item.hair_color}
					//eye_color={item.eye_color}
					key={index}
					person={item}
				/>
			);
		}
		)}
		</div>
		</div>
		<h1>Planets</h1>
		<div className="character-scroll">
		<div className="planets-box d-md-inline-flex">
		{planetCard.map((item, index)=>{
			return(
				<PlanetCard
					//planet ={item.name}
					//climate ={item.climate}
					// ={item.terrain}
					//population={item.population}
					key={index}
					planet={item}
		     />
			);
		} )}
		</div>
		</div>
	</div>
);
}

