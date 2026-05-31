"use client";

import Image from "next/image";
import { useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import InvitationView from "./components/InvitationView";

function HomeContent() {
  const searchParams = useSearchParams();
  const paramName = searchParams.get("name") ?? "";
  const isNameLocked = !!paramName;

  const [name, setName] = useState(paramName);
  const [isOpen, setIsOpen] = useState(false);

  if (isOpen) return <InvitationView />;

  return (
    <div className="relative flex min-h-screen items-center justify-center">
      {/* Background */}
      <Image
        src="/hero/alomoraphoto-5.jpg.jpeg"
        alt="Bagas dan Yoni"
        fill
        className="object-cover object-[center_60%]"
        priority
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <main className="relative z-10 flex flex-col items-center justify-between text-center px-4 min-h-screen w-full py-16">
        <h1 className="text-[4rem] sm:text-[4rem] md:text-[6rem] text-white drop-shadow-lg">
          Bagas dan Yoni
        </h1>

        <div className="flex flex-col items-center w-full">
          {/* White invitation name box */}
          <div className="bg-white rounded-2xl px-8 py-6 mb-8 w-full max-w-sm shadow-lg">
            <p className="text-[#222222] text-sm mb-2 font-sans">
              Invitation for
            </p>
            <input
              type="text"
              value={name}
              onChange={(e) => !isNameLocked && setName(e.target.value)}
              readOnly={isNameLocked}
              placeholder="Your name"
              className={`w-full text-center text-[#222222] text-xl font-sans border-b bg-transparent pb-1 focus:outline-none ${
                isNameLocked
                  ? "border-transparent cursor-default select-none"
                  : "border-[#cccccc] focus:border-[#222222]"
              }`}
            />
          </div>

          <button
            onClick={() => setIsOpen(true)}
            className="px-8 py-3 bg-white text-[#222222] text-lg font-sans rounded-full hover:bg-[#f0ece0] transition-colors shadow-lg"
          >
            Open Invitation
          </button>
        </div>
      </main>
    </div>
  );
}

export default function Home() {
  return (
    <Suspense fallback={null}>
      <HomeContent />
    </Suspense>
  );
}
