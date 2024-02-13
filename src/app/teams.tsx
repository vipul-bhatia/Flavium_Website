import React from 'react';

const Teams = () => {
  // Example teams data, replace this with your actual data source
  const teams = [
    { id: 1, name: 'Core', location: 'MBA Tech', imageUrl: '/1.JPG' },
    { id: 2, name: 'Core', location: 'MBA Tech', imageUrl: '/2.JPG' },
    { id: 3, name: 'Core', location: 'MBA Tech', imageUrl: '/3.JPG' },
    { id: 4, name: 'Core', location: 'MBA Tech', imageUrl: '/4.JPG' },
    { id: 5, name: 'Core', location: 'MBA Tech', imageUrl: '/5.JPG' },
    { id: 6, name: 'Core', location: 'MBA Tech', imageUrl: '/6.JPG' },
    { id: 7, name: 'Core', location: 'MBA Tech', imageUrl: '/7.JPG' },
    { id: 8, name: 'Core', location: 'MBA Tech', imageUrl: '/8.JPG' },
    { id: 9, name: 'Core', location: 'MBA Tech', imageUrl: '/9.JPG' },
    { id: 10, name: 'Core', location: 'MBA Tech', imageUrl: '/10.JPG' },
    { id: 11, name: 'Core', location: 'MBA Tech', imageUrl: '/11.JPG' },
    { id: 12, name: 'Core', location: 'MBA Tech', imageUrl: '/12.JPG' },
    { id: 13, name: 'Core', location: 'MBA Tech', imageUrl: '/13.JPG' },
    { id: 14, name: 'Core', location: 'MBA Tech', imageUrl: '/14.JPG' },
    { id: 15, name: 'Core', location: 'MBA Tech', imageUrl: '/15.JPG' },
    { id: 16, name: 'Core', location: 'MBA Tech', imageUrl: '/16.JPG' },
  ];

  return (
    <div className="overflow-auto max-h-[80vh] p-4 bg-white rounded-lg shadow-xl">
      <div className="sm:text-center">
        <h2 className="text-2xl font-bold text-gray-900">
          Teams
        </h2>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 mt-4">
        {teams.map((team) => (
          <div key={team.id} className="relative overflow-hidden transition duration-300 transform rounded shadow-lg hover:scale-105">
            <img
              className="object-cover w-full h-56"
              src={team.imageUrl}
              alt={team.name}
              loading="lazy"
            />
            <div className="absolute inset-0 flex flex-col justify-center px-5 py-4 text-center bg-black bg-opacity-75 opacity-0 hover:opacity-100">
              <p className="mb-1 text-lg font-bold text-white">
                {team.name}
              </p>
              <p className="mb-4 text-xs text-white">{team.location}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Teams;
