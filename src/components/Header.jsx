import React from 'react';

function Header() {
  return (
    <header className="bg-white shadow sticky top-0 z-50">
      <div className="max-w-5xl mx-auto px-4 py-6 flex flex-col md:flex-row md:justify-between md:items-center">
        <h1 className="text-3xl md:text-4xl font-extrabold text-blue-800 tracking-tight mb-2 md:mb-0">J. Gregory Walsh</h1>
        <span className="text-lg md:text-xl text-blue-700 font-semibold">Behavioral Analyst | Clinical Research Specialist | Civic Data Strategist</span>
      </div>
    </header>
  );
}

export default Header;
