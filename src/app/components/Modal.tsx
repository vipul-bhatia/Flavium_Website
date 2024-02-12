import React from 'react';

interface ModalProps {
  sport: string;
  onOpenSchedule: () => void;
  onOpenStandings: () => void;
  onClose: () => void;
}


const Modal: React.FC<ModalProps> = ({ sport, onOpenSchedule, onOpenStandings, onClose }) => {
  return (
    <div className="fixed inset-0 bg-dark bg-opacity-75 flex justify-center items-center z-10">
      {/* ... Modal content ... */}
      <button onClick={onOpenSchedule}>Today's Match Schedules</button>
      <button onClick={onOpenStandings}>Standings</button>
      <button onClick={onClose}>Close</button>
    </div>
  );
};

export default Modal;
