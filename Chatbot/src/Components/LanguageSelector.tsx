import React, { useState } from 'react';
import { Search } from 'lucide-react';

const languages = [
  { code: 'en', label: 'English', flag: '🇺🇸' },
  { code: 'de', label: 'German', flag: '🇩🇪' },
  { code: 'fr', label: 'French', flag: '🇫🇷' },
];

const LanguageSelector: React.FC = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedLang, setSelectedLang] = useState(languages[0]);

  return (
    <div className="flex flex-col items-end gap-4 p-4 relative">
      {/* Profile Image */}
      <img
        src="https://randomuser.me/api/portraits/women/44.jpg"
        alt="Profile"
        className="w-10 h-10 rounded-full object-cover mb-2"
      />

      {/* Language Dropdown */}
      <div className="relative">
        <button
          onClick={() => setShowDropdown(!showDropdown)}
          className="text-xl flex items-center gap-2"
        >
          {selectedLang.flag}
          <span className="text-sm">{selectedLang.label}</span>
        </button>
        {showDropdown && (
          <div className="absolute top-0 right-0 bg-white border rounded shadow-lg w-32 z-10 mt-2">
            {languages.map((lang) => (
              <div
                key={lang.code}
                onClick={() => {
                  setSelectedLang(lang);
                  setShowDropdown(false);
                }}
                className="flex items-center gap-2 p-2 hover:bg-gray-100 cursor-pointer"
              >
                <span>{lang.flag}</span>
                <span className="text-sm">{lang.label}</span>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Search Icon */}
      <button className="w-9 h-9 rounded-full border flex items-center justify-center hover:bg-gray-100 mt-auto">
        <Search size={18} />
      </button>
    </div>
  );
};

export default LanguageSelector;