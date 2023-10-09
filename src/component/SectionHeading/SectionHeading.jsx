import React from 'react';

const SectionHeading = ({ heading, subHeading }) => {
  return (
   <div className="py-5 my-8">
     <div className="border-t-2 border-b-2 border-indigo-500 py-4 text-center ">
      <p className="text-gray-600 text-sm">{subHeading}</p>
      <h2 className="text-2xl font-semibold text-indigo-700">{heading}</h2>
    </div>
   </div>
  );
};

export default SectionHeading;
