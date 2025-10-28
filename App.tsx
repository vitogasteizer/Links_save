
import React from 'react';

const App: React.FC = () => {
  return (
    <main className="flex items-center justify-center h-screen w-screen bg-gray-900 text-white font-sans">
      <div className="text-center">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 animate-pulse">
          გამარჯობა სამყარო!
        </h1>
        <p className="mt-4 text-lg text-gray-400">
          ეს არის თქვენი პირველი React აპლიკაცია, რომელიც მზად არის GitHub Pages-ისთვის.
        </p>
      </div>
    </main>
  );
};

export default App;
