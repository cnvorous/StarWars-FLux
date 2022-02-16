import React from "react";
import PropTypes from "prop-types";


export const CharacterCard = (props) => {
	return (
    <div className="card">
      <img className="card-img-top" src="..." alt="Card image cap"/>
      <div className="card-body">
         <h5 className="card-title">{props.person}</h5>
         <p className="card-text">{props.gender}</p>
         <p className="card-text">{props.hair_color}</p>
         <p className="card-text"> {props.eye_color}</p>
         <a href="#" className="btn btn-primary">Learn More</a>
      </div>
      </div>
   );
}

   CharacterCard.propTypes = {
      person: PropTypes.string,
      gender: PropTypes.string,
      hair_color: PropTypes.string,
      eye_color: PropTypes.string,
      height: PropTypes.string,
      mass: PropTypes.string,
      skin_color: PropTypes.string,
      birth_year: PropTypes.string,
      gender: PropTypes.string,
   }