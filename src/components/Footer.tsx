import React from 'react';
import { Copyright } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black dark:bg-white-900 text-white dark:text-black py-4 px-4 rounded-t-3xl mx-4 mt-8 font-nova"> {/* ✅ Warna latar & teks disesuaikan */}
      <div className="text-center">
        <div className="flex items-center justify-center space-x-1 text-xs">
          <Copyright className="w-3 h-3" />
          <span>
            2025 IDN Kayyisabd | All right Reserved
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;