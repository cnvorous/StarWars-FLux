import React from "react";
import PropTypes from "prop-types";


export const StarWarsCard = () => {
	return (
      <div class="card" style={{width:200}}>
      <img class="card-img-top" src="..." alt="Card image cap">
      <div class="card-body">
         <h5 class="card-title">{props.name}</h5>
         <p class="card-text">{props.gender}<br>
                              {props.hair_color}<br>
                              {props.eye_color</p>
         <a href="#" class="btn btn-primary">Learn More</a>
      </div>
      </div>
   );

   StarWarsCard.propType = {
      name: PropType.string,
      gender: PropType.string,
      hair_color: PropType.string,
      eye_color: PropType.string,
      height: PropType.string,
      mass: PropType.string,
      skin_color: PropType.string,
      birth_year: PropType.string,
      gender: PropType.string,
      homeworld: "https://swapi.dev/api/planets/1/",
      films: [
         "https://swapi.dev/api/films/2/",
         "https://swapi.dev/api/films/6/",
         "https://swapi.dev/api/films/3/",
         "https://swapi.dev/api/films/1/",
         "https://swapi.dev/api/films/7/"
      ],
      "species": [
         "https://swapi.dev/api/species/1/"
      ],
      "vehicles": [
         "https://swapi.dev/api/vehicles/14/",
         "https://swapi.dev/api/vehicles/30/"
      ],
      "starships": [
         "https://swapi.dev/api/starships/12/",
         "https://swapi.dev/api/starships/22/"
      ],
      created: PropTypes.string,
      edited: PropTypes.string,
      "url": "https://swapi.dev/api/people/1/"
   }