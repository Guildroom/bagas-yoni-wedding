"use client";
import Image from "next/image";
import { useRef, useEffect, useState } from "react";

const images = [
  "/hero/alomoraphoto-5.jpg.jpeg",
  "/hero/alomoraphoto-7.jpg.jpeg",
  "/hero/Alomoraphoto-10.jpg.jpeg",
  "/hero/Alomoraphoto-12.jpg.jpeg",
  "/hero/Alomoraphoto-13.jpg.jpeg",
  "/hero/Alomoraphoto-14.jpg.jpeg",
  "/hero/Alomoraphoto-18.jpg.jpeg",
  "/hero/Alomoraphoto-2.jpg.jpeg",
  "/hero/Alomoraphoto-25.jpg.jpeg",
  "/hero/Alomoraphoto-26.jpg.jpeg",
  "/hero/Alomoraphoto-27.jpg.jpeg",
  "/hero/alomoraphoto-28.jpg.jpeg",
  "/hero/Alomoraphoto-29.jpg.jpeg",
  "/hero/alomoraphoto-30.jpg.jpeg",
  "/hero/Alomoraphoto-31.jpg.jpeg",
  "/hero/alomoraphoto-34.jpg.jpeg",
  "/hero/alomoraphoto-36.jpg.jpeg",
  "/hero/Alomoraphoto-37.jpg.jpeg",
  "/hero/alomoraphoto-38.jpg.jpeg",
  "/hero/Alomoraphoto-41.jpg.jpeg",
  "/hero/Alomoraphoto-43.jpg.jpeg",
  "/hero/Alomoraphoto-44.jpg.jpeg",
  "/hero/Alomoraphoto-45.jpg.jpeg",
  "/hero/Alomoraphoto-46.jpg.jpeg",
  "/hero/Alomoraphoto-47.jpg.jpeg",
  "/hero/Alomoraphoto-48.jpg.jpeg",
  "/hero/Alomoraphoto-49.jpg.jpeg",
  "/hero/Alomoraphoto-50.jpg.jpeg",
  "/hero/alomoraphoto-55.jpg.jpeg",
  "/hero/Alomoraphoto-60.jpg.jpeg",
  "/hero/Alomoraphoto-61.jpg.jpeg",
  "/hero/Alomoraphoto-62.jpg.jpeg",
  "/hero/Alomoraphoto-68.jpg.jpeg",
  "/hero/Alomoraphoto-69.jpg.jpeg",
  "/hero/Alomoraphoto-71.jpg.jpeg",
  "/hero/Alomoraphoto-74.jpg.jpeg",
  "/hero/Alomoraphoto-75.jpg.jpeg",
  "/hero/alomoraphoto-77.jpg",
  "/hero/Alomoraphoto-81.jpg.jpeg",
  "/hero/alomoraphoto-83.jpg",
  "/hero/Alomoraphoto-86.jpg.jpeg",
  "/hero/Alomoraphoto-87.jpg.jpeg",
  "/hero/Alomoraphoto-90.jpg.jpeg",
  "/hero/Alomoraphoto-99.jpg.jpeg",
  "/hero/Alomoraphoto-100.jpg.jpeg",
];

function ImageModal({ src, onClose }: { src: string; onClose: () => void }) {
  const filename = src.split("/").pop() ?? "photo";

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
      onClick={onClose}
    >
      <div
        className="relative max-w-3xl w-full flex flex-col items-center gap-4"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute -top-3 -right-3 z-10 w-9 h-9 rounded-full bg-white/90 text-black flex items-center justify-center text-lg font-bold shadow hover:bg-white transition"
          aria-label="Close"
        >
          ✕
        </button>

        {/* Image */}
        <div
          className="relative w-full"
          style={{ aspectRatio: "4/5", maxHeight: "75vh" }}
        >
          <Image
            src={src}
            alt=""
            fill
            className="object-contain rounded-xl"
            sizes="(max-width: 768px) 100vw, 768px"
          />
        </div>

        {/* Download button */}
        <a
          href={src}
          download={filename}
          className="px-6 py-2 rounded-full bg-white text-black font-semibold text-sm shadow hover:bg-stone-100 transition"
        >
          Download
        </a>
      </div>
    </div>
  );
}

