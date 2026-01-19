import React from "react";

function SectionHeading({ children }) {
  return (
    <h2 className="text-3xl sm:text-4xl font-medium capitalize mb-8 text-gray-800 dark:text-gray-50 text-center">
      {children}
    </h2>
  );
}

export default SectionHeading;
