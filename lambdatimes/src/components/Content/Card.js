import React from 'react';
import { PropTypes as types } from 'prop-types';

const Card = props => {
  return (
    <div className="card">
      <div className="headline">{props.headline}</div>
      <div className="author">
        <div className="img-container">
          <img src={props.img} alt={`${props.author}'s avatar`}/>
        </div>
        <span>By {props.author}</span>
      </div>
    </div>
  );
};

Card.propTypes = {
  headline: types.string,
  img: types.string,
  author: types.string
};

export default Card;
