import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { commonStyles } from '../../styles/common';
import { ExpandableCardProps } from '../../types';

const ExpandableCard: React.FC<ExpandableCardProps> = ({ 
  icon: Icon, 
  title, 
  description, 
  details 
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div 
      className={`${commonStyles.card.wrapper} cursor-pointer`}
      onClick={() => setIsExpanded(!isExpanded)}
    >
      <div className="flex justify-between items-start">
        <div className="flex-1">
          <Icon className={commonStyles.card.icon} />
          <h3 className={commonStyles.card.title}>{title}</h3>
          <p className={commonStyles.card.description}>
            {description}
          </p>
        </div>
        <button 
          className="mt-2 text-blue-600"
          aria-label={isExpanded ? "Réduire" : "Développer"}
        >
          {isExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
        </button>
      </div>
      
      {isExpanded && (
        <div className="mt-4 pt-4 border-t border-gray-100">
          <p className="text-gray-700 leading-relaxed">
            {details}
          </p>
        </div>
      )}
    </div>
  );
};

export default ExpandableCard;