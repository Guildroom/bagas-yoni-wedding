"use client";

import { useState } from "react";

interface Wish {
  id: number;
  name: string;
  message: string;
  timestamp: Date;
}

export default function Wishes() {
  const [wishes, setWishes] = useState<Wish[]>([]);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!name.trim() || !message.trim()) return;
    setWishes((prev) => [
      {
        id: Date.now(),
        name: name.trim(),
        message: message.trim(),
        timestamp: new Date(),
      },
      ...prev,
    ]);
    setName("");
    setMessage("");
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  }

  return (
    <div className="w-full max-w-lg mx-auto flex flex-col gap-6">
      {/* Form */}
      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <input
          type="text"
          placeholder="Your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          maxLength={80}
          className="w-full bg-transparent border-b border-white/40 focus:border-white outline-none text-white text-sm py-1.5 placeholder:text-white/40 transition-colors"
        />
        <textarea
          placeholder="Leave your wishes or congratulations…"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          maxLength={500}
          rows={3}
          className="w-full bg-transparent border border-white/40 focus:border-white outline-none text-white text-sm p-2.5 placeholder:text-white/40 resize-none transition-colors rounded-sm"
        />
        <div className="flex items-center gap-3">
          <button
            type="submit"
            disabled={!name.trim() || !message.trim()}
            className="px-6 py-2 bg-white text-[#222222] text-xs tracking-widest uppercase rounded-full hover:bg-white/80 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
          >
            Send Wishes
          </button>
          {submitted && (
            <p className="text-xs text-white/70 italic">Thank you! 🤍</p>
          )}
        </div>
      </form>

      {/* Wish list */}
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-4">
          <div className="flex-1 border-t border-white/20" />
          <p className="text-xs tracking-[0.3em] uppercase text-white/50">
            {wishes.length > 0
              ? `${wishes.length} wish${wishes.length > 1 ? "es" : ""}`
              : "Wishes"}
          </p>
          <div className="flex-1 border-t border-white/20" />
        </div>

        <div className="max-h-72 overflow-y-auto flex flex-col gap-4 pr-2 [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-track]:bg-white/10 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-white/30 [&::-webkit-scrollbar-thumb:hover]:bg-white/50">
          {wishes.length === 0 ? (
            <p className="text-center text-white/40 italic text-xs py-4">
              Be the first to leave a wish 🤍
            </p>
          ) : (
            wishes.map((wish) => (
              <div key={wish.id} className="border-b border-white/20 pb-4">
                <div className="flex items-baseline justify-between mb-1">
                  <p className="font-semibold text-white text-sm">
                    {wish.name}
                  </p>
                  <p className="text-xs text-white/50">
                    {wish.timestamp.toLocaleTimeString([], {
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </p>
                </div>
                <p className="text-white/80 text-sm leading-relaxed">
                  {wish.message}
                </p>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
