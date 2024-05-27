import React from 'react';
import { Link } from 'react-router-dom';
import './TestCard.scss';

interface TestCardProps {
  id: number;
  image: string;
  name: string;
  description: string;
}

const TestCard: React.FC<TestCardProps> = ({
  id,
  image,
  name,
  description,
}) => {
  return (
    <Link to={`/test/${id}`} className="test-card">
      <img src={image} alt={name} className="test-card__image" />
      <div className="test-card__content">
        <h3 className="test-card__name">{name}</h3>
        <p className="test-card__description">{description}</p>
      </div>
    </Link>
  );
};

export default TestCard;
