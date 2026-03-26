import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const schedule = [
  { time: "9:00 AM", title: "Opening Ceremony", desc: "Kickoff with keynote and performances", day: 1 },
  { time: "10:30 AM", title: "Hackathon Begins", desc: "48-hour coding marathon starts", day: 1 },
  { time: "12:00 PM", title: "Design Duel Round 1", desc: "UI/UX speed challenges", day: 1 },
  { time: "2:00 PM", title: "Quiz Quest", desc: "General & technical quizzing", day: 1 },
  { time: "4:00 PM", title: "Gaming Arena Opens", desc: "Esports tournament brackets", day: 1 },
  { time: "7:00 PM", title: "Open Mic Night", desc: "Comedy, poetry, and rap battles", day: 1 },
  { time: "10:00 AM", title: "Design Duel Finals", desc: "Top designers compete live", day: 2 },
  { time: "12:00 PM", title: "Hackathon Demos", desc: "Teams present their projects", day: 2 },
  { time: "3:00 PM", title: "Awards Ceremony", desc: "Winners announced across all events", day: 2 },
  { time: "5:00 PM", title: "DJ Night", desc: "Closing celebration with live DJ set", day: 2 },
];

const ScheduleSection = () => {
  const { ref, visible } = useScrollAnimation();

  return (
    <section id="schedule" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 web-pattern opacity-10" />
      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        <div className={`text-center mb-16 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <span className="font-tech text-xs tracking-[0.3em] uppercase text-secondary text-glow-blue">Schedule</span>
          <h2 className="font-display text-5xl sm:text-7xl text-primary text-glow-red mt-2">THE TIMELINE</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {[1, 2].map((day) => (
            <div key={day}>
              <h3 className="font-display text-3xl text-foreground mb-6 flex items-center gap-3">
                <span className="w-10 h-10 rounded-full bg-primary/10 border border-primary/40 flex items-center justify-center text-primary font-tech text-sm">
                  {day}
                </span>
                Day {day}
              </h3>
              <div className="relative">
                {/* Timeline line */}
                <div className="absolute left-5 top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-secondary/30 to-transparent" />

                <div className="space-y-6">
                  {schedule.filter((s) => s.day === day).map((item, i) => (
                    <div
                      key={item.title}
                      className={`relative pl-14 transition-all duration-500 ${visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-5"}`}
                      style={{ transitionDelay: `${i * 100 + 200}ms` }}
                    >
                      {/* Dot */}
                      <div className="absolute left-3.5 top-1.5 w-3 h-3 rounded-full bg-primary/60 border-2 border-primary" />
                      
                      <span className="font-tech text-[10px] tracking-widest text-secondary">{item.time}</span>
                      <h4 className="font-display text-xl text-foreground">{item.title}</h4>
                      <p className="font-body text-sm text-muted-foreground">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ScheduleSection;
