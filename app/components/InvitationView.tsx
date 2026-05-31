"use client";

import { useState } from "react";
import Image from "next/image";
import Countdown from "./Countdown";
import Wishes from "./Wishes";
import Gallery from "./Gallery";
import FadeIn from "./FadeIn";
import OurStory from "./OurStory";

function CopyButton({ value }: { value: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(value).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <button
      onClick={handleCopy}
      aria-label="Copy account number"
      className="ml-2 p-1 rounded hover:bg-[#f0ebe0] transition-colors text-[#888888] hover:text-[#444444]"
    >
      {copied ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="15"
          height="15"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="20 6 9 17 4 12" />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="15"
          height="15"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
          <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
        </svg>
      )}
    </button>
  );
}

export default function InvitationView() {
  return (
    <div className="bg-[#fbf7ee] font-sans">
      {/* Section 1 – title, hero photo, date & location */}
      <section className="relative flex h-screen flex-col items-center justify-center text-center px-[10%] pt-[10%] pb-[12%]">
        <FadeIn delay={0.1}>
          <div className="mb-2">
            <h1 className="text-[4.5rem] sm:text-[7rem] md:text-[9rem] text-[#222222] mb-4">
              Bagas dan Yoni
            </h1>
          </div>
        </FadeIn>
        <FadeIn delay={0.3} className="w-full flex justify-center">
          <Image
            src="/hero/alomoraphoto-36.jpg.jpeg"
            alt="Bagas dan Yoni"
            width={900}
            height={600}
            className="mb-8 w-[70%] md:w-[50%] max-w-3xl h-[220px] sm:h-[200px] md:h-[300px] object-cover object-[center_70%]"
          />
        </FadeIn>
        <FadeIn delay={0.5}>
          <div className="flex flex-col items-center gap-2 md:pb-8">
            <p className="text-[#222222] text-lg">Agust 29, 2026</p>
            <p className="text-[#222222] text-lg">BALI, INDONESIA</p>
          </div>
        </FadeIn>

        {/* Decorative frame overlay – mobile only */}
        <div className="pointer-events-none absolute inset-0 sm:hidden">
          <Image
            src="/frame portrait.png"
            alt=""
            fill
            className="object-fill"
            style={{ mixBlendMode: "multiply" }}
          />
        </div>

        {/* Decorative frame overlay – desktop only */}
        <div className="pointer-events-none absolute inset-0 hidden sm:block">
          <Image
            src="/frame landscape.png"
            alt=""
            fill
            className="object-fill"
            style={{ mixBlendMode: "multiply" }}
          />
        </div>
      </section>

      {/* Section 2 – story section */}
      <div className="w-full mb-12 md:mt-12">
        <Image
          src="/hero/alomoraphoto-30.jpg.jpeg"
          alt="Bagas dan Yoni"
          width={1200}
          height={600}
          className="w-full h-screen object-cover object-[center_70%]"
        />
      </div>
      <section className="bg-[#fbf7ee] px-4 md:px-8 py-4">
        {/* 3-column row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start mx-auto">
          {/* Left – title + text */}
          <FadeIn direction="right">
            <div className="text-left">
              <h2
                className="text-[3.5rem] sm:text-[5rem] md:text-[7rem] text-[#222222] mb-4 leading-tight"
                style={{ fontFamily: "var(--font-parfumerie-script)" }}
              >
                Om Swastyastu
              </h2>
              <p className="text-[#222222] text-lg leading-relaxed italic">
                "Ya Tuhanku Yang Maha Pengasih, Anugerahkanlah Kepada Pasangan
                Ini Senantiasa Kebahagiaan, Kesehatan, Tetap Bersatu dan Tidak
                Pernah Terpisahkan, Panjang Umur dan Tinggal Dirumah Yang Penuh
                Kegembiraan Bersama Seluruh Keturunannya.”{" "}
              </p>
              <p
                className="text-[#222222] text-lg leading-relaxed text-center"
                style={{ marginTop: "24px" }}
              >
                _____ (Rgveda: X.85.42) ______
              </p>
            </div>
          </FadeIn>

          {/* Middle – portrait photo (always visible) */}
          <FadeIn delay={0.15} className="hidden md:flex flex-col">
            <Image
              src="/hero/alomoraphoto-28.jpg.jpeg"
              alt="Bagas dan Yoni"
              width={400}
              height={560}
              className="w-full md:h-screen object-cover object-[center_20%]"
            />
          </FadeIn>

          {/* Right – smaller photo + caption (desktop only) */}
          <FadeIn
            direction="left"
            delay={0.3}
            className="hidden md:flex flex-col"
          >
            <Image
              src="/hero/alomoraphoto-7.jpg.jpeg"
              alt="Bagas dan Yoni"
              width={400}
              height={300}
              className="w-full h-[260px] object-cover object-[center_30%] mb-3"
            />
          </FadeIn>
        </div>
      </section>

      {/* Section 3 – Groom & Bride */}
      <section className="bg-[#fbf7ee] px-4 md:px-8 py-16">
        <FadeIn>
          <h2
            className="text-[3.5rem] md:text-[7rem] text-center text-[#222222] mb-16"
            style={{ fontFamily: "var(--font-parfumerie-script)" }}
          >
            Groom &amp; Bride
          </h2>
        </FadeIn>
        <div className="flex flex-col md:flex-row items-center justify-center gap-12 mx-auto">
          {/* Groom */}
          <FadeIn
            direction="right"
            className="flex flex-col items-center text-center flex-1"
          >
            <div className="w-[240px] h-[240px] md:w-[360px] md:h-[360px] rounded-full overflow-hidden mb-8">
              <Image
                src="/hero/alomoraphoto-77.jpg"
                alt="Groom"
                width={360}
                height={360}
                className="w-full h-full object-cover object-center"
              />
            </div>
            <p className="text-[#222222] text-sm tracking-widest uppercase mb-3">
              The Groom
            </p>
            <h2
              className="text-[2.5rem] md:text-[3.5rem] text-[#222222] leading-tight font-bold"
              style={{ fontFamily: "var(--font-parfumerie-script)" }}
            >
              Gusti Komang Bramanda Bagaskara S.Kom.
            </h2>
            <p className="text-[#555555] text-base mt-4 leading-relaxed">
              Putra ketiga dari pasangan
              <br />
              Bapak Gusti Putu Armada, Ak. dan Ibu Ketut Praba Wijayanti, S.T.
            </p>
            <p className="text-[#888888] text-sm mt-2">
              Dusun Seraya, Desa Baktiseraga, Kec. Buleleng, Buleleng
            </p>
          </FadeIn>

          {/* Love symbol */}
          <FadeIn
            delay={0.2}
            className="text-[2.5rem] md:text-[5rem] text-[#222222] shrink-0"
            direction="none"
          >
            <div style={{ fontFamily: "var(--font-parfumerie-script)" }}>
              &amp;
            </div>
          </FadeIn>

          {/* Bride */}
          <FadeIn
            direction="left"
            delay={0.1}
            className="flex flex-col items-center text-center flex-1"
          >
            <div className="w-[240px] h-[240px] md:w-[360px] md:h-[360px] rounded-full overflow-hidden mb-8">
              <Image
                src="/hero/alomoraphoto-55.jpg.jpeg"
                alt="Bride"
                width={360}
                height={360}
                className="w-full h-full object-cover object-center"
              />
            </div>
            <p className="text-[#222222] text-sm tracking-widest uppercase mb-3">
              The Bride
            </p>
            <h2
              className="text-[2.5rem] md:text-[3.5rem] text-[#222222] leading-tight font-bold"
              style={{ fontFamily: "var(--font-parfumerie-script)" }}
            >
              Ni Nyoman Parayoni Diastuti S.Kep.
            </h2>
            <p className="text-[#555555] text-base mt-4 leading-relaxed">
              Anak ketiga dari pasangan
              <br />
              Bapak I Ketut Nirpa, S.Pd.SD dan Ibu Ni Nyoman Kardi, S.Pd.
            </p>
            <p className="text-[#888888] text-sm mt-2">
              BD. Batulumbang, Desa Penuktukan, Kec. Tejakula, Buleleng
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Full-screen divider photo */}
      <div className="w-full">
        <Image
          src="/hero/alomoraphoto-83.jpg"
          alt="Bagas dan Yoni"
          width={1920}
          height={1080}
          className="w-full h-screen object-cover object-center"
        />
      </div>

      {/* Section 4 – Date, Place & Countdown */}
      <section className="bg-[#fbf7ee] flex flex-col items-center text-center px-6 py-20 gap-12">
        {/* Date + Place side by side on desktop */}
        <div className="flex flex-col md:flex-row gap-12 md:gap-0 w-full max-w-4xl">
          {/* Save the Date */}
          <FadeIn
            direction="right"
            className="flex-1 flex flex-col items-center gap-3 md:border-r border-[#cccccc]"
          >
            <p className="text-xs tracking-[0.3em] uppercase text-[#555555]">
              Save the Date
            </p>
            <p className="text-[#222222] text-base tracking-wide">
              Resepsi Pernikahan
            </p>
            <h2
              className="text-[2.5rem] sm:text-[4rem] md:text-[5rem] text-[#222222] leading-tight"
              style={{ fontFamily: "var(--font-parfumerie-script)" }}
            >
              August 29, 2026
            </h2>
            <p className="text-[#555555] text-sm sm:text-base">
              Saturday &mdash; 11.00 &ndash; 18.00 WITA
            </p>
          </FadeIn>

          {/* The Venue */}
          <FadeIn
            direction="left"
            delay={0.15}
            className="flex-1 flex flex-col items-center gap-3 md:pl-12"
          >
            <p className="text-xs tracking-[0.3em] uppercase text-[#555555]">
              The Venue
            </p>
            <h2
              className="text-[2.5rem] sm:text-[4rem] md:text-[5rem] text-[#222222] leading-tight"
              style={{ fontFamily: "var(--font-parfumerie-script)" }}
            >
              Baktiseraga
            </h2>
            <p className="text-[#555555] text-sm sm:text-base">
              Dusun Seraya, Desa Baktiseraga
            </p>
            <p className="text-[#555555] text-sm">
              Kec. Buleleng, Buleleng, Bali
            </p>
          </FadeIn>
        </div>

        <div className="w-16 border-t border-[#cccccc]" />

        <FadeIn>
          <Countdown />
        </FadeIn>

        <div className="w-16 border-t border-[#cccccc]" />

        {/* Google Maps embed */}
        <FadeIn className="w-full max-w-4xl">
          <div className="rounded-2xl overflow-hidden border border-[#e0d9cc]">
            <iframe
              src="https://maps.google.com/maps?q=-8.1276303,115.0776082&z=17&output=embed"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Wedding Venue"
            />
          </div>
          z
        </FadeIn>
      </section>

      {/* Our Story */}
      <OurStory />

      {/* Section 5 – Wishes */}
      <section className="relative px-6 py-20 flex flex-col items-center gap-12">
        {/* Background photo */}
        <Image
          src="/hero/alomoraphoto-34.jpg.jpeg"
          alt=""
          fill
          className="object-cover object-center"
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/55" />

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center gap-3 text-center">
          <p className="text-xs tracking-[0.3em] uppercase text-white/70">
            Kind Words
          </p>
          <h2
            className="text-[2.5rem] sm:text-[4rem] md:text-[5rem] text-white leading-tight"
            style={{ fontFamily: "var(--font-parfumerie-script)" }}
          >
            Wishes &amp; Congratulations
          </h2>
        </div>
        <div className="relative z-10 w-full">
          <Wishes />
        </div>
      </section>

      {/* Section 6 – Gift */}
      <section className="bg-[#fbf7ee] px-6 py-20 flex flex-col items-center gap-12">
        <FadeIn>
          <div className="flex flex-col items-center gap-3 text-center">
            <p className="text-xs tracking-[0.3em] uppercase text-[#555555]">
              Wedding Gift
            </p>
            <h2
              className="text-[2.5rem] sm:text-[4rem] md:text-[5rem] text-[#222222] leading-tight"
              style={{ fontFamily: "var(--font-parfumerie-script)" }}
            >
              Send a Gift
            </h2>
            <p className="text-[#555555] text-sm max-w-sm">
              Your presence is the greatest gift of all. But if you wish to
              bless us further, you may send a gift via bank transfer below.
            </p>
          </div>
        </FadeIn>

        <div className="flex flex-col sm:flex-row gap-6 w-full max-w-2xl">
          {/* Groom's account */}
          <FadeIn
            direction="right"
            className="flex-1 border border-[#e0d9cc] rounded-2xl px-8 py-8 flex flex-col gap-4"
          >
            <p className="text-xs tracking-[0.3em] uppercase text-[#888888]">
              Groom
            </p>
            <div className="w-8 border-t border-[#cccccc]" />
            <div className="flex flex-col gap-1">
              <p className="text-xs text-[#888888] uppercase tracking-widest">
                Bank
              </p>
              <p className="text-[#222222] font-medium">BCA</p>
            </div>
            <div className="flex flex-col gap-1">
              <p className="text-xs text-[#888888] uppercase tracking-widest">
                Account Number
              </p>
              <div className="flex items-center justify-center">
                <p className="text-[#222222] font-medium tracking-widest">
                  1234567890
                </p>
                <CopyButton value="1234567890" />
              </div>
            </div>
            <div className="flex flex-col gap-1">
              <p className="text-xs text-[#888888] uppercase tracking-widest">
                Account Name
              </p>
              <p className="text-[#222222] font-medium">
                Gusti Komang Bramanda Bagaskara
              </p>
            </div>
          </FadeIn>

          {/* Bride's account */}
          <FadeIn
            direction="left"
            delay={0.15}
            className="flex-1 border border-[#e0d9cc] rounded-2xl px-8 py-8 flex flex-col gap-4"
          >
            <p className="text-xs tracking-[0.3em] uppercase text-[#888888]">
              Bride
            </p>
            <div className="w-8 border-t border-[#cccccc]" />
            <div className="flex flex-col gap-1">
              <p className="text-xs text-[#888888] uppercase tracking-widest">
                Bank
              </p>
              <p className="text-[#222222] font-medium">BCA</p>
            </div>
            <div className="flex flex-col gap-1">
              <p className="text-xs text-[#888888] uppercase tracking-widest">
                Account Number
              </p>
              <div className="flex items-center justify-center">
                <p className="text-[#222222] font-medium tracking-widest">
                  0987654321
                </p>
                <CopyButton value="0987654321" />
              </div>
            </div>
            <div className="flex flex-col gap-1">
              <p className="text-xs text-[#888888] uppercase tracking-widest">
                Account Name
              </p>
              <p className="text-[#222222] font-medium">
                Ni Nyoman Parayoni Diastuti
              </p>
            </div>
          </FadeIn>
        </div>

        {/* Direct gift address */}
        <FadeIn>
          <div className="w-full max-w-2xl border border-[#e0d9cc] rounded-2xl px-8 py-8 flex flex-col gap-3">
            <p className="text-xs tracking-[0.3em] uppercase text-[#888888]">
              Or Send Directly
            </p>
            <div className="w-8 border-t border-[#cccccc]" />
            <p className="text-xs text-[#888888] uppercase tracking-widest">
              Address
            </p>
            <p className="text-[#222222] font-medium leading-relaxed">
              Jalan Laksamana No. 89, Baktiseraga, Buleleng, Buleleng, Bali
            </p>
            <p className="text-[#555555] text-sm">Postal Code: 81119</p>
            <a
              href="https://www.google.com/maps/search/?api=1&query=Jalan+Laksamana+No.+89+Baktiseraga+Buleleng+Bali"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-flex items-center gap-2 self-center px-4 py-2 rounded-full border border-[#e0d9cc] text-sm text-[#444444] hover:bg-[#f0ebe0] transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              Open in Google Maps
            </a>
          </div>
        </FadeIn>
      </section>

      {/* Section 7 – Gallery */}
      <section className="bg-[#fbf7ee] py-20 flex flex-col items-center gap-10 overflow-hidden">
        <FadeIn>
          <div className="flex flex-col items-center gap-3 text-center px-6">
            <p className="text-xs tracking-[0.3em] uppercase text-[#555555]">
              Memories
            </p>
            <h2
              className="text-[2.5rem] sm:text-[4rem] md:text-[5rem] text-[#222222] leading-tight"
              style={{ fontFamily: "var(--font-parfumerie-script)" }}
            >
              Our Gallery
            </h2>
          </div>
        </FadeIn>
        <Gallery />
      </section>

      {/* Section 8 – Contact Details (closing page) */}
      <section className="bg-[#fbf7ee] min-h-screen flex flex-col md:flex-row">
        {/* Left – contact details */}
        <div className="flex-1 flex flex-col justify-between px-10 md:px-16 py-16 gap-12">
          {/* Heading */}
          <FadeIn>
            <h2
              className="text-[3rem] sm:text-[4rem] md:text-[5rem] text-[#222222] leading-tight text-left"
              style={{ fontFamily: "var(--font-parfumerie-script)" }}
            >
              Contact Details
            </h2>
          </FadeIn>

          {/* Contacts */}
          <div className="flex flex-col gap-10">
            {/* Groom contact */}
            <FadeIn delay={0.1}>
              <div className="flex flex-col gap-0.5 text-left">
                <p className="text-[#222222] font-semibold">
                  Gusti Komang Bramanda Bagaskara
                </p>
                <p className="text-[#888888] text-sm">The Groom</p>
                <a
                  href="https://wa.me/6282235274223"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#444444] text-sm mt-2 hover:text-[#222222] underline-offset-2 hover:underline"
                >
                  +62 822-3527-4223
                </a>
                <a
                  href="https://instagram.com/bramandabagaskara"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#444444] text-sm hover:text-[#222222] underline-offset-2 hover:underline"
                >
                  @bramandabagaskara
                </a>
              </div>
            </FadeIn>

            {/* Bride contact */}
            <FadeIn delay={0.2}>
              <div className="flex flex-col gap-0.5 text-left">
                <p className="text-[#222222] font-semibold">
                  Ni Nyoman Parayoni Diastuti
                </p>
                <p className="text-[#888888] text-sm">The Bride</p>
                <a
                  href="https://wa.me/6285645241383"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#444444] text-sm mt-2 hover:text-[#222222] underline-offset-2 hover:underline"
                >
                  +62 856-4524-1383
                </a>
                <a
                  href="https://instagram.com/parayoni_d"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#444444] text-sm hover:text-[#222222] underline-offset-2 hover:underline"
                >
                  @parayoni_d
                </a>
              </div>
            </FadeIn>
          </div>
        </div>

        {/* Right – photo, full height */}
        <div className="hidden md:block relative w-full md:w-[50%] min-h-screen md:min-h-0">
          <Image
            src="/hero/alomoraphoto-38.jpg.jpeg"
            alt="Bagas dan Yoni"
            fill
            className="object-cover object-[center_20%]"
          />
        </div>
      </section>

      {/* Section 9 – Closing */}
      <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-8 py-24 overflow-hidden">
        {/* Background photo */}
        <Image
          src="/hero/Alomoraphoto-31.jpg.jpeg"
          alt="Bagas dan Yoni"
          fill
          className="object-cover object-[center_75%]"
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/60" />

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center gap-8 max-w-lg">
          <FadeIn>
            <p className="text-white/90 text-base leading-relaxed">
              Merupakan suatu kebahagiaan dan kehormatan bagi kami apabila
              Bapak/Ibu/Saudara/i berkenaan hadir untuk memberikan doa restu
              kepada kami. Atas kehadirannya kami ucapkan terima kasih.
            </p>
          </FadeIn>

          <FadeIn delay={0.25}>
            <div className="flex flex-col items-center gap-3">
              <p className="text-white/80 text-base italic">
                Kami yang berbahagia,
              </p>
              <h2
                className="text-[3rem] sm:text-[4rem] text-white leading-tight"
                style={{ fontFamily: "var(--font-parfumerie-script)" }}
              >
                Bagas &amp; Yoni
              </h2>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
