import { useState } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import EventCard from "./EventCard";
import EventModal, { type EventData } from "./EventModal";

const events: EventData[] = [
  {
    title: "Groovanza",
    tag: "Dance Battle",
    date: "June 15, 2026",
    image: "https://picsum.photos/600/400?random=1",
    description:
      "Groovanza is the ultimate dance showdown where crews battle it out under neon lights. From hip-hop to contemporary, bring your best moves and electrify the stage. Solo and group categories available — all styles welcome.",
    rules: [
      "Each performance must not exceed 5 minutes.",
      "Teams can have a maximum of 8 members.",
      "No offensive or vulgar content allowed.",
      "Props are allowed but must be pre-approved.",
      "Judges' decision is final and binding.",
    ],
    prizePool: "₹15,000",
    venue: "MPH Auditorium",
    time: "10:00 AM",
    teamSize: "1–8 members",
    fee: "₹200 per team",
  },
  {
    title: "Overdrive",
    tag: "Gaming",
    date: "June 15–16, 2026",
    image: "https://picsum.photos/600/400?random=2",
    description:
      "Overdrive is a high-octane esports tournament featuring Valorant, BGMI, and FIFA. Compete against the best players from colleges across the region. LAN and online rounds ensure non-stop action for two full days.",
    rules: [
      "Participants must bring their own peripherals.",
      "Use of cheats or hacks leads to immediate disqualification.",
      "Teams must check in 30 minutes before their match.",
      "Match schedules are strict — no rescheduling.",
      "Fair play and sportsmanship are mandatory.",
    ],
    prizePool: "₹20,000",
    venue: "CS Lab Block B",
    time: "9:00 AM onwards",
    teamSize: "4–5 members",
    fee: "₹300 per team",
  },
  {
    title: "Pairfect",
    tag: "Duo Challenge",
    date: "June 16, 2026",
    image: "https://picsum.photos/600/400?random=3",
    description:
      "A fun-packed duo challenge where pairs tackle creative puzzles, trivia rounds, and physical tasks. Communication and chemistry are key — find your perfect partner and dominate the leaderboard.",
    rules: [
      "Only teams of 2 are allowed.",
      "Both members must be from the same college.",
      "No electronic devices during challenges.",
      "Time penalties apply for rule violations.",
      "All rounds must be completed to qualify.",
    ],
    prizePool: "₹8,000",
    venue: "Open Ground",
    time: "2:00 PM",
    teamSize: "2 members",
    fee: "₹100 per duo",
  },
  {
    title: "CodeSprint",
    tag: "Hackathon",
    date: "June 15–16, 2026",
    image: "https://picsum.photos/600/400?random=4",
    description:
      "A 24-hour hackathon where developers, designers, and innovators collaborate to build solutions to real-world problems. Mentorship from industry experts, API sponsors, and exciting prizes await the best hacks.",
    rules: [
      "Teams of 2–4 members allowed.",
      "All code must be written during the event.",
      "Pre-built templates and boilerplates are not allowed.",
      "Projects must be demoed live to judges.",
      "Plagiarism results in disqualification.",
      "Use of open-source libraries is permitted.",
    ],
    prizePool: "₹25,000",
    venue: "Innovation Lab",
    time: "10:00 AM (24hrs)",
    teamSize: "2–4 members",
    fee: "₹250 per team",
  },
  {
    title: "Vox Arena",
    tag: "Open Mic",
    date: "June 15, 2026",
    image: "https://picsum.photos/600/400?random=5",
    description:
      "The stage is yours at Vox Arena. Whether it's stand-up comedy, poetry, rap, storytelling, or singing — grab the mic and own the spotlight. An evening of raw talent and unforgettable performances.",
    rules: [
      "Each performer gets a maximum of 6 minutes.",
      "Content must be original and not plagiarized.",
      "No hate speech or discriminatory content.",
      "Performers must register before 4:00 PM on event day.",
      "Audience voting contributes 30% to final scores.",
    ],
    prizePool: "₹10,000",
    venue: "Amphitheatre",
    time: "5:00 PM",
    teamSize: "Solo",
    fee: "₹50 per person",
  },
  {
    title: "PixelWar",
    tag: "Design Duel",
    date: "June 16, 2026",
    image: "https://picsum.photos/600/400?random=6",
    description:
      "PixelWar is a real-time UI/UX design battle. Contestants receive a surprise brief and must deliver a stunning design within the time limit. Creativity, usability, and aesthetics are all judged.",
    rules: [
      "Only Figma or Adobe XD may be used.",
      "The design brief is revealed at the start of the round.",
      "No pre-made templates or assets allowed.",
      "Submissions must be made within the time limit.",
      "Designs are judged on creativity, usability, and polish.",
    ],
    prizePool: "₹12,000",
    venue: "Design Studio Room 4",
    time: "11:00 AM",
    teamSize: "Solo or Duo",
    fee: "₹150 per entry",
  },
];

const EventsSection = () => {
  const { ref, visible } = useScrollAnimation();
  const [selectedEvent, setSelectedEvent] = useState<EventData | null>(null);

  return (
    <section id="events" className="relative py-24 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      <div className="container mx-auto px-4" ref={ref}>
        <div className={`text-center mb-16 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <span className="font-tech text-xs tracking-[0.3em] uppercase text-secondary text-glow-blue">Events</span>
          <h2 className="font-display text-5xl sm:text-7xl text-primary text-glow-red mt-2">THE LINEUP</h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((evt, i) => (
            <div
              key={evt.title}
              className={`transition-all duration-500 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <EventCard
                title={evt.title}
                tag={evt.tag}
                date={evt.date}
                image={evt.image}
                onViewDetails={() => setSelectedEvent(evt)}
              />
            </div>
          ))}
        </div>
      </div>

      <EventModal
        event={selectedEvent}
        open={!!selectedEvent}
        onClose={() => setSelectedEvent(null)}
      />
    </section>
  );
};

export default EventsSection;
