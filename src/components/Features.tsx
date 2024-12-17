import React from 'react';
import { Brain, Users, Rocket } from 'lucide-react';

const features = [
  {
    title: 'Team Intelligence',
    description: 'Build smarter, more adaptable teams through data-driven insights and collaborative learning.',
    icon: Brain
  },
  {
    title: 'Agile Ways of Working',
    description: 'Implement proven agile methodologies that enhance productivity and innovation.',
    icon: Users
  },
  {
    title: 'High-Performance Teams',
    description: 'Transform your organization with high-performing teams that consistently deliver results.',
    icon: Rocket
  }
];

const Features = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our Approach to Excellence
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We combine three powerful elements to create lasting organizational change
            and superior results.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="relative p-8 rounded-2xl bg-gray-50 hover:bg-gray-100 transition-colors"
            >
              <div className="absolute -top-6 left-8">
                <div className="bg-blue-900 p-4 rounded-xl text-white">
                  <feature.icon size={24} />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mt-4 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;