"use client";

const RegClosed = () => {
  return (
    <div className="flex justify-center items-center h-screen px-10 bg-opacity-50 backdrop-blur-sm">
      <div className="relative p-16 border-8 border-gray-200 dark:border-gray-600 shadow-2xl rounded-lg backdrop-blur-3xl bg-white dark:bg-gray-800">
        <div className="absolute w-8 h-8 border border-gray-400 dark:border-gray-500 top-[-16px] left-1/2 transform -translate-x-1/2 rotate-45 border-b-0 border-r-0"></div>
        <div className="absolute w-4 h-4 bg-black dark:bg-white rounded-full top-[-20px] left-1/2 transform -translate-x-1/2"></div>
        <div className="text-center">
          <h2 className="text-4xl bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 text-transparent bg-clip-text py-3 dark:from-blue-400 dark:via-green-400 dark:to-indigo-300 font-lg">
            Registration Closed
          </h2>
          <p className="mt-4 text-lg text-gray-700 dark:text-gray-300 font-serif">
            Transport details: (February 9th, 2026)
          </p>
          <div className="mt-8 animate-fade-up is-visible">
            <a
              href="/transport-details.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 sm:px-8 sm:py-4 text-base sm:text-md font-semibold text-white bg-gradient-to-r from-blue-500 to-teal-400 rounded-lg shadow-lg hover:from-teal-400 hover:to-blue-500 transition-all hover-scale dark:from-teal-400 dark:to-blue-500 dark:hover:from-blue-500 dark:hover:to-teal-400 font-serif"
            >
              Download PDF
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegClosed;
