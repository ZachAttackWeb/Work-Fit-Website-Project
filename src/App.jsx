import React, { useState, useMemo } from 'react';
import FilterPanel from './components/FilterPanel';
import ExerciseCard from './components/ExerciseCard';
import QRCodeModal from './components/QRCodeModal';
import { exercises } from './data/exercises';
import './App.css';

function App() {
  const [filters, setFilters] = useState({
    bodyParts: [],
    types: [],
    departments: []
  });
  
  const [showQRCode, setShowQRCode] = useState(false);

  // Filter exercises based on selected filters
  const filteredExercises = useMemo(() => {
    return exercises.filter(exercise => {
      // If no filters selected, show all exercises
      if (
        filters.bodyParts.length === 0 &&
        filters.types.length === 0 &&
        filters.departments.length === 0
      ) {
        return true;
      }

      // Check body parts filter
      if (filters.bodyParts.length > 0) {
        const hasMatchingBodyPart = exercise.bodyParts.some(part => 
          filters.bodyParts.includes(part)
        );
        if (!hasMatchingBodyPart) return false;
      }

      // Check exercise type filter
      if (filters.types.length > 0) {
        if (!filters.types.includes(exercise.type)) return false;
      }

      // Check department filter
      if (filters.departments.length > 0) {
        const hasMatchingDepartment = exercise.departments.some(dept => 
          filters.departments.includes(dept)
        );
        if (!hasMatchingDepartment) return false;
      }

      return true;
    });
  }, [filters]);

  const handleFilterChange = (filterType, values) => {
    setFilters(prev => ({
      ...prev,
      [filterType]: values
    }));
  };

  const websiteUrl = window.location.href;

  return (
    <div className="app">
      {/* Header */}
      <header className="app-header">
        <div className="header-content">
          <h1>Work-Fit Database</h1>
          <p className="tagline">Preventative Exercises & Wellness for Manufacturing</p>
        </div>
        <button 
          className="qr-btn"
          onClick={() => setShowQRCode(true)}
          title="Generate QR code to share"
        >
          📱 Share QR Code
        </button>
      </header>

      {/* Main Content */}
      <div className="app-container">
        {/* Sidebar with Filters */}
        <aside className="sidebar">
          <FilterPanel 
            filters={filters} 
            onFilterChange={handleFilterChange}
          />
        </aside>

        {/* Main Exercise Area */}
        <main className="main-content">
          <div className="results-header">
            <h2>Exercises {filteredExercises.length > 0 && `(${filteredExercises.length})`}</h2>
            {(filters.bodyParts.length > 0 || filters.types.length > 0 || filters.departments.length > 0) && (
              <p className="filter-active">Filters applied</p>
            )}
          </div>

          {filteredExercises.length > 0 ? (
            <div className="exercises-grid">
              {filteredExercises.map(exercise => (
                <ExerciseCard 
                  key={exercise.id} 
                  exercise={exercise}
                />
              ))}
            </div>
          ) : (
            <div className="no-results">
              <p>No exercises found matching your filters.</p>
              <button 
                className="reset-btn"
                onClick={() => setFilters({ bodyParts: [], types: [], departments: [] })}
              >
                Clear All Filters
              </button>
            </div>
          )}
        </main>
      </div>

      {/* QR Code Modal */}
      <QRCodeModal 
        isOpen={showQRCode}
        onClose={() => setShowQRCode(false)}
        websiteUrl={websiteUrl}
      />

      {/* Footer */}
      <footer className="app-footer">
        <p>Work-Fit Database © 2024 | Employee Wellness & Safety</p>
      </footer>
    </div>
  );
}

export default App;
