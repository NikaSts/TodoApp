import React from 'react';
import './search-panel.css';


const SearchPanel = (props) => {
  const {onTaskSearch} = props;

  return (
    <input type="text"
      className="form-control search-input"
      placeholder="type to search"
      onChange={(evt) => onTaskSearch(evt.target.value) } />
  );
};

export default SearchPanel;
