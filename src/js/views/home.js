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

	const [personCard, setPersonCard] = useState([]);
	const [planetCard, setPlanetCard] = useState([]);


	useEffect(() => {
		getData("https://swapi.dev/api/people/", setPersonCard);
		getData("https://swapi.dev/api/planets/", setPlanetCard);

	},
		[]);

	const getData = (url, setter) => {
		fetch(url,
			{
				method: "GET",
			})
			.then((response) => {
				return response.json();
			})
			.then((data) => {
				console.log(data.results)
				setter(data.results);
			});
	}

	return (
	<div>
		<h1>Characters</h1>
		<div className="character-scroll">
		<div className="cards-box d-md-inline-flex">  {/*justify-content-around flex-wrap*/}
		{personCard.map((item, index)=>{  //the item is the bulk of info between {} given, whats inside is different properties
			return(
				<CharacterCard key={index} entity={item}
					 props1={value1.gender}
					 props2={value2.hair_color}
					 props3={value3.eye_color}
					 props4={value4.height}
					 props5={value5.skin_color}
				    props6={value6.birth_year}
				    props7={value7.mass}
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
				<PlanetCard key={index} entity={item}
				props1={value1.rotation_period}
				props2={value2.diameter}
				props3={value3.climate}
				props4={value4.gravity}
				props5={value5.terrain}
				props6={value6.surface_water}
				props7={value7.population}
		     />
			);
		} )}
		</div>
		</div>
	</div>
);
}

