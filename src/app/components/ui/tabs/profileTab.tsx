import { useState } from "react";

export default function ProfileTab() {
  const [activeTab, setActiveTab] = useState("Histórico");

  return (
    <div className="w-full max-w-md p-4 bg-white border-b-2 shadow-md rounded">
      <div className="flex space-x-4 border-b w-full">
        <button
          className={`w-1/2 tab-btn py-2 px-4 ${
            activeTab === "Histórico"
              ? "text-blue-600 border-b-2 border-blue-600"
              : "text-gray-600"
          }`}
          onClick={() => setActiveTab("Histórico")}
        >
          Histórico
        </button>
        <button
          className={`tab-btn w-1/2 py-2 px-4 ${
            activeTab === "Procedimentos"
              ? "text-blue-600 border-b-2 border-blue-600"
              : "text-gray-600"
          }`}
          onClick={() => setActiveTab("Procedimentos")}
        >
          Procedimentos
        </button>
      </div>
      <div className="mt-4">
        <div className="py-3 border">período e botões</div>
        {activeTab === "Histórico" && <div>Conteúdo da Tab 1</div>}
        {activeTab === "Procedimentos" && <div>Conteúdo da Tab 2</div>}
      </div>
    </div>
  );
}
