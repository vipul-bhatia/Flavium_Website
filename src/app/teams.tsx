import React from 'react';

const Teams = () => {
  // Example teams data, replace this with your actual data source
  const teams = [
    { id: 1, name: 'Team A', location: 'Location A' },
    { id: 2, name: 'Team B', location: 'Location B' },
    // Add more teams as needed
  ];

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold text-center mb-4">Teams</h1>
      <div className="flex flex-wrap justify-center">
        {teams.map((team) => (
          <div key={team.id} className="m-2 p-4 bg-gray-100 rounded-lg shadow">
            <h2 className="text-xl font-semibold">{team.name}</h2>
            <p>{team.location}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Teams;
