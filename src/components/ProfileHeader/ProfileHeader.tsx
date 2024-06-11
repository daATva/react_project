// src/components/ProfileHeader/ProfileHeader.tsx
import React from 'react';
import './ProfileHeader.scss';

interface ProfileHeaderProps {
  name: string;
  role: string;
  location: string;
  manager: string;
  department: string;
  openTasks: number;
  onClick: () => void;
  onAddTest: () => void;
}

const ProfileHeader: React.FC<ProfileHeaderProps> = ({
  name,
  role,
  location,
  manager,
  department,
  openTasks,
  onClick,
  onAddTest,
}) => {
  return (
    <div className="profile-header">
      <img
        src="https://i.ytimg.com/vi/gAfLYcRdpq4/maxresdefault.jpg"
        alt={name}
        className="profile-image"
      />
      <div className="profile-info">
        <h1>{name}</h1>
        <p>{role}</p>
        <p>{location}</p>
        <p>Руководитель: {manager}</p>
        <p>Отдел: {department}</p>
        <p>Открытые задачи: {openTasks}</p>
        <button onClick={onClick}>Выйти</button>
        <button onClick={onAddTest}>Добавить тест</button>{' '}
      </div>
    </div>
  );
};

export default ProfileHeader;
