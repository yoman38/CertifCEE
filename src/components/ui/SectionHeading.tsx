import React from 'react';
import { commonStyles } from '../../styles/common';

interface SectionHeadingProps {
  title: string;
  description?: string;
  centered?: boolean;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({ 
  title, 
  description, 
  centered = false 
}) => {
  const containerClass = centered ? 'text-center mb-16' : 'mb-12';
  const descriptionClass = centered ? 'max-w-2xl mx-auto' : '';

  return (
    <div className={containerClass}>
      <h2 className={commonStyles.heading.primary}>{title}</h2>
      {description && (
        <p className={`${commonStyles.heading.secondary} ${descriptionClass}`}>
          {description}
        </p>
      )}
    </div>
  );
}

export default SectionHeading;