import React from 'react';

const clients = [
  "Google",
  "L'Oréal",
  "Chase",
  "Microsoft",
  "Adobe",
  "Salesforce"
];

const Clients = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-gray-600 text-lg mb-8">
          Trusted by industry leaders worldwide
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
          {clients.map((client) => (
            <div
              key={client}
              className="text-center text-xl font-semibold text-gray-400 hover:text-gray-600 transition-colors"
            >
              {client}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;