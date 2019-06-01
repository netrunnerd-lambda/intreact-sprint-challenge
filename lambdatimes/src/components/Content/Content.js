import React, { Component } from 'react';

import Tabs from './Tabs';
import Cards from './Cards';

// Importing our tab and card data. No need to change anything here.
import { tabData, cardData } from '../../data';

export default class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: 'all',
      tabs: [],
      cards: []
    };
  }

  componentDidMount() {
    this.setState({ tabs: tabData, cards: cardData });
  }

  componentDidUpdate() {
    console.log(this.state);
  }

  changeSelected = tab => {
    this.setState({ selected: tab });
  };

  filterCards = () => {
    const cards = this.state.cards,
          selected = this.state.selected;
          
    return cards.filter(card => card.tab === selected || selected === 'all');
  };

  render() {
    return (
      <div className="content-container">
        <Tabs tabs={this.state.tabs} selectTabHandler={this.changeSelected} selectedTab={this.state.selected} />
        <Cards cards={this.filterCards()} />
      </div>
    );
  }
}
