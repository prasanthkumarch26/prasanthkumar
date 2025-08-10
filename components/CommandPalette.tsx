"use client";

import { Search } from "lucide-react";
import React from "react";
import { useState, useEffect } from "react";

const CommandPalette = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");

  // Keybinding: Ctrl + Shift + P or Esc
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey && e.shiftKey && e.key === "P") || e.key === "Escape") {
        e.preventDefault();
        setIsOpen((prev) => !prev);
      }
      // if (e.key === "Enter") {
      //   e.preventDefault();
      //   console.log(query)
      // }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const handleSubmit = () => {
    console.log(query);
    const url = `http://localhost:3000/${encodeURIComponent(query)}`
    window.open(url, '_blank')
  };

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 bg-[#0e0e0e] opacity-100 flex items-center justify-center z-50 text-[#ccd6f6] font-ntr mx-auto">
          <div className="bg-[#151515] w-full max-w-[600px] h-[52px] p-4 rounded-lg shadow-lg flex flex-row items-center gap-2">
            <Search size={20} className="font-bold" />
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="w-full p-2 rounded bg-[#] focus:outline-none"
                placeholder="Search..."
                autoFocus
              />
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default CommandPalette;
