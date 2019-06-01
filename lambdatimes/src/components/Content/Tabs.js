import React from 'react';
import { PropTypes as types } from 'prop-types';
import Tab from './Tab';

const Tabs = ({ tabs, selectTabHandler, selectedTab }) => {
  return (
    <div className="tabs">
      <div className="topics">
        <span className="title">TRENDING TOPICS:</span>
        {tabs.map(tab => <Tab tab={tab} selectTabHandler={selectTabHandler} selectedTab={selectedTab} />)}
      </div>
    </div>
  );
};

Tabs.propTypes = {
  tab: types.string,
  selectedTab: types.string,
  selectTabHandler: types.func
};

export default Tabs;
