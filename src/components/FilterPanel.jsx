import React from 'react';
import { bodyParts, exerciseTypes, departments } from '../data/exercises';
import './FilterPanel.css';

export default function FilterPanel({ filters, onFilterChange }) {
  const handleCheckboxChange = (filterType, value) => {
    const currentFilter = filters[filterType];
    const newFilter = currentFilter.includes(value)
      ? currentFilter.filter(item => item !== value)
      : [...currentFilter, value];
    
    onFilterChange(filterType, newFilter);
  };

  const handleClearAll = () => {
    onFilterChange('bodyParts', []);
    onFilterChange('types', []);
    onFilterChange('departments', []);
  };

  return (
    <div className="filter-panel">
      <div className="filter-header">
        <h2>Filters</h2>
        <button className="clear-btn" onClick={handleClearAll}>Clear All</button>
      </div>

      <div className="filter-section">
        <h3>Exercise Type</h3>
        <div className="checkbox-group">
          {exerciseTypes.map(type => (
            <label key={type} className="checkbox-label">
              <input
                type="checkbox"
                checked={filters.types.includes(type)}
                onChange={() => handleCheckboxChange('types', type)}
              />
              <span className="checkbox-text">{type.charAt(0).toUpperCase() + type.slice(1)}</span>
            </label>
          ))}
        </div>
      </div>

      <div className="filter-section">
        <h3>Body Part</h3>
        <div className="checkbox-group">
          {bodyParts.map(part => (
            <label key={part} className="checkbox-label">
              <input
                type="checkbox"
                checked={filters.bodyParts.includes(part)}
                onChange={() => handleCheckboxChange('bodyParts', part)}
              />
              <span className="checkbox-text">{part.charAt(0).toUpperCase() + part.slice(1)}</span>
            </label>
          ))}
        </div>
      </div>

      <div className="filter-section">
        <h3>Department</h3>
        <div className="checkbox-group">
          {departments.map(dept => (
            <label key={dept} className="checkbox-label">
              <input
                type="checkbox"
                checked={filters.departments.includes(dept)}
                onChange={() => handleCheckboxChange('departments', dept)}
              />
              <span className="checkbox-text">{dept}</span>
            </label>
          ))}
        </div>
      </div>
    </div>
  );
}
