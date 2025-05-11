// PlanTheDay.jsx
import React, { useState } from 'react';
import './Plantheday.css';

const PlanTheDay = () => {
  const [plans, setPlans] = useState([]);
  const [input, setInput] = useState('');

  const addPlan = () => {
    if (input.trim()) {
      setPlans([...plans, input]);
      setInput('');
    }
  };

  return (
    <div className="plan-the-day">
      <h2>🗓️ Plan the Day</h2>
      <div className="planner-input">
        <input
          type="text"
          placeholder="What do you want to do?"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={addPlan}>Add</button>
      </div>
      <ul className="plan-list">
        {plans.map((item, idx) => (
          <li key={idx}>✅ {item}</li>
        ))}
      </ul>
    </div>
  );
};

export default PlanTheDay;
