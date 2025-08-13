"use client";
import { useState } from "react";
import Header from "../organisms/Header";
import SideBar from "../organisms/SideBar";

export default function MainLayout({ children, pageTitle }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen">
      <SideBar
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
      />

      {isSidebarOpen && (
        <div
          className="fixed inset-0 z-20 bg-black opacity-50 backdrop-blur-[2px] md:hidden"
          onClick={() => setIsSidebarOpen(false)}
        ></div>
      )}

      <div className="flex flex-1 flex-col">
        <Header
          pageTitle={pageTitle}
          isSidebarOpen={isSidebarOpen}
          setIsSidebarOpen={setIsSidebarOpen}
        />

        <main className="max-w-[100vw] flex-1 overflow-y-auto py-5  md:px-8 px-5 bg-gradient-to-b from-[#fff6a9c4] to-[#ecd8a2c4]">
          {children}
        </main>
      </div>
    </div>
  );
}
