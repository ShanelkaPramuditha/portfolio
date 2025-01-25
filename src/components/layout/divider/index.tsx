import React from 'react';

const Divider: React.FC = () => {
  return (
    <div className="flex justify-center bg-white dark:bg-gray-900">
      <hr className="h-1 bg-gray-200 border-0 dark:bg-gray-700 max-w-screen-xl mx-auto w-full rounded-full px-4" />
    </div>
  );
};

export default Divider;
