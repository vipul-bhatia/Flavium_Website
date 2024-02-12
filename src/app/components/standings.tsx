import React from 'react';

interface StandingsProps {
  sport: string;
}

const Standings: React.FC<StandingsProps> = ({ sport }) => {
  // Fetch and display the standings based on the sport
  // Placeholder content for now
  return (
    <div>
      <h2 className='text-black'>Standings for {sport}</h2>
      {/* Render standings here */}
    </div>
  );
};

export default Standings;
