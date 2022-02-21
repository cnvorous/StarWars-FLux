import React, { useEffect, useState } from "react";
import "../../styles/home.css";
import { CharacterCard } from "../component/CharacterCard"; // ../component cause getting out of views folder 
import { PlanetCard } from "../component/PlanetCard";
import { SingleCharacterInfo } from "./SingleCharacterInfo";
import { SinglePlanetInfo } from "./SinglePlanetInfo";
// two large collections of items means two arrays 
//create reusable card component 
//map through arrays and render card for each
//-----------------------------------
//home is landing page 
export const Home = () => {
	useEffect(() => {
		getData("https://swapi.dev/api/people/", setPersonCard);
		getData("https://swapi.dev/api/planets/", setPlanetCard);
	},
		[]);

	const [personCard, setPersonCard]=useState([]);
	const [planetCard, setPlanetCard]=useState([]);

	const getData = (url, setter) => {
		fetch(url)
			.then(response => response.json())
			.then(resultJsonified => {
				setter(resultJsonified.results)
			})
				.catch(error => console.log(error));
	}
	return (
		<div>
			<h1>Characters</h1>
			<div className="character-scroll">
				<div className="cards-box d-md-inline-flex">  {/*justify-content-around flex-wrap*/}
					{personCard.map((person, index) => {  //the item is the bulk of info between {} given, whats inside is different properties
						return (
							<CharacterCard data={{
					props:  "Name",
					props1: "Gender",
					props2: "Hair Color",
					props3: "Eye Color",
					props4: "Height",
					props5: "Skin Color",
					props6: "Birth Year",
					props7: "Mass",
					value:  person.name,
					value1: person.gender,
					value2: person.hair_color,
					value3: person.eye_color,
					value4: person.height,
					value5: person.skin_color,
					value6: person.birth_year,
					value7: person.mass,
			   	}}
					key={index}/>
					);
			}
		)}
				</div>
			</div>
			<h1>Planets</h1>
			<div className="character-scroll">
				<div className="planets-box d-md-inline-flex">
					{planetCard.map((planet, index) => {  //the item is the bulk of info between {} given, whats inside is different properties
						return (
							<PlanetCard data={{
					props:  "Name",
					props1: "Rotation Period",
					props2: "Diameter",
					props3: "Climate",
					props4: "Gravity",
					props5: "Terrain",
					props6: "Surface Water",
					props7: "Population",
					value:  planet.name,
					value1: planet.rotation_period,
					value2: planet.diameter,
					value3: planet.climate,
					value4: planet.gravity,
					value5: planet.terrain,
					value6: planet.surface_water,
					value7: planet.population,
							}}
					key={index}/>
					);
					} 
				)}
				</div>
			</div>
		</div>
	);
}

