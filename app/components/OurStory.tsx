import Image from "next/image";
import FadeIn from "./FadeIn";

interface Story {
  title: string;
  date: string;
  text: string;
}

const storiesLeft: Story[] = [
  {
    title: "The First Meeting",
    date: "January 2020",
    text: "It all began on an ordinary afternoon that quickly became anything but ordinary. A mutual friend introduced us, and within minutes of conversation it felt like we had known each other for years. That evening neither of us wanted to say goodbye.",
  },
  {
    title: "Our First Date",
    date: "February 2020",
    text: "We found a quiet café tucked away from the city noise and spent hours talking over coffee that had long gone cold. We laughed, shared stories, and discovered how many little things we had in common. By the time we walked out the stars were already out.",
  },
  {
    title: "Becoming Official",
    date: "April 2020",
    text: "After months of calls, late-night texts, and growing feelings neither of us could ignore, Bagas finally asked the question we both knew was coming. Standing by the beach at sunset, with waves softly crashing, Yoni said yes and everything changed beautifully.",
  },
  {
    title: "First Trip Together",
    date: "August 2021",
    text: "We packed our bags and headed north with no rigid plan – just the open road and each other. We got lost twice, ate at roadside stalls, and watched the sunrise from a hillside we stumbled upon by accident. It was the trip that showed us we travel well together.",
  },
];

const storiesRight: Story[] = [
  {
    title: "Meeting the Families",
    date: "December 2021",
    text: "The holidays brought the biggest step yet – introducing each other to our families. Both homes were filled with warmth, laughter, and a generous amount of food. Watching our worlds merge that week made us realize just how serious and real this love truly was.",
  },
  {
    title: "Growing Together",
    date: "Throughout 2022",
    text: "Life isn't always smooth, and that year tested us in small and big ways. We navigated challenges side by side, learned each other's love languages, and chose each other every single time. Those moments of imperfection only deepened our trust and understanding.",
  },
  {
    title: "The Proposal",
    date: "June 2023",
    text: "Bagas had been planning it for months. A candlelit dinner, our favourite song playing softly in the background, and a ring hidden in a bouquet of white roses. When he knelt down, Yoni was already in tears before he even said a word. She said yes instantly.",
  },
  {
    title: "The Big Day",
    date: "August 29, 2026",
    text: "And now here we are – ready to stand before everyone we love and promise our forever. This day is not just a wedding; it is the celebration of every small moment, every laugh, every late-night conversation, and every choice we made to keep choosing each other.",
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
              src="/hero/alomoraphoto-28.jpg.jpeg"
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
                className="text-[1.8rem] sm:text-[2.5rem] md:text-[3rem] text-[#222222] leading-tight mb-3"
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
      <div className="w-16 border-t border-[#cccccc] mx-auto mb-20 md:mb-32" />

      {/* Section B – stories left, single image right */}
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-12 md:gap-16">
        {/* Stories – left on desktop, top on mobile */}
        <div className="order-1 flex-1 flex flex-col gap-10 justify-center">
          {storiesRight.map((story, i) => (
            <FadeIn key={story.title} delay={i * 0.1} direction="right">
              <p className="text-xs tracking-[0.3em] uppercase text-[#888888] mb-2">
                {story.date}
              </p>
              <h3
                className="text-[1.8rem] sm:text-[2.5rem] md:text-[3rem] text-[#222222] leading-tight mb-3"
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

        {/* Image – right on desktop, bottom on mobile */}
        <FadeIn direction="left" className="order-2 w-full md:w-5/12 shrink-0">
          <div className="w-full h-85 md:h-full min-h-125 overflow-hidden">
            <Image
              src="/hero/alomoraphoto-55.jpg.jpeg"
              alt="Our later story"
              width={700}
              height={900}
              className="w-full h-full object-cover object-center"
            />
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
