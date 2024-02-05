import React, { useState } from 'react';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [welcomeMessage, setWelcomeMessage] = useState('');

  const handleLoginClick = () => {
    setIsLoggedIn(!isLoggedIn);
    setWelcomeMessage('Welcome Tono Sucipto');
  };

  const handleLogoutClick = () => {
    setIsLoggedIn(false);
    setWelcomeMessage('');
  };

  return (
    <div className="">
      <div className='flex justify-between items-center flex-col md:flex-row mb-4'>
        <img src="./logo-kodak.jpg" alt="" />
      {isLoggedIn && (
          <button
            className="bg-gray-300 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={handleLogoutClick}
          >
            Logout
          </button>
        
      )}
      {!isLoggedIn && (
        <button
          className="bg-gray-300 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={handleLoginClick}
        >
          Login
        </button>
      )}
      </div>
      {welcomeMessage && (
            <h1 className="text-2xl bg-blue-300 rounded text-center font-bold h-screen w-full">{welcomeMessage}</h1>
          )}
    </div>
  );
}

export default App;