export default function Gallery() {
  const track = [...images, ...images];
  const ref = useRef<HTMLDivElement>(null);
  const animRef = useRef<number>(0);
  const isPaused = useRef(false);
  const dragStartX = useRef(0);
  const dragStartScroll = useRef(0);
  const position = useRef(0);
  const didDrag = useRef(false);
  const [grabbed, setGrabbed] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const SPEED = 30; // px per second — change this to adjust speed
    let lastTime: number | null = null;

    function tick(timestamp: number) {
      if (el && !isPaused.current) {
        const delta = lastTime !== null ? timestamp - lastTime : 0;
        position.current += (SPEED * delta) / 1000;
        const half = el.scrollWidth / 2;
        if (position.current >= half) position.current -= half;
        el.scrollLeft = position.current;
      }
      lastTime = timestamp;
      animRef.current = requestAnimationFrame(tick);
    }

    animRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(animRef.current);
  }, []);

  // ── Mouse drag ──────────────────────────────────────────
  function onMouseDown(e: React.MouseEvent) {
    isPaused.current = true;
    setGrabbed(true);
    didDrag.current = false;
    dragStartX.current = e.pageX;
    dragStartScroll.current = position.current;
  }

  function onMouseMove(e: React.MouseEvent) {
    if (!isPaused.current || !grabbed || !ref.current) return;
    const dx = e.pageX - dragStartX.current;
    if (Math.abs(dx) > 4) didDrag.current = true;
    let next = dragStartScroll.current - dx;
    const half = ref.current.scrollWidth / 2;
    if (next < 0) next += half;
    if (next >= half) next -= half;
    position.current = next;
    ref.current.scrollLeft = next;
  }

  function stopDrag() {
    isPaused.current = false;
    setGrabbed(false);
  }

  // ── Touch drag ──────────────────────────────────────────
  function onTouchStart(e: React.TouchEvent) {
    isPaused.current = true;
    didDrag.current = false;
    dragStartX.current = e.touches[0].pageX;
    dragStartScroll.current = position.current;
  }

  function onTouchMove(e: React.TouchEvent) {
    if (!ref.current) return;
    const dx = e.touches[0].pageX - dragStartX.current;
    if (Math.abs(dx) > 4) didDrag.current = true;
    let next = dragStartScroll.current - dx;
    const half = ref.current.scrollWidth / 2;
    if (next < 0) next += half;
    if (next >= half) next -= half;
    position.current = next;
    ref.current.scrollLeft = next;
  }

  return (
    <>
      {selectedImage && (
        <ImageModal
          src={selectedImage}
          onClose={() => setSelectedImage(null)}
        />
      )}

      <div
        ref={ref}
        className={`w-full flex gap-4 overflow-x-hidden pb-2 select-none
          ${grabbed ? "cursor-grabbing" : "cursor-grab"}`}
        onMouseDown={onMouseDown}
        onMouseMove={onMouseMove}
        onMouseUp={stopDrag}
        onMouseLeave={stopDrag}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={stopDrag}
      >
        {track.map((src, i) => (
          <div
            key={i}
            className="relative shrink-0 w-64 h-80 sm:w-72 sm:h-96 rounded-xl overflow-hidden"
            onClick={() => {
              if (!didDrag.current) setSelectedImage(images[i % images.length]);
            }}
          >
            <Image
              src={src}
              alt=""
              fill
              draggable={false}
              className="object-cover object-[center_20%] pointer-events-none"
              sizes="288px"
            />
          </div>
        ))}
      </div>
    </>
  );
}
