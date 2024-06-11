import React, { useState, useEffect } from 'react';
import HomeTask from '../HomeTask/HomeTask';
import './TaskList.scss';

interface Task {
  id: number;
  name: string;
  startDate: string;
  endDate: string;
  completed: boolean;
}

interface TaskListProps {
  tasks: Task[];
}

const TaskList: React.FC<TaskListProps> = ({ tasks }) => {
  const [completedCount, setCompletedCount] = useState(0);

  useEffect(() => {
    const initialCompletedCount = tasks.filter((task) => task.completed).length;
    setCompletedCount(initialCompletedCount);
  }, [tasks]);

  const handleToggleComplete = (taskId: number, completed: boolean) => {
    setCompletedCount((prevCount) => prevCount + (completed ? 1 : -1));
  };

  if (!tasks || tasks.length === 0) {
    return <div className="task-list">Нет доступных задач</div>;
  }

  return (
    <div className="task-list">
      <div className="task-goal">
        <h2>Онбординг</h2>
        <p>
          {completedCount}/{tasks.length} задач завершено
        </p>
        <ul className="main-task-list">
          <li>Задача</li>
        </ul>
      </div>
      {tasks.map((task) => (
        <HomeTask
          key={task.id}
          {...task}
          onToggleComplete={handleToggleComplete}
        />
      ))}
    </div>
  );
};

export default TaskList;
