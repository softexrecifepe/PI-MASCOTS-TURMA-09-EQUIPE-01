import React, { useState } from "react";

type TabType = {
  labels: string[];
  children: React.ReactNode | React.ReactNode[];
};

export default function Tab({ labels, children }: TabType) {
  const [activeTab, setActiveTab] = useState<number>(0);

  return (
    <>
      {/* container */}
      <div className="border w-full p-4 bg-white border-b-2 shadow-md rounded">
        {/* header */}
        <div className="flex space-x-4 border-b w-full">
          {labels.map((label, index) => (
            <button
              key={index}
              className={` tab-btn py-2 px-4 transition-colors duration-300 ${
                activeTab === index
                  ? "border-b-2 border-blue-500 text-blue-500"
                  : "text-gray-600"
              }`}
              onClick={() => setActiveTab(index)}
            >
              {label}
            </button>
          ))}
        </div>
        {/* content */}
        <div>
          {Array.isArray(children)
            ? React.Children.toArray(children)[activeTab]
            : children}
        </div>
      </div>
    </>
  );
}
