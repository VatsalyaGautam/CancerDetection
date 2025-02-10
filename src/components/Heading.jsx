import React from 'react';

function Heading({ title, description, color }) {
  return (
    <div className='px-4 sm:px-6 lg:px-8 '>
    <div className="text-center">
      <h2
        className={`text-4xl sm:text-5xl p-1 font-bold bg-clip-text text-transparent mb-6 ${getBlueGradient(color)}`}
      >
        {title}
      </h2>
      <p className={`text-lg ${getBlueText(color)} mb-8 leading-relaxed`}>
        {description}
      </p>
      </div>
    </div>
  );
}

// Function to generate correct Tailwind gradient classes dynamically
const getBlueGradient = (color) => {
  return `bg-gradient-to-r from-blue-${color+200} to-blue-${color - 100}`;
};

// Function to generate text color dynamically
const getBlueText = (color) => {
  return `text-blue-${color}`;
};

export default Heading;