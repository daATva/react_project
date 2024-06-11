import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './TestModal.scss';
import users, { User, Task } from '../../data/user';

interface Test {
  id: number;
  image: string;
  name: string;
  description: string;
}

interface TestModalProps {
  onClose: () => void;
  onAddTestToUser: (userId: string, testId: number) => void;
}

const initialTests: Test[] = [
  {
    id: 1,
    image: 'https://goo.su/zdr3',
    name: 'Личностный рост',
    description:
      'Тест оценивающий мотивацию и эмоциональный интеллект для самосовершенствования.',
  },
  {
    id: 2,
    image: 'https://goo.su/zdr3',
    name: 'Эмоциональный интеллект',
    description:
      'Тест оценивающий способность понимать и управлять своими эмоциями.',
  },
  {
    id: 3,
    image: 'https://goo.su/zdr3',
    name: 'Самомотивация',
    description:
      'Тест оценивающий вашу способность самостоятельно мотивировать себя.',
  },
];

const TestModal: React.FC<TestModalProps> = ({ onClose, onAddTestToUser }) => {
  const [tests, setTests] = useState<Test[]>(initialTests);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [selectedTest, setSelectedTest] = useState<number | null>(null);
  const [newTask, setNewTask] = useState<Partial<Task>>({
    name: '',
    startDate: '',
    endDate: '',
    completed: false,
  });

  useEffect(() => {
    // Закомментируем axios вызов, так как мы используем фиксированный список тестов
    // axios.get('https://66410886a7500fcf1a9f6434.mockapi.io/tests_data')
    //   .then(response => {
    //     setTests(response.data);
    //   })
    //   .catch(error => {
    //     console.error('Error fetching data:', error);
    //   });
  }, []);

  const handleUserChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const username = event.target.value;
    const user = users.find((user) => user.username === username);
    setSelectedUser(user || null);
  };

  const handleTestChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedTest(Number(event.target.value));
  };

  const handleAddTest = () => {
    if (selectedUser && selectedTest) {
      onAddTestToUser(selectedUser.username, selectedTest);
    }
  };

  const handleTaskChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setNewTask((prevTask) => ({
      ...prevTask,
      [name]: value,
    }));
  };

  const handleAddTask = () => {
    if (selectedUser && newTask.name && newTask.startDate && newTask.endDate) {
      const updatedUser = {
        ...selectedUser,
        profile: {
          ...selectedUser.profile,
          tasks: [
            ...selectedUser.profile.tasks,
            {
              id: selectedUser.profile.tasks.length + 1,
              name: newTask.name as string,
              startDate: newTask.startDate as string,
              endDate: newTask.endDate as string,
              completed: false,
            },
          ],
        },
      };
      // Здесь обновляем состояние users (это демо, в реальном приложении потребуется обновить состояние через Redux или другой state management)
      const userIndex = users.findIndex(
        (user) => user.username === selectedUser.username
      );
      users[userIndex] = updatedUser;

      setSelectedUser(updatedUser);
      setNewTask({
        name: '',
        startDate: '',
        endDate: '',
        completed: false,
      });
    }
  };

  return (
    <div className="test-modal">
      <div className="test-modal-content">
        <header className="test-modal-header">
          <h2>Добавить тест или задачу</h2>
          <button onClick={onClose}>✖</button>
        </header>
        <main className="test-modal-main">
          <div className="test-modal-users">
            <label htmlFor="userSelect">Выберите пользователя:</label>
            <select id="userSelect" onChange={handleUserChange}>
              <option value="">Выберите пользователя</option>
              {users.map((user) => (
                <option key={user.username} value={user.username}>
                  {user.profile.name}
                </option>
              ))}
            </select>
          </div>
          {selectedUser && (
            <div className="test-modal-tasks">
              <h3>Задачи пользователя</h3>
              <ul>
                {selectedUser.profile.tasks.map((task) => (
                  <li key={task.id}>
                    {task.name} - {task.startDate} до {task.endDate} (
                    {task.completed ? 'Выполнено' : 'Не выполнено'})
                  </li>
                ))}
              </ul>
            </div>
          )}
          <div className="test-modal-tests">
            <label htmlFor="testSelect">Выберите тест:</label>
            <select id="testSelect" onChange={handleTestChange}>
              <option value="">Выберите тест</option>
              {tests.map((test) => (
                <option key={test.id} value={test.id}>
                  {test.name}
                </option>
              ))}
            </select>
          </div>
          <div className="test-modal-actions">
            <button onClick={handleAddTest}>Добавить тест</button>
          </div>
          <div className="test-modal-add-task">
            <h3>Добавить задачу</h3>
            <label htmlFor="taskName">Название задачи:</label>
            <input
              id="taskName"
              name="name"
              type="text"
              value={newTask.name || ''}
              onChange={handleTaskChange}
            />
            <label htmlFor="taskStartDate">Дата начала:</label>
            <input
              id="taskStartDate"
              name="startDate"
              type="date"
              value={newTask.startDate || ''}
              onChange={handleTaskChange}
            />
            <label htmlFor="taskEndDate">Дата окончания:</label>
            <input
              id="taskEndDate"
              name="endDate"
              type="date"
              value={newTask.endDate || ''}
              onChange={handleTaskChange}
            />
            <button onClick={handleAddTask}>Добавить задачу</button>
          </div>
        </main>
      </div>
    </div>
  );
};

export default TestModal;
