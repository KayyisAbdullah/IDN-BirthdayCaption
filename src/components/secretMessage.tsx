import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";

interface GiftProps {}

const SecretMessage: React.FC<GiftProps> = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isRevealed, setIsRevealed] = useState(false);
  const [scratchPercentage, setScratchPercentage] = useState(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set initial cover
    ctx.fillStyle = "#A78BFA"; // Purple cover
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  }, []);

  const handleScratch = (
    e:
      | React.MouseEvent<HTMLCanvasElement>
      | React.TouchEvent<HTMLCanvasElement>
  ) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const rect = canvas.getBoundingClientRect();
    const x = (e as React.TouchEvent<HTMLCanvasElement>).touches
      ? (e as React.TouchEvent<HTMLCanvasElement>).touches[0].clientX - rect.left
      : (e as React.MouseEvent<HTMLCanvasElement>).clientX - rect.left;
    const y = (e as React.TouchEvent<HTMLCanvasElement>).touches
      ? (e as React.TouchEvent<HTMLCanvasElement>).touches[0].clientY - rect.top
      : (e as React.MouseEvent<HTMLCanvasElement>).clientY - rect.top;

    ctx.globalCompositeOperation = "destination-out";
    ctx.beginPath();
    ctx.arc(x, y, 20, 0, Math.PI * 2);
    ctx.fill();

    // Calculate scratch percentage
    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    const pixels = imageData.data;
    let transparentPixels = 0;
    for (let i = 0; i < pixels.length; i += 4) {
      if (pixels[i + 3] === 0) transparentPixels++;
    }
    const newPercentage = (transparentPixels / (pixels.length / 4)) * 100;
    setScratchPercentage(newPercentage);

    if (newPercentage > 50) {
      setIsRevealed(true);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-pink-300 via-purple-200 to-yellow-200 text-center px-4 sm:px-6 animate-gradient-x">
      <div className="max-w-md w-full space-y-8">
        <div className="animate-fade-in-down">
          <h1 className="text-5xl font-bold text-purple-800 mb-4 filter drop-shadow-lg">
            a Message?
          </h1>
          <p className="text-xl text-gray-700 mb-8 leading-relaxed">
            Sebenernya ini{" "}
            <span className="font-bold text-red-500 animate-pulse">
              cuma sedikit
            </span>{" "}
            pesan
          </p>
        </div>

        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-2xl p-4 sm:p-9 border-2 border-dashed border-purple-400 transform hover:scale-105 transition-all duration-300 animate-fade-in-up">
          <div className="relative h-[280px] w-full max-w-[320px] mx-auto">
            {/* Hidden Message */}
            <div
              className={`absolute inset-0 flex flex-col justify-center items-center space-y-4 ${
                isRevealed ? "opacity-100" : "opacity-40"
              }`}
            >
              <p className="text-gray-700 text-sm sm:text-base px-2 sm:px-4">
                Sholawat serta salam atas keberkahan bertambahnya usia. Seperti halnya bumi yang tak lelah menerima hujan rahmat, semoga usiamu pun dipenuhi keberkahan, kebahagiaan, kesehatan, keselamatan dan kesejahteraan bagi Nana dan keluarga.
              </p>

               <p className="text-gray-700 text-sm sm:text-base px-2 sm:px-4">
                 Di sela waktu yang tersirat, ada langkah kecil diam-diam berjuang, memperbaiki, dan memantaskan.
              </p>
            </div>

            {/* Scratch Layer */}
            <canvas
              ref={canvasRef}
              width={300}
              height={240}
              className={`absolute inset-0 touch-none cursor-pointer w-full h-full ${
                isRevealed ? "hidden" : ""
              }`}
              onMouseMove={handleScratch}
              onTouchMove={handleScratch}
            />

            {/* Progress indicator */}
            {!isRevealed && (
              <p className="absolute -bottom-6 left-0 right-0 text-xs sm:text-sm text-gray-600">
                Gosok untuk melihat pesan! (
                {Math.round(scratchPercentage)}% tergosok)
              </p>
            )}
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

export default SecretMessage;