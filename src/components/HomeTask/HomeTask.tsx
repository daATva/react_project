import React, { useState, useEffect } from 'react';
import './HomeTask.scss';

interface TaskProps {
  id: number;
  name: string;
  startDate: string;
  endDate: string;
  completed: boolean;
  onToggleComplete: (id: number, completed: boolean) => void;
}

const HomeTask: React.FC<TaskProps> = ({
  id,
  name,
  startDate,
  endDate,
  completed,
  onToggleComplete,
}) => {
  const [isCompleted, setIsCompleted] = useState(completed);

  useEffect(() => {
    setIsCompleted(completed);
  }, [completed]);

  const handleToggleComplete = () => {
    const newCompletedStatus = !isCompleted;
    setIsCompleted(newCompletedStatus);
    onToggleComplete(id, newCompletedStatus);
  };

  return (
    <div className={`task ${isCompleted ? 'completed' : 'incomplete'}`}>
      <div className="task-info">
        <p className="task-name">{name}</p>
        <div className="task-dates">
          <span>{startDate}</span>
          <span>{endDate}</span>
        </div>
      </div>
      <div className="task-status" onClick={handleToggleComplete}>
        {isCompleted ? (
          <span className="completed-checkmark">⟳</span>
        ) : (
          <span className="incomplete-circle">✔</span>
        )}
      </div>
    </div>
  );
};

export default HomeTask;
