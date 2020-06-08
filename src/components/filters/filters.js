import React from 'react';
import './filters.css';


const filters = [
  { name: 'all', label: 'All' },
  { name: 'active', label: 'Active' },
  { name: 'done', label: 'Done' },
];
const Filters = (props) => {
  const { activeFilter, onFilterChange } = props;
  const filterButtons = filters.map(({ name, label }) => {
    const isActive = name === activeFilter;
    const classNames = `btn ${isActive ? 'btn-info' : 'btn-outline-info'}`;
    return (
      <button
        type="button"
        className={classNames}
        key={name}
        onClick={() => onFilterChange(name)}
        onKeyPress={() => onFilterChange(name)}>
        {label}
      </button>
    );
  });

  return (
    <div>
      {filterButtons}
    </div>
  );
};


export default Filters;
