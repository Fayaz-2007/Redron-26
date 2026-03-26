import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Code, Gamepad2, Mic, Palette, Brain, Music } from "lucide-react";

const events = [
  { icon: Code, title: "Hackathon", desc: "48-hour coding marathon. Build, break, innovate.", date: "June 15", color: "primary" },
  { icon: Gamepad2, title: "Gaming Arena", desc: "Compete in esports tournaments across multiple titles.", date: "June 15-16", color: "secondary" },
  { icon: Mic, title: "Open Mic", desc: "Stand-up, poetry, rap — the stage is yours.", date: "June 15", color: "primary" },
  { icon: Palette, title: "Design Duel", desc: "UI/UX showdown with real-time challenges.", date: "June 16", color: "secondary" },
  { icon: Brain, title: "Quiz Quest", desc: "Test your knowledge across tech, pop culture, and more.", date: "June 16", color: "primary" },
  { icon: Music, title: "DJ Night", desc: "End the event with an electrifying DJ set.", date: "June 16", color: "secondary" },
];

const EventsSection = () => {
  const { ref, visible } = useScrollAnimation();

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
              className={`group relative p-6 rounded-lg bg-card border border-border overflow-hidden transition-all duration-500 hover:border-${evt.color}/50 ${
                evt.color === "primary" ? "hover:box-glow-red" : "hover:box-glow-blue"
              } ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              {/* Glow line top */}
              <div className={`absolute top-0 left-0 right-0 h-0.5 bg-${evt.color} scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500`} />
              
              <div className="flex items-start gap-4">
                <div className={`w-12 h-12 rounded-lg bg-${evt.color}/10 border border-${evt.color}/30 flex items-center justify-center shrink-0 group-hover:bg-${evt.color}/20 transition-colors`}>
                  <evt.icon className={`w-6 h-6 text-${evt.color}`} />
                </div>
                <div>
                  <h3 className="font-display text-xl text-foreground">{evt.title}</h3>
                  <p className="font-body text-sm text-muted-foreground mt-1">{evt.desc}</p>
                  <span className={`inline-block mt-3 font-tech text-[10px] tracking-widest uppercase text-${evt.color}`}>{evt.date}</span>
                </div>
              </div>

              <button className={`mt-4 w-full py-2 rounded font-body text-xs font-bold uppercase tracking-wider border border-${evt.color}/30 text-${evt.color} hover:bg-${evt.color}/10 transition-colors`}>
                View Details
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventsSection;
