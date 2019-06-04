import React from 'react';
import { PropTypes as types } from 'prop-types';

const Tab = ({ tab, selectTabHandler, selectedTab }) => {
  const classList = selectedTab === tab ? 'tab active-tab' : 'tab';
  return (
    <div
      className={classList}
      onClick={() => selectTabHandler(tab)}
    >
      {tab.toUpperCase()}
    </div>
  );
};

Tab.propTypes = {
  tab: types.string,
  selectedTab: types.string,
  selectTabHandler: types.func
};

// Make sure you include PropTypes on your props.

export default Tab;
