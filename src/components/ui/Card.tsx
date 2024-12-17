import React from 'react';
import { commonStyles } from '../../styles/common';

interface CardProps {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
}

const Card: React.FC<CardProps> = ({ icon: Icon, title, description }) => {
  return (
    <div className={commonStyles.card.wrapper}>
      <Icon className={commonStyles.card.icon} />
      <h3 className={commonStyles.card.title}>{title}</h3>
      <p className={commonStyles.card.description}>{description}</p>
    </div>
  );
}

export default Card;