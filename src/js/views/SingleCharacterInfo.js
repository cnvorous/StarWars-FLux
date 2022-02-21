import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const SingleCharacterInfo = ({data}) => {  // data comes from home page cause has object prop info 
	//const { store, actions } = useContext(Context);
	//const params = useParams();
	//const dataFromLink = props.location.state;

	return (
		// info comes from REACT Router
		<div className="single-card-container d-flex">
		<img src="https://www.seekpng.com/png/detail/151-1512903_luke-skywalker-comic-book-star-wars-star-wars.png" alt="Luke Sky Walker in white rob and green light sabor" className="card-img w-50 h-50" alt="..."/>
			<div className="character-details d-flex flex-column">
				<h1 className="card-title ">{data.props}: {data.value}</h1>  {/*props.location.state.name was from class*/}  
				<p className="card-text">{data.props1}: {data.value1}</p>
				<p className="card-text">{data.props2}: {data.value2}</p>
				<p className="card-text">{data.props3}: {data.value3}</p>
				<p className="card-text">{data.props4}: {data.value4}</p>
				<p className="card-text">{data.props5}: {data.value5}</p>
				<p className="card-text">{data.props6}: {data.value6}</p>
				<p className="card-text">{data.props7}: {data.value7}</p>
				<p className="card-text"><small className="text-muted">Last updated 1 mins ago</small></p>
			</div>
		</div>
				
);
};

//SingleCharacterInfo.propTypes = {      (at this time this is not needed)
//	person: PropTypes.object,
//};
