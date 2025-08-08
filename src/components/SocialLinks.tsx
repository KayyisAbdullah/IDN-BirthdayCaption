// src/components/SocialLinks.tsx
import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const SocialLinks: React.FC = () => {
  const socialLinks = [
    {
      name: "Open",
      color: "bg-blue-600",
      textColor: "text-white",
      icon: <span className="material-icons">open_in_new</span>,
      url: "/gift", // ← internal route
      internal: true,
    },
    {
      color: "bg-blue-700",
      textColor: "text-white",
      icon: <span className="material-icons">mail</span>,
      url: "/message",
      internal: true,
    },
  ];

  return (
    <div className="mb-6 px-4 flex justify-center mt-5">
      <div className="grid grid-cols-2 gap-4 w-200 mt-5">
        {socialLinks.map((link, index) => {
          const classes = `${link.color} ${link.textColor} py-3 px-6 rounded-xl font-medium text-xs flex items-center justify-center ${
            index === 1 ? "space-x-0 flex-col" : "space-x-3"
          } hover:shadow-xl hover:-translate-y-[4px] hover:scale-[1.07]
             hover:rotate-[0.5deg] hover:contrast-125 hover:saturate-150
             hover:ring-2 hover:ring-black/40 dark:hover:ring-white/40
             transition-all duration-300 ease-out shadow-sm
             hover:border hover:border-black hover:border-opacity-60 dark:hover:border-white/60`;

          const content = (
            <>
              <span className="w-4 h-4 flex items-center justify-center">
                {typeof link.icon === "string" ? (
                  <span className="text-xs font-bold">{link.icon}</span>
                ) : (
                  link.icon
                )}
              </span>
              <span className="text-xs">{link.name}</span>
            </>
          );

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
            >
              {link.internal ? (
                <Link to={link.url} className={classes}>
                  {content}
                </Link>
              ) : (
                <a
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={classes}
                >
                  {content}
                </a>
              )}
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default SocialLinks;