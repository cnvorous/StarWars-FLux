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
		<div className="single-card-container d-flex">
			<img src="https://jkhub.org/wiki/images/0/01/Tatooine.png" className="card-img w-50 h-50" alt="..."/>  
			<div className="planet-details-box d-flex flex-column">
				<h1 className="card-title">{dataFromLinkPlanet.name}</h1> 
				<p className="card-text">Rotation Period: {dataFromLinkPlanet.rotation_period}</p>
				<p className="card-text">Diameter: {dataFromLinkPlanet.diameter}</p>
				<p className="card-text">Climate: {dataFromLinkPlanet.climate}</p>
				<p className="card-text">Gravity: {dataFromLinkPlanet.gravity}</p>
				<p className="card-text">Terrain: {dataFromLinkPlanet.terrain}</p>
				<p className="card-text">Surface Water: {dataFromLinkPlanet.surface_water}</p>
				<p className="card-text">Population: {dataFromLinkPlanet.population}</p>
				<p className="card-text"><small className="text-muted">Last updated 1 mins ago</small></p>
			</div>
		</div>
	);
};

