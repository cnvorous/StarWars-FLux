import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const SingleCharacterInfo = (props) => {
	//const { store, actions } = useContext(Context);
	//const params = useParams();
	const dataFromLink = props.location.state;

	return (
		// info comes from REACT Router
		<div className="single-card-container d-flex">
		<img src="https://www.seekpng.com/png/detail/151-1512903_luke-skywalker-comic-book-star-wars-star-wars.png" alt="Luke Sky Walker in white rob and green light sabor" className="card-img w-50 h-50" alt="..."/>
			<div className="character-details d-flex flex-column">
				<h1 className="card-title ">{dataFromLink.name}</h1>  {/*props.location.state.name was from class*/}  
				<p className="card-text">Gender: {dataFromLink.gender}</p>
				<p className="card-text">Hair Color: {dataFromLink.hair_color}</p>
				<p className="card-text">Eye Color: {dataFromLink.eye_color}</p>
				<p className="card-text">Height: {dataFromLink.height}</p>
				<p className="card-text">Skin Color: {dataFromLink.skin_color}</p>
				<p className="card-text">Birth Year: {dataFromLink.birth_year}</p>
				<p className="card-text">Mass: {dataFromLink.mass}</p>
				<p className="card-text"><small className="text-muted">Last updated 1 mins ago</small></p>
			</div>
		</div>
				
);
};

//SingleCharacterInfo.propTypes = {      (at this time this is not needed)
//	person: PropTypes.object,
//};
