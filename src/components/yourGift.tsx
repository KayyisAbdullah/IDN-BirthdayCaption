import React from "react";
import { QRCodeSVG } from "qrcode.react";
import { Link } from "react-router-dom";

interface GiftProps {}

const YourGift: React.FC<GiftProps> = () => {
  const voucherCode = "GIFT2025";
  const qrValue = `https://yourdomain.com/redeem/${voucherCode}`;

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-pink-300 via-purple-200 to-yellow-200 text-center px-6 animate-gradient-x">
      <div className="max-w-md w-full space-y-8">
        <div className="animate-fade-in-down">
          <h1 className="text-5xl font-bold text-purple-800 mb-4 filter drop-shadow-lg">
            🎁 Selamat!
          </h1>
          <p className="text-xl text-gray-700 mb-8 leading-relaxed">
            Kamu mendapatkan{" "}
            <span className="font-bold text-red-500 animate-pulse">
              voucher spesial
            </span>{" "}
            sebagai hadiah!
          </p>
        </div>

        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-2xl p-8 border-2 border-dashed border-purple-400 transform hover:scale-105 transition-all duration-300 animate-fade-in-up">
          <div className="space-y-6">
            {/* QR Code Section */}
            <div className="bg-white/90 p-4 rounded-xl shadow-inner mx-auto w-fit">
              <QRCodeSVG
                value={qrValue}
                size={150}
                level="H"
                includeMargin={true}
              />
              <p className="text-sm text-gray-600 mt-3 font-medium">
                Scan untuk klaim hadiah
              </p>
            </div>

            {/* Voucher Details */}
            <div className="pt-4 border-t border-purple-200">
              <p className="text-2xl font-mono text-purple-700 font-bold tracking-wider">
                Kode:{" "}
                <span className="text-pink-600">{voucherCode}</span>
              </p>
              <p className="text-sm text-gray-600 mt-3 font-medium">
                Berlaku hingga 31 Desember 2025
              </p>
            </div>
          </div>
        </div>

        {/* Back Button */}
        <Link
          to="/"
          className="inline-block mt-8 px-6 py-3 bg-blue-700 text-white font-medium rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300 hover:shadow-xl hover:-translate-y-[4px] hover:scale-[1.07]
             hover:rotate-[0.5deg] hover:contrast-125 hover:saturate-150
             hover:ring-2 hover:ring-black/40 dark:hover:ring-white/40
             transition-all duration-300 ease-out shadow-sm
             hover:border hover:border-black hover:border-opacity-60 dark:hover:border-white/60"
        >
          ← Kembali ke Halaman Utama
        </Link>
      </div>
    </div>
  );
};

export default YourGift;