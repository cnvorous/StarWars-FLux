import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const SinglePlanetInfo = (props) => {
	//const { store, actions } = useContext(Context);
	//const params = useParams();
	const dataFromLinkPlanet= props.location.state

	return (
		// info comes from REACT Router
		<div>
			<h1 className="card-title">{dataFromLinkPlanet.name}</h1>  {/*props.location.state.name was from class*/}
			<img src="https://jkhub.org/wiki/images/0/01/Tatooine.png" className="card-img" alt="..."/>  
			<p className="card-text">Rotation Period: {dataFromLinkPlanet.rotation_period}</p>
			<p className="card-text">Diameter: {dataFromLinkPlanet.diameter}</p>
			<p className="card-text">Climate: {dataFromLinkPlanet.climate}</p>
			<p className="card-text">Gravity: {dataFromLinkPlanet.gravity}</p>
			<p className="card-text">Terrain: {dataFromLinkPlanet.terrain}</p>
			<p className="card-text">Surface Water: {dataFromLinkPlanet.surface_water}</p>
			<p className="card-text">Population: {dataFromLinkPlanet.population}</p>
			<p className="card-text"><small className="text-muted">Last updated 1 mins ago</small></p>
		</div>

	);
};

