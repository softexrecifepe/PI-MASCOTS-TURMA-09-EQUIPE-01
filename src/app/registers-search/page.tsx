"use client";
import SearchTutor from "./form-registers-search/form-registers-search"

export default function SearchRegisteredTutor() {
  return (
    <div className="flex h-screen">
      <main className="flex-1 overflow-x-hidden overflow-y-auto ml-20 mt-40px px-10 py-8">
        <SearchTutor />
      </main>
    </div>
  );
}
