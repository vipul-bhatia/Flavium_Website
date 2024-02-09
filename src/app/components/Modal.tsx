import React from 'react';
import Link from 'next/link';

interface ModalProps {
  sport: string;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ sport, onClose }) => {
  return (
    <div className="fixed inset-0 bg-dark bg-opacity-75 flex justify-center items-center z-10">
      <div className="bg-light p-8 rounded-lg shadow-2xl">
        <h2 className="text-3xl text-dark font-bold mb-8">{sport}</h2>
        <div className="space-y-4">
          <Link className="w-full bg-accent text-light font-bold py-2 px-10 rounded-full transition duration-300 ease-in-out transform hover:scale-105" legacyBehavior href={`/schedule/${encodeURIComponent(sport)}`}>
            <a className="w-full bg-accent text-light font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out transform hover:scale-105">
              Today's Match Schedules
            </a>
          </Link>
          <br />
          <br />
          
          <Link legacyBehavior href={`/standings/${encodeURIComponent(sport)}`}>
            <a className="w-full bg-accent text-light font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out transform hover:scale-105">
              Standings
            </a>
          </Link>
          <button
            className="w-full bg-accent text-light font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out transform hover:scale-105 mt-8"
            onClick={onClose}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
