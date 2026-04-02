import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import TeamCard from "./TeamCard";

const team = [
  { name: "R Dhinesh Ragavendar", role: "Vice President", image: "/public/team/dinesh.jpeg" },
  { name: "Niranjan", role: "Design Head", image: "https://i.pravatar.cc/150?img=5" },
  { name: "Honey", role: "Vice President", image: "/public/team/honey.jpeg" },
  { name: "Sneha Iyer", role: "Events Coordinator", image: "https://i.pravatar.cc/150?img=9" },
  { name: "Karan Singh", role: "Marketing Head", image: "https://i.pravatar.cc/150?img=14" },
  { name: "Ananya Das", role: "Sponsorship Lead", image: "https://i.pravatar.cc/150?img=25" },
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
            <TeamCard
              key={member.name}
              name={member.name}
              role={member.role}
              image={member.image}
              delay={i * 100}
              visible={visible}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
