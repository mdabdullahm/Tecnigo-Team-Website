import React from 'react';
import Marquee from 'react-fast-marquee';

const clients = ['mealy', 'RentCar', 'ZenResto', 'X-Health', 'WTC Lab', 'Kabab King', 'Geddai.', 'Palooi'];

const ClientLogos = () => {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto">
        <Marquee gradient={false} speed={50}>
          {clients.map((client, index) => (
            <div key={index} className="mx-12">
              <span className="text-2xl font-semibold text-gray-400">
                {client}
              </span>
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
};

export default ClientLogos;