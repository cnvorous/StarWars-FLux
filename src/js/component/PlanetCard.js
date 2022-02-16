import React from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";

export const PlanetCard = (props) => {
	return (
    <div className="card">
      <img className="card-img-top" src="..." alt="Card image cap"/>
      <div className="card-body">
         <h5 className="card-title">{props.planet}</h5>
         <p className="card-text">{props.terrain}</p>
			<p className="card-text">{props.climate}</p>
			<p className="card-text">{props.population}</p>
         <Link to="/">
				<span className="btn btn-primary btn-lg" href="#" role="button">
					Learn More
				</span>
			</Link>
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