import React from 'react';
import { PropTypes as types } from 'prop-types';
import Card from './Card';

const Cards = ({ cards }) => {
  return (
    <div className="cards-container">
      {cards.map(card => <Card key={card.headline} {...card} />)}
    </div>
  )
}

Cards.propTypes = {
  cards: types.arrayOf(types.object)
};

export default Cards;