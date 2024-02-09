'use client'
import { useState } from 'react';
import Modal from './components/Modal'; // Ensure this path is correct
import { FaTwitter, FaInstagram, FaGithub, FaLinkedinIn } from 'react-icons/fa'; // Example icons from react-icons

const Home: React.FC = () => {
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [selectedSport, setSelectedSport] = useState<string | null>(null);
  const sports: string[] = ['Cricket', 'Football', 'Volleyball', 'Tennis', 'Tug of War'];

  const openModal = (sport: string) => {
    setSelectedSport(sport);
    setModalOpen(true);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-700 via-gray-900 to-black">
      <div className="text-center">
        <div className="mb-6">
          {/* Logo and Title */}
          <img src="/logo.png" alt="Logo" className="mx-auto mb-4" style={{ width: '100px' }} />
          <h1 className="text-white text-5xl font-bold mb-2">nxtLnk</h1>
          <p className="text-gray-300 mb-4">Custom bio links for creatives who love coding.</p>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center space-x-4 mb-6">
          <FaTwitter className="text-white text-2xl cursor-pointer" />
          <FaInstagram className="text-white text-2xl cursor-pointer" />
          <FaGithub className="text-white text-2xl cursor-pointer" />
          <FaLinkedinIn className="text-white text-2xl cursor-pointer" />
        </div>

        {/* Action Buttons */}
        {sports.map((sport, index) => (
          <div key={index} className="mb-4">
            <button onClick={() => openModal(sport)} className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
<span className="relative px-5 py-2.5 transition-all ease-in duration-75 border-l-orange-700 dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
{sport}
</span>
</button>
           
          </div>
        ))}

        {/* Modal */}
        {modalOpen && <Modal sport={selectedSport || ''} onClose={() => setModalOpen(false)} />}
      </div>
    </div>
  );
};

export default Home;
