import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Github, Linkedin, Twitter } from "lucide-react";

const team = [
  { name: "Arjun Mehta", role: "Lead Organizer", initials: "AM" },
  { name: "Priya Sharma", role: "Technical Head", initials: "PS" },
  { name: "Rohan Gupta", role: "Design Lead", initials: "RG" },
  { name: "Sneha Iyer", role: "Events Coordinator", initials: "SI" },
  { name: "Karan Singh", role: "Marketing Head", initials: "KS" },
  { name: "Ananya Das", role: "Sponsorship Lead", initials: "AD" },
];

const TeamSection = () => {
  const { ref, visible } = useScrollAnimation();

  return (
    <section id="team" className="relative py-24">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      <div className="container mx-auto px-4" ref={ref}>
        <div className={`text-center mb-16 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <span className="font-tech text-xs tracking-[0.3em] uppercase text-secondary text-glow-blue">Team</span>
          <h2 className="font-display text-5xl sm:text-7xl text-primary text-glow-red mt-2">THE SQUAD</h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {team.map((member, i) => (
            <div
              key={member.name}
              className={`group text-center transition-all duration-500 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="relative w-24 h-24 mx-auto mb-4">
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 border-2 border-primary/30 group-hover:border-primary/60 transition-all flex items-center justify-center group-hover:box-glow-red">
                  <span className="font-display text-2xl text-primary">{member.initials}</span>
                </div>
                {/* Hover social links */}
                <div className="absolute inset-0 rounded-full bg-background/90 flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <a href="#" className="text-primary hover:text-accent transition-colors"><Github className="w-4 h-4" /></a>
                  <a href="#" className="text-secondary hover:text-accent transition-colors"><Linkedin className="w-4 h-4" /></a>
                  <a href="#" className="text-primary hover:text-accent transition-colors"><Twitter className="w-4 h-4" /></a>
                </div>
              </div>
              <h4 className="font-display text-lg text-foreground">{member.name}</h4>
              <p className="font-body text-xs text-muted-foreground">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
