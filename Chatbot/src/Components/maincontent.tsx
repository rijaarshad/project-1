import React from 'react';
import LanguageSelector from './LanguageSelector';

const MainContent: React.FC = () => {
  return (
    <div className="flex flex-col flex-grow">
      {/* Header already present at top */}

      {/* This is the top-right section below header */}
      <div className="w-full">
        <LanguageSelector />
      </div>

      {/* Rest of chat screen or body */}
      <div className="flex-grow bg-white p-6">
        {/* Chat messages etc. */}
      </div>
    </div>
  );
};

export default MainContent;
