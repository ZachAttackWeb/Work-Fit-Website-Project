import React, { useState } from 'react';
import './ExerciseCard.css';

export default function ExerciseCard({ exercise }) {
  const [showDetails, setShowDetails] = useState(false);

  const getTypeColor = (type) => {
    switch(type) {
      case 'stretch':
        return '#75c7c3';
      case 'warm-up':
        return '#ff9900';
      case 'preventative':
        return '#2baadf';
      default:
        return '#7b7b7b';
    }
  };

  return (
    <div className="exercise-card">
      <div className="exercise-image">
        <img src={exercise.imageUrl} alt={exercise.name} />
        <span 
          className="type-badge" 
          style={{ backgroundColor: getTypeColor(exercise.type) }}
        >
          {exercise.type}
        </span>
      </div>
      
      <div className="exercise-content">
        <h3>{exercise.name}</h3>
        
        <div className="exercise-meta">
          <div className="body-parts">
            <strong>Body Parts:</strong>
            <p>{exercise.bodyParts.map(part => part.charAt(0).toUpperCase() + part.slice(1)).join(', ')}</p>
          </div>
          
          <div className="departments">
            <strong>Departments:</strong>
            <div className="dept-list">
              {exercise.departments.map(dept => (
                <span key={dept} className="dept-tag">{dept}</span>
              ))}
            </div>
          </div>
        </div>

        <p className="description">{exercise.description}</p>

        <button 
          className="details-btn"
          onClick={() => setShowDetails(!showDetails)}
        >
          {showDetails ? 'Hide Details' : 'View Details'}
        </button>

        {showDetails && (
          <div className="details-expanded">
            <div className="video-placeholder">
              <p>📹 Video content would be embedded here</p>
              <p style={{ fontSize: '0.85rem', marginTop: '8px' }}>
                You'll add real video URLs when creating exercises
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
