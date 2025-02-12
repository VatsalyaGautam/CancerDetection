import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

export const HoverEffect = ({ items }) => {
  let [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-10">
      {items.map((item, idx) => (
        <div
          key={idx}
          className="relative group block p-2 h-full w-full"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full bg-neutral-200 dark:bg-blue-300/[0.8] block rounded-3xl shadow-2xl"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  boxShadow: "0px 15px 35px rgba(0, 90, 255, 0.4)",
                  transition: { duration: 0.2 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.2, delay: 0.1 },
                }}
              />
            )}
          </AnimatePresence>
          <Card icon={item.icon} title={item.title} description={item.description} />
        </div>
      ))}
    </div>
  );
};

export const Card = ({ icon: Icon, title, description }) => {
  return (
    <div className="group relative h-full bg-white/80 backdrop-blur-lg p-6 rounded-xl shadow-lg transition-all duration-300 ease-out transform hover:bg-blue-50 hover:shadow-2xl">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 opacity-0 rounded-xl blur-xl transition-opacity duration-300 group-hover:opacity-20" />

      <div className="bg-blue-500/20 w-14 h-14 rounded-full flex items-center justify-center mb-4 mx-auto text-blue-600 transition-colors duration-300 group-hover:text-black">
        {Icon}
      </div>

      <h3 className="text-xl font-semibold text-blue-900 mb-2 text-center transition-colors duration-300 group-hover:text-black">
        {title}
      </h3>
      <p className="text-gray-600 text-center transition-colors duration-300 group-hover:text-neutral-800">
        {description}
      </p>
    </div>
  );
};