import React from "react";
import Image from "next/image";
import FadeIn from "./FadeIn";

interface Story {
  title: string;
  date: string;
  text: React.ReactNode;
}

const storiesLeft: Story[] = [
  {
    title: "Awal Pertemuan",
    date: "Juli 2017",
    text: "Pertemuan kami bermula di Gunung Batur saat masih duduk di bangku SMA. Dalam perjalanan mendaki yang sederhana, kami saling mengenal tanpa pernah menyangka bahwa takdir sedang menuliskan kisah indah untuk masa depan kami.",
  },
  {
    title: "Memulai Kisah",
    date: "17 Juli 2017",
    text: "Pada tanggal 17-07-17, kami memutuskan untuk melangkah bersama. Sebagai dua remaja yang masih merajut mimpi, kami belajar saling mendukung dan tumbuh menjadi pribadi yang lebih baik untuk satu sama lain.",
  },
  {
    title: "Menjaga Cinta dari Jarak Jauh",
    date: "2019 - 2023",
    text: "Perjalanan kami membawa kami ke kota yang berbeda. Bagas melanjutkan pendidikan di Yogyakarta, sementara Yoni menempuh pendidikan di Denpasar. Meski dipisahkan jarak, kami percaya bahwa cinta selalu menemukan cara untuk tetap dekat.",
  },
  {
    title: "Menuju Pelabuhan Hati",
    date: "Agustus 2026",
    text: "Sembilan tahun berlalu penuh cerita, tawa, air mata, dan pelajaran berharga tentang memahami serta menerima satu sama lain. Dengan keyakinan yang semakin kuat, kami memutuskan melangkah ke babak baru kehidupan dan mengikat janji suci dalam pernikahan.",
  },
  {
    title: "",
    date: "",
    text: (
      <>
        <em>
          Dari sebuah pertemuan yang tak terduga, kami belajar bahwa cinta bukan
          tentang menemukan seseorang yang sempurna, melainkan tentang tumbuh
          bersama menuju tujuan yang sama.
        </em>
        <br />
        <br />
        _______ Bagas & Yoni _______
      </>
    ),
  },
];

export default function OurStory() {
  return (
    <section className="bg-[#fbf7ee] px-6 md:px-16 py-20">
      {/* Heading */}
      <FadeIn className="text-center mb-16">
        <p className="text-xs tracking-[0.3em] uppercase text-[#888888] mb-3">
          How it all happened
        </p>
        <h2
          className="text-[3rem] sm:text-[5rem] md:text-[7rem] text-[#222222] leading-tight"
          style={{ fontFamily: "var(--font-parfumerie-script)" }}
        >
          Our Story
        </h2>
        <div className="w-16 border-t border-[#cccccc] mx-auto mt-8" />
      </FadeIn>

      {/* Section A – single image left, stories right */}
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-12 md:gap-16 mb-20 md:mb-32">
        {/* Image – left on desktop, bottom on mobile */}
        <FadeIn
          direction="right"
          className="order-2 md:order-1 w-full md:w-5/12 shrink-0"
        >
          <div className="w-full h-85 md:h-full min-h-125 overflow-hidden">
            <Image
              src="/hero/Alomoraphoto-18.jpg.jpeg"
              alt="Our early story"
              width={700}
              height={900}
              className="w-full h-full object-cover object-[center_20%]"
            />
          </div>
        </FadeIn>

        {/* Stories – right on desktop, top on mobile */}
        <div className="order-1 md:order-2 flex-1 flex flex-col gap-10 justify-center">
          {storiesLeft.map((story, i) => (
            <FadeIn key={story.title} delay={i * 0.1} direction="left">
              <p className="text-xs tracking-[0.3em] uppercase text-[#888888] mb-2">
                {story.date}
              </p>
              <h3
                className="text-[2.5rem] sm:text-[2.9rem] md:text-[3.4rem] text-[#222222] leading-tight mb-3 font-bold"
                style={{ fontFamily: "var(--font-parfumerie-script)" }}
              >
                {story.title}
              </h3>
              <p className="text-[#444444] text-base leading-relaxed">
                {story.text}
              </p>
            </FadeIn>
          ))}
        </div>
      </div>

      {/* Divider */}
    </section>
  );
}
