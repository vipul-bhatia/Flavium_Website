'use client'
import React, { useState } from 'react';
import Schedule from '../app/components/schedule'; // Make sure to create this component
import Standings from '../app/components/standings'; // Make sure to create this component
import Link from 'next/link';

const Home: React.FC = () => {
  const [currentView, setCurrentView] = useState<'schedule' | 'standings' | ''>('');
  const [selectedSport, setSelectedSport] = useState<string | null>(null);
  const sports = ['Cricket', 'Football', 'Volleyball', 'Tennis', 'Tug of War'];

  const handleOpenView = (sport: string, view: 'schedule' | 'standings') => {
    setSelectedSport(sport);
    setCurrentView(view);
  };

  const handleClose = () => {
    setCurrentView('');
    setSelectedSport(null);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-gray-800 mb-10">Flavium</h1>
      <Link legacyBehavior href='/teams'>
      <a className="text-lg font-bold text-blue-500 hover:underline mb-10">
        Meet the Team
      </a>
      </Link>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
        {sports.map((sport) => (
          <div key={sport} className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-2xl font-semibold text-gray-700">{sport}</h2>
            <div className="mt-4">
              <button
                className="bg-blue-500 text-white py-2 px-4 rounded mr-2 hover:bg-blue-600"
                onClick={() => handleOpenView(sport, 'schedule')}
              >
                Today's Schedule
              </button>
              <button
                className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600"
                onClick={() => handleOpenView(sport, 'standings')}
              >
                Standings
              </button>
            </div>
          </div>
        ))}
      </div>

      {currentView && selectedSport && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-5 rounded-lg shadow-xl">
            <h3 className="text-xl font-bold">{selectedSport} {currentView === 'schedule' ? "Schedule" : "Standings"}</h3>
            {currentView === 'schedule' ? (
              <Schedule sport={selectedSport} />
            ) : (
              <Standings sport={selectedSport} />
            )}
            <button
              className="mt-4 bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600"
              onClick={handleClose}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
