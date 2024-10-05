import React, { useState, useEffect } from 'react';
import "./CourseInputModalStyle.css";

function CourseInputModal({ isOpen, onClose, onSubmit }) {
  const [course, setCourse] = useState("");

  const handleSubmit = () => {
    onSubmit(course);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Select Your Course</h2>
        <div className="input-container">
          <label className="input-label" htmlFor="course-input">Course Name:</label>
          <input
            id="course-input"
            type="text"
            className="course-input"
            value={course}
            onChange={(e) => setCourse(e.target.value)}
            placeholder="Enter course name"
            required
          />
        </div>
        <div className="modal-footer">
          <button className="submit-button" onClick={handleSubmit}>Submit Course</button>
          <button className="close-button" onClick={onClose}>Cancel</button>
        </div>
      </div>
    </div>
  );
}

export default CourseInputModal;
