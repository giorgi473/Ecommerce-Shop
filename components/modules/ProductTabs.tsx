"use client";

import { useState } from "react";

export default function ProductTabs() {
  const [activeTab, setActiveTab] = useState("description");

  const tabs = [
    {
      id: "description",
      label: "Description",
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.ac",
    },
    {
      id: "reviews",
      label: "Reviews (2)",
      content:
        "Customer reviews will appear here. Currently there are 2 reviews for this product.",
    },
  ];

  return (
    <div className="">
      {/* Tab Buttons */}
      <div className="flex gap-8 border-b border-gray-200 mb-6">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`pb-3 font-medium transition-all duration-200 relative ${
              activeTab === tab.id
                ? "text-red-500"
                : "text-gray-600 hover:text-gray-900"
            }`}
          >
            {tab.label}
            {activeTab === tab.id && (
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-red-500" />
            )}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="bg-gray-50 rounded-lg p-6">
        {tabs.map(
          (tab) =>
            activeTab === tab.id && (
              <div
                key={tab.id}
                className="text-gray-700 leading-relaxed animate-fadeIn"
              >
                {tab.content}
              </div>
            )
        )}
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        :global(.animate-fadeIn) {
          animation: fadeIn 0.2s ease-in;
        }
      `}</style>
    </div>
  );
}
