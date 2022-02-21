import React from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";


export const CharacterCard = ({data}) => {
 //changes this from props to entitiy to reflect bulk props
	return (                                // then entity changed to data from info given in personCard tag
    //<h1>Characters</h1>  this creates error 
    <div className="card">
      <img className="card-img-top" src="https://www.seekpng.com/png/detail/151-1512903_luke-skywalker-comic-book-star-wars-star-wars.png" alt="Luke Sky Walker in white rob and green light sabor"/>
      <div className="card-body">
         <h5 className="card-title">{data.props}: {data.value}</h5>
         <p className="card-text">{data.props1}: {data.value1}</p>
         <p className="card-text">{data.props2}: {data.value2}</p>
         <p className="card-text">{data.props3}: {data.value3}</p>
        {/*} <Link to={`/single/${props.id}/`}>*/}
         <Link to ={{pathname:"/SingleCharacterInfo/"+ data.value, state:data}}>  {/*this part has changed many times now reflects data update */}
				<span className="btn btn-primary btn-lg" href="#" role="button">
					Learn More
				</span>
			</Link>
      </div>
      </div>
   );
}

   //CharacterCard.propTypes = {
   // person: PropTypes.object,
     // gender: PropTypes.string,
     // hair_color: PropTypes.string,
     // eye_color: PropTypes.string,
     // height: PropTypes.string,
     // mass: PropTypes.string,
     // skin_color: PropTypes.string,
    //  birth_year: PropTypes.string,
    //  gender: PropTypes.string,
    //  id: PropTypes.number, 
   //}