import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState, useRef, useEffect, useMemo } from 'react';
import Header from './components/Header';
import IntroSection from './components/IntroSection';
import SocialLinks from './components/SocialLinks';
import Footer from './components/Footer';
import YourGift from './components/yourGift'; // Updated import path
import SecretMessage from './components/secretMessage'; // Updated import path
// Types
interface AnimationProps {
  isDark: boolean;
}

// Animation Components
const Stars = ({ isDark }: AnimationProps) => (
  <>
    {[...Array(20)].map((_, i) => (
      <div
        key={`star-${i}`}
        className="absolute animate-twinkle will-change-transform"
        style={{
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          animationDelay: `${Math.random() * 3}s`,
        }}
      >
        <div className={`text-2xl transform rotate-45 ${
          isDark ? 'text-yellow-300' : 'text-yellow-400'
        }`}>★</div>
      </div>
    ))}
  </>
);

function App() {
  const [isDark, setIsDark] = useState(false);
  const [isMusicPlaying, setIsMusicPlaying] = useState(false); // default: tidak main
  const [showAudioConsent, setShowAudioConsent] = useState(true);
  const audioRef = useRef<HTMLAudioElement>(null);

  const toggleTheme = () => setIsDark(!isDark);

  const toggleMusic = () => {
    if (audioRef.current) {
      if (isMusicPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsMusicPlaying(!isMusicPlaying);
    }
  };

  const handleAudioConsent = async () => {
    try {
      if (audioRef.current) {
        audioRef.current.volume = 0.4;
        audioRef.current.loop = true;
        await audioRef.current.play();
        setIsMusicPlaying(true);
        setShowAudioConsent(false);
        localStorage.setItem('audioConsent', 'true');
      }
    } catch (err) {
      console.log('🔒 Gagal memutar musik:', err);
    }
  };

  useEffect(() => {
    const audioAllowed = localStorage.getItem('audioConsent');
    if (audioAllowed === 'true') {
      handleAudioConsent();
    }
  }, []);

  // Memoize animations for performance
  const animations = useMemo(() => (
    <div className="fixed inset-0 z-0 overflow-hidden">
      <Stars isDark={isDark} />
      {/* Party Hats */}
      {[...Array(10)].map((_, i) => (
        <div
          key={`hat-${i}`}
          className={`absolute animate-float-rotate ${
            isDark ? 'opacity-50' : 'opacity-70'
          }`}
          style={{
            left: `${Math.random() * 100}%`,
            top: `-${Math.random() * 20}%`,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${10 + Math.random() * 5}s`,
          }}
        >
          <div
            className="w-0 h-0 border-l-[15px] border-r-[15px] border-b-[30px]"
            style={{
              borderLeftColor: 'transparent',
              borderRightColor: 'transparent',
              borderBottomColor: isDark 
                ? ['#FFD700', '#7FFFD4', '#FFA07A', '#98FB98'][Math.floor(Math.random() * 4)]
                : ['#FF5252', '#00C2A8', '#FF9999', '#99FF99'][Math.floor(Math.random() * 4)]
            }}
          />
        </div>
      ))}

      {/* Balloons */}
      {[...Array(25)].map((_, i) => (
        <div
          key={i}
          className="absolute animate-float-down"
          style={{
            left: `${Math.random() * 100}%`,
            top: `-${Math.random() * 20}%`,
            animationDelay: `${Math.random() * 8}s`,
            animationDuration: `${8 + Math.random() * 7}s`,
            transform: `scale(${0.5 + Math.random() * 1})`,
          }}
        >
          <div
            className={`rounded-full relative before:content-[''] before:absolute before:bottom-0 before:left-1/2 before:w-1 before:h-6 ${
              isDark ? 'before:bg-gray-400 opacity-60' : 'before:bg-gray-400 opacity-70'
            }`}
            style={{
              width: `${30 + Math.random() * 20}px`,
              height: `${35 + Math.random() * 25}px`,
              backgroundColor: isDark
                ? (['#FFD700', '#7FFFD4', '#87CEEB', '#DDA0DD', '#F0E68C', '#FFA07A', '#98FB98', '#E6E6FA']
                [Math.floor(Math.random() * 8)])
                : (['#FF5252', '#00C2A8', '#45B7D1', '#96CEB4', '#FFEEAD', '#FF9999', '#99FF99', '#9999FF']
                [Math.floor(Math.random() * 8)])
            }}
          />
        </div>
      ))}
    </div>
  ), [isDark]);

 return (
    <Router>
      <div
        className={`min-h-screen transition-colors duration-300 relative overflow-hidden ${
          isDark ? 'bg-gray-900 text-white' : 'bg-teal-50'
        }`}
      >
        {animations}

        <div className="relative z-10">
          {/* 🔔 Audio Consent Modal */}
          {showAudioConsent && (
            <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
              <div className="bg-white rounded-lg p-6 text-center shadow-lg max-w-xs">
                <p className="text-lg font-medium text-gray-800 mb-4">
                  🎧 Aktifkan musik latar?
                </p>
                <button
                  onClick={handleAudioConsent}
                  className="px-4 py-2 bg-teal-500 text-white rounded hover:bg-teal-600 transition"
                >
                  Izinkan
                </button>
              </div>
            </div>
          )}

          {/* 🧱 Routing Layout */}
          <Routes>
            <Route
              path="/"
              element={
                <div className="max-w-sm mx-auto">
                  <Header
                    isDark={isDark}
                    onToggleTheme={toggleTheme}
                    isMusicPlaying={isMusicPlaying}
                    onToggleMusic={toggleMusic}
                  />
                  <main className="pb-4">
                    <IntroSection />
                    <SocialLinks />
                  </main>
                  <Footer />
                </div>
              }
            />
            <Route path="/gift" element={<YourGift />} />
             <Route path="/Message" element={<SecretMessage />} />
          </Routes>
        </div>

        {/* 🎵 Audio Element */}
        <audio
          ref={audioRef}
          src="/audio/HappyBirthday.mp3"
          loop
          preload="auto"
          onError={() => console.log('❌ Audio gagal dimuat')}
        />
      </div>
    </Router>
  );
}

export default App;