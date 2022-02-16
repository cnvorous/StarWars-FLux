import React from "react";
import PropTypes from "prop-types";

export const PlanetCard = (props) => {
	return (
    <div className="card">
      <img className="card-img-top" src="..." alt="Card image cap"/>
      <div className="card-body">
         <h5 className="card-title">{props.planet}</h5>
         <p className="card-text">{props.terrain}</p>
			<p className="card-text">{props.climate}</p>
			<p className="card-text">{props.population}</p>
         <a href="#" className="btn btn-primary">Learn More</a>
      </div>
    </div>
   );
  }

PlanetCard.propTypes= {
         planet: PropTypes.string,
			rotation_period: PropTypes.string,
			orbital_period: PropTypes.string,
			diameter: PropTypes.string,
			climate: PropTypes.string,
			gravity: PropTypes.string,
			terrain: PropTypes.string,
			surface_water: PropTypes.string,
			population: PropTypes.string,
}