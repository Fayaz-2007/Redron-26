import { useState } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import EventCard from "./EventCard";
import EventModal, { type EventData } from "./EventModal";

const events: EventData[] = [
  {
    title: "SOLVE AND ESCAPE",
    tag: "RRC",
    date: "April 2, 2026",
    image: "/team/solve-and-escape.png",
    description:
      "Solve and Escape is a fast-paced team event where groups of four tackle fun yet challenging tasks like puzzles, riddles, pattern recognition, and visual problems to test their logic, observation, and quick decision-making skills. Conducted in two rounds, participants solve tasks individually to unlock parts of a hidden sentence, which must be combined and correctly arranged at the end. The event is completely time-based, making speed, accuracy, and teamwork the key to winning while ensuring an engaging and competitive experience.",
    rules: [
      "In Round 1, participants will solve tasks like finding the odd one out, counting hidden objects in images, answering interesting riddles, and solving direction-based puzzles that require careful thinking and attention. Each team member can choose any task based on their interest and complete it individually. These tasks help improve focus, logical reasoning, and quick decision-making. After completing Round 1, teams will receive half of a sentence, which they must keep safely for the next stage.",
      "In Round 2, participants will face slightly more challenging tasks such as completing number series, solving simple puzzles, identifying movie dialogues, and recognizing circuit symbols. Similar to Round 1, each member can choose and complete a task on their own. After completing this round, teams will receive the remaining part of the sentence. They must then arrange and paste the full sentence correctly on the board.",
      "The team that successfully completes all tasks, forms the correct sentence, and pastes it first will be declared the winner. The event is completely time-based and encourages active participation, teamwork, and healthy competition in a fun and engaging environment.",
    ],
    prizePool: "₹4,000",
    venue: "MPH Auditorium",
    time: "10:00 AM",
    teamSize: "1–4 members",
    fee: "FREE",
    registrationLink: "https://docs.google.com/forms/d/e/1FAIpQLSf.../viewform",
  },
  {
    title: "Myth vs Fact",
    tag: "RRC",
    date: "April 2, 2026",
    image: "/team/myth-vs-fact.png",
    description:
      "Myth vs. Fact is a high-energy, team-based coordination event that challenges participants’ health awareness, critical thinking, and teamwork under pressure. Each team of four takes on specialized roles and must navigate through the “Zone of Misinformation” by correctly identifying health-related statements as myths or facts. The event combines physical balance with mental accuracy, where every correct answer moves the team forward, and every mistake increases the difficulty. Speed, coordination, and knowledge are key as teams race to reach the “Healthy Society” finish line.",
    rules: [
      "At the start, the team is divided into roles — two Navigators, one Advocate, and one Strategist. The Navigators begin on a limited standing space, while the Advocate listens to health-related statements given by the judge. By correctly identifying each statement as a “Myth” or “Fact,” the team earns the ability to move forward by placing the next sheet and progressing toward the goal.",
      "As the game continues, incorrect answers introduce resilience constraints, reducing the Navigators’ standing space and increasing the difficulty of maintaining balance. Meanwhile, the Strategist at the finish line must handle additional challenges to ensure smooth progress. The team must maintain coordination, accuracy, and stability under pressure.",
      "The team that successfully navigates through the misinformation zone, overcomes all constraints, and reaches the “Healthy Society” finish line in the shortest time will be declared the winner. The event emphasizes awareness, teamwork, and resilience in a fun yet competitive environment.",
    ],
    prizePool: "₹4,000",
    venue: "MPH Auditorium",
    time: "10:00 AM",
    teamSize: "1–4 members",
    fee: "FREE",
    registrationLink: "https://docs.google.com/forms/d/e/1FAIpQLSf.../viewform",
  },
  {
    title: "Health Quest",
    tag: "RRC",
    date: "April 2, 2026",
    image: "/team/health-quest.png",
    description:
      "Health Quest is an interactive, game-based team event that combines fun, strategy, and health awareness. Played on a large board, teams of three work together where one member moves across the board while the other two support by answering questions and making decisions. Instead of traditional gameplay, participants encounter positive, negative, and challenge-based boxes that influence their progress. The event promotes awareness of healthy practices and risky behaviors while encouraging teamwork, quick thinking, and active participation in an engaging and educational environment.",
    rules: [
      "The game begins with one player moving across the board by rolling a dice, while teammates assist in decision-making and task completion. Landing on positive (+) boxes rewards the team with health-based cards that promote good habits like exercise, hygiene, and regular check-ups, allowing the player to move forward.",
      "Landing on negative (–) boxes introduces cards highlighting unhealthy behaviors such as poor hygiene, substance use, or neglecting medical advice. These result in penalties, pushing the player backward and increasing the challenge.",
      "Boxes marked with (?) trigger knowledge challenges where the supporting members answer health-related questions on topics like nutrition, blood donation, and disease prevention. Correct answers reward progress, while incorrect ones lead to setbacks.",
    ],
    prizePool: "₹4,000",
    venue: "MPH Auditorium",
    time: "10:00 AM",
    teamSize: "1–4 members",
    fee: "FREE",
    registrationLink: "https://docs.google.com/forms/d/e/1FAIpQLSf.../viewform",
  },
  {
    title: "HEART BEAT",
    tag: "RRC",
    date: "April 2, 2026",
    image: "/team/heart-beat.png",
    description:
      "Heartbeat Challenge is an exciting, high-energy team event that combines fun, awareness, and teamwork into one engaging experience. Each team of 3–4 members is given a balloon representing their “heartbeat,” symbolizing coordination and shared responsibility. As teams progress through multiple rounds, they must protect their heartbeat while tackling challenges that test both mental sharpness and physical coordination. With constant pressure to keep the balloon safe, the event encourages communication, strategy, and unity in a lively and competitive environment.",
    rules: [
      "In the Pulse Quiz, teams answer quick awareness-based questions that test their knowledge and thinking speed. Correct answers help maintain progress, while mistakes can increase pressure on the team and risk their control over the heartbeat.",
      "In the Life Link, participants must carefully pass and manage the balloon among team members, requiring coordination, balance, and trust. Any mishandling can lead to penalties, making teamwork and precision essential.",
      "In the Fact Strike, teams make quick and confident decisions by identifying correct information under pressure. Accuracy and speed play a crucial role as teams aim to score higher while ensuring their heartbeat remains safe.",
    ],
    prizePool: "₹4,000",
    venue: "MPH Auditorium",
    time: "10:00 AM",
    teamSize: "1–4 members",
    fee: "FREE",
    registrationLink: "https://docs.google.com/forms/d/e/1FAIpQLSf.../viewform",
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
