import React from 'react';

function Footer() {
  return (
    <footer className="text-center text-gray-500 py-8 text-sm mt-12">
      <hr className="mb-4 border-gray-200" />
      <div className="mb-2">© 2025 J. Gregory Walsh</div>
      <div className="flex flex-wrap justify-center gap-4">
        <a href="https://www.linkedin.com/in/jgregorywalsh/" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:underline">LinkedIn</a>
        <a href="https://alumni.siena.edu/" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:underline">Siena Alumni</a>
        <a href="mailto:jgwalsh@bu.edu" className="text-blue-700 hover:underline">BU Email</a>
      </div>
    </footer>
  );
}

export default Footer;
