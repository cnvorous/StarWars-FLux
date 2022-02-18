import React from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";


export const CharacterCard = (props) => {
	return (
    //<h1>Characters</h1>  this creates error 
    <div className="card">
      <img className="card-img-top" src="https://www.seekpng.com/png/detail/151-1512903_luke-skywalker-comic-book-star-wars-star-wars.png" alt="Luke Sky Walker in white rob and green light sabor"/>
      <div className="card-body">
         <h5 className="card-title">{props.person.name}</h5>
         <p className="card-text">Gender: {props.person.gender}</p>
         <p className="card-text">Hair Color: {props.person.hair_color}</p>
         <p className="card-text">Eye Color: {props.person.eye_color}</p>
        {/*} <Link to={`/single/${props.id}/`}>*/}
         <Link to ={{pathname:"/SingleCharacterInfo/"+ props.person.name, state:props.person}}>
				<span className="btn btn-primary btn-lg" href="#" role="button">
					Learn More
				</span>
			</Link>
      </div>
      </div>
   );
}

   CharacterCard.propTypes = {
    person: PropTypes.object,
     // gender: PropTypes.string,
     // hair_color: PropTypes.string,
     // eye_color: PropTypes.string,
     // height: PropTypes.string,
     // mass: PropTypes.string,
     // skin_color: PropTypes.string,
    //  birth_year: PropTypes.string,
    //  gender: PropTypes.string,
    //  id: PropTypes.number, 
   }