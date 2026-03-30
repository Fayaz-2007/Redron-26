import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Target, Eye, Zap } from "lucide-react";

const cards = [
  { icon: Target, title: "Our Mission", desc: "To educate youth about HIV/AIDS and related health issues, remove myths, and promote healthy habits and voluntary blood donation." },
  { icon: Eye, title: "Our Vision", desc: "To build an aware and responsible student community that actively prevents health risks and supports a healthier society." },
  { icon: Zap, title: "Our Purpose", desc: "To create peer educators who spread awareness, reduce stigma, and encourage care and support for people affected by HIV/AIDS." },
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
            The Red Ribbon Club (RRC) is a Government of India initiative that spreads awareness about HIV/AIDS and promotes healthy lifestyles among students. At SVCE, the club has been active since 2006, engaging students through programs, awareness campaigns, and community-driven activities.
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
