import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Target, Eye, Zap } from "lucide-react";

const cards = [
  { icon: Target, title: "Our Mission", desc: "Igniting innovation and creativity through electrifying competitions, workshops, and experiences that push boundaries." },
  { icon: Eye, title: "Our Vision", desc: "Building a community of fearless creators who dare to dream big and swing higher than ever before." },
  { icon: Zap, title: "Our Purpose", desc: "Connecting talent with opportunity through a platform that celebrates skill, teamwork, and the hero in everyone." },
];

const AboutSection = () => {
  const { ref, visible } = useScrollAnimation();

  return (
    <section id="about" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 web-pattern opacity-10" />
      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        <div className={`text-center mb-16 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <span className="font-tech text-xs tracking-[0.3em] uppercase text-secondary text-glow-blue">About</span>
          <h2 className="font-display text-5xl sm:text-7xl text-primary text-glow-red mt-2">WHAT IS REDRON?</h2>
          <p className="font-body text-lg text-muted-foreground mt-4 max-w-2xl mx-auto">
            REDRON is the flagship annual techno-cultural event by RRC — a high-energy celebration of talent, technology, and teamwork. 
            Inspired by the spirit of heroes, we bring together the brightest minds for two days of unforgettable experiences.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {cards.map((card, i) => (
            <div
              key={card.title}
              className={`group p-8 rounded-lg bg-card border border-border hover:border-primary/50 transition-all duration-500 hover:box-glow-red ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              <div className="w-14 h-14 rounded-lg bg-primary/10 border border-primary/30 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                <card.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-display text-2xl text-foreground mb-3">{card.title}</h3>
              <p className="font-body text-muted-foreground leading-relaxed">{card.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
