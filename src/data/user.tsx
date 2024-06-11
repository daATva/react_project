import React, { useEffect } from 'react';

// Интерфейсы для задач и профиля пользователя
interface Task {
  id: number;
  name: string;
  startDate: string;
  endDate: string;
  completed: boolean;
}

interface Test {
  id: number;
  image: string;
  name: string;
  description: string;
}

interface UserProfile {
  name: string;
  role: string;
  location: string;
  manager: string;
  department: string;
  openTasks: number;
  tasks: Task[];
  tests: Test[];
}

interface User {
  username: string;
  password: string;
  profile: UserProfile;
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
  {
    id: 4,
    image: 'https://goo.su/zdr3',
    name: 'Стресс-менеджмент',
    description: 'Тест оценивающий вашу способность справляться со стрессом.',
  },
];

const users: User[] = [
  {
    username: 'user1',
    password: '123',
    profile: {
      name: 'Кудряшов Максим',
      role: 'Менеджер',
      location: 'Москва',
      manager: 'Красельников Александр',
      department: 'Отдел продаж',
      openTasks: 3,
      tasks: [
        {
          id: 1,
          name: 'Подписать документ об увольнении',
          startDate: '13.01.2023',
          endDate: '14.01.2023',
          completed: true,
        },
        {
          id: 2,
          name: 'Передать документы компании руководителю',
          startDate: '13.01.2023',
          endDate: '13.01.2023',
          completed: true,
        },
        {
          id: 3,
          name: 'Получить расчет заработной платы и отпускных',
          startDate: '13.01.2023',
          endDate: '13.01.2023',
          completed: true,
        },
      ],
      tests: [],
    },
  },
  {
    username: 'admin',
    password: 'admin',
    profile: {
      name: 'Администратор',
      role: 'Администратор',
      location: 'Москва',
      manager: 'Admin Manager',
      department: 'Администрация',
      openTasks: 2,
      tasks: [
        {
          id: 1,
          name: 'Проверить отчеты пользователей',
          startDate: '01.02.2023',
          endDate: '01.02.2023',
          completed: false,
        },
        {
          id: 2,
          name: 'Обновить системные настройки',
          startDate: '01.02.2023',
          endDate: '01.02.2023',
          completed: false,
        },
      ],
      tests: [],
    },
  },
];

export default users;
export type { User, UserProfile, Task, Test };
