import React from 'react';
import { commonStyles } from '../../styles/common';
import { services } from '../../data/services';
import SectionHeading from '../ui/SectionHeading';
import ExpandableCard from '../ui/ExpandableCard';

const Services = () => {
  return (
    <section className={`${commonStyles.section} bg-gray-50`} id="services">
      <div className={commonStyles.container}>
        <SectionHeading
          title="Comment je vous accompagne ?"
          centered
        />
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service) => (
            <ExpandableCard
              key={service.title}
              icon={service.icon}
              title={service.title}
              description={service.description}
              details={service.details}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;