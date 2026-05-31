import Image from "next/image";
import Countdown from "./Countdown";
import Wishes from "./Wishes";
import Gallery from "./Gallery";
import FadeIn from "./FadeIn";
import OurStory from "./OurStory";

export default function InvitationView() {
  return (
    <div className="bg-[#fbf7ee] font-sans">
      {/* Section 1 – title, hero photo, date & location */}
      <section className="flex h-screen flex-col items-center justify-center text-center">
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
            className="mb-8 w-[90%] max-w-3xl h-[220px] sm:h-[300px] md:h-[400px] object-cover object-[center_70%]"
          />
        </FadeIn>
        <FadeIn delay={0.5}>
          <div className="flex flex-col items-center gap-2">
            <p className="text-[#222222] text-lg">Agust 29, 2026</p>
            <p className="text-[#222222] text-lg">BALI, INDONESIA</p>
          </div>
        </FadeIn>
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
                Bagas &amp; Yoni
              </h2>
              <p className="text-[#222222] text-xl leading-relaxed">
                Write a paragraph that tells your story as a couple. You can
                include details like how you met, your journey together, and
                what makes your relationship unique. This is your chance to
                share your personality and connect with your guests, giving them
                a glimpse into your love story and what this special day means
                to you.
              </p>
            </div>
          </FadeIn>

          {/* Middle – portrait photo (always visible) */}
          <FadeIn delay={0.15}>
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
            <p className="text-[#222222] text-xl">
              You can also write a photo caption here.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Section 3 – Groom & Bride */}
      <section className="bg-[#fbf7ee] px-4 md:px-8 py-16">
        <FadeIn>
          <h2
            className="text-[2.5rem] md:text-[5rem] text-center text-[#222222] mb-16"
            style={{ fontFamily: "var(--font-parfumerie-script)" }}
          >
            Meet the Groom &amp; Bride
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
              className="text-[2rem] md:text-[3.5rem] text-[#222222] leading-tight"
              style={{ fontFamily: "var(--font-parfumerie-script)" }}
            >
              Gusti Komang Bramanda Bagaskara
            </h2>
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
              className="text-[2rem] md:text-[3.5rem] text-[#222222] leading-tight"
              style={{ fontFamily: "var(--font-parfumerie-script)" }}
            >
              Ni Nyoman Parayoni Diastuti
            </h2>
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
            <h2
              className="text-[2.5rem] sm:text-[4rem] md:text-[5rem] text-[#222222] leading-tight"
              style={{ fontFamily: "var(--font-parfumerie-script)" }}
            >
              August 29, 2026
            </h2>
            <p className="text-[#555555] text-sm sm:text-base">
              Saturday &mdash; 09:00 WITA
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
              Tanah Lot
            </h2>
            <p className="text-[#555555] text-sm sm:text-base">
              Jl. Tanah Lot, Beraban
            </p>
            <p className="text-[#555555] text-sm">Tabanan, Bali, Indonesia</p>
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
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3945.5!2d115.0867!3d-8.6215!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd23b6bc1c5b4e7%3A0x5030bfbca832d52!2sTanah%20Lot%20Temple!5e0!3m2!1sen!2sid!4v1"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Wedding Venue"
            />
          </div>
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
              <p className="text-[#222222] font-medium tracking-widest">
                1234567890
              </p>
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
              <p className="text-[#222222] font-medium tracking-widest">
                0987654321
              </p>
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
                <p className="text-[#444444] text-sm mt-2">+62 812-0000-0001</p>
                <p className="text-[#444444] text-sm">@bagaskara</p>
              </div>
            </FadeIn>

            {/* Bride contact */}
            <FadeIn delay={0.2}>
              <div className="flex flex-col gap-0.5 text-left">
                <p className="text-[#222222] font-semibold">
                  Ni Nyoman Parayoni Diastuti
                </p>
                <p className="text-[#888888] text-sm">The Bride</p>
                <p className="text-[#444444] text-sm mt-2">+62 812-0000-0002</p>
                <p className="text-[#444444] text-sm">@parayoni</p>
              </div>
            </FadeIn>
          </div>
        </div>

        {/* Right – photo, full height */}
        <div className="relative w-full md:w-[50%] min-h-screen md:min-h-0">
          <Image
            src="/hero/alomoraphoto-38.jpg.jpeg"
            alt="Bagas dan Yoni"
            fill
            className="object-cover object-[center_20%]"
          />
        </div>
      </section>
    </div>
  );
}
