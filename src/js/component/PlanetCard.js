import React from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";

export const PlanetCard = ({data}) => {
	return (
    <div className="card">
      <img className="card-img-top" src="https://jkhub.org/wiki/images/0/01/Tatooine.png" alt="round red planet"/>
      <div className="card-body">
         <h5 className="card-title">{data.name}</h5>
         <p className="card-text">{data.props1}: {data.vaule1}</p>
			<p className="card-text">{data.props1}: {data.vaule1}</p>
			<p className="card-text">{data.props1}: {data.vaule1}</p>
			<Link to ={{pathname:"/SinglePlanetInfo/"+ data.name, state:data}}> {/*props.planet.name, state:props.planet}}> */}
				<span className="btn btn-primary btn-lg" href="#" role="button">
					Learn More
				</span>
			</Link>
      </div>
    </div>
   );
  }

PlanetCard.propTypes= {
         planet: PropTypes.object,
		//	rotation_period: PropTypes.string,
		//	orbital_period: PropTypes.string,
		//	diameter: PropTypes.string,
		//	climate: PropTypes.string,
		//	gravity: PropTypes.string,
		//	terrain: PropTypes.string,
		//	surface_water: PropTypes.string,
		//	population: PropTypes.string,
}