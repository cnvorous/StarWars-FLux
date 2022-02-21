import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const SinglePlanetInfo = ({data}) => {
	//const { store, actions } = useContext(Context);
	//const params = useParams();
	//const dataFromLinkPlanet= props.location.state  no longer need this 

	return (
		// info comes from REACT Router
		<div className="single-card-container d-flex">
			<img src="https://jkhub.org/wiki/images/0/01/Tatooine.png" className="card-img w-50 h-50" alt="..."/>  
			<div className="planet-details-box d-flex flex-column">
				<h1 className="card-title">{data.name}</h1>  {/*{dataFromLinkPlanet.name} */}
				<p className="card-text">{props1}: {value1}</p>
				<p className="card-text">{props2}: {value2}</p>
				<p className="card-text">{props3}: {value3}</p>
				<p className="card-text">{props4}: {value4}</p>
				<p className="card-text">{props5}: {value5}</p>
				<p className="card-text">{props6}: {value6}</p>
				<p className="card-text">{props7}: {value7}</p>
				<p className="card-text"><small className="text-muted">Last updated 1 mins ago</small></p>
			</div>
		</div>
	);
};

