import React from 'react';
import { Sun, Moon, Volume2, VolumeX } from 'lucide-react';

interface HeaderProps {
  isDark: boolean;
  onToggleTheme: () => void;
  isMusicPlaying: boolean;
  onToggleMusic: () => void;
}

const Header: React.FC<HeaderProps> = ({ isDark, onToggleTheme, isMusicPlaying, onToggleMusic }) => {
  return (
    <header className="flex justify-between items-center p-4 pt-6">
      <div className="flex items-center gap-1">
        <img
          src="/images/logo.png"
          alt="Logo VS"
          className="w-10 h-20 rounded-full object-cover ml-2"
        />
        <span className="font-semibold light:text-gray-900 dark:text-white text-base leading-none">
          IDN Kayyisabd
        </span>
      </div>

      <div className="flex items-center gap-2">
       {/* Music toggle */}
      <button
        onClick={onToggleMusic}
        aria-label={isMusicPlaying ? 'Mute music' : 'Play music'}
        title={isMusicPlaying ? 'Mute music' : 'Play music'}
        className="w-8 h-8 flex items-center justify-center rounded-full bg-blue-50 hover:bg-blue-200 transition-colors"
      >
  {isMusicPlaying ? (
    <Volume2 className="w-4 h-4 text-blue-700" />
  ) : (
    <VolumeX className="w-4 h-4 text-gray-500" />
  )}
</button>

        {/* Theme toggle */}
        <button
          onClick={onToggleTheme}
          aria-label="Toggle dark/light theme"
          title="Toggle theme"
          className="relative w-12 h-6 bg-blue-100 rounded-full p-0.5 transition-colors duration-300"
        >
          <div
            className={`absolute w-5 h-5 bg-white rounded-full shadow-sm transition-transform duration-300 flex items-center justify-center ${
              isDark ? 'translate-x-6' : 'translate-x-0'
            } -translate-y-2.5`}
          >
            {isDark ? (
              <Moon className="w-2.5 h-2.5 text-blue-600" />
            ) : (
              <Sun className="w-2.5 h-2.5 text-yellow-500" />
            )}
          </div>
        </button> 
      </div>
    </header>
  );
};

export default Header;