import { Github, Linkedin, Twitter } from "lucide-react";
import { motion } from "framer-motion";

interface TeamCardProps {
  name: string;
  role: string;
  image: string;
  delay: number;
  visible: boolean;
}

const TeamCard = ({ name, role, image, delay, visible }: TeamCardProps) => {
  return (
    <motion.div
      className={`group text-center transition-all duration-500 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
      style={{ transitionDelay: `${delay}ms` }}
      whileHover={{ y: -5 }}
    >
      <div className="relative w-28 h-28 mx-auto mb-4">
        <div className="w-28 h-28 rounded-full overflow-hidden border-2 border-primary/30 group-hover:border-primary/80 transition-all duration-500 group-hover:box-glow-red">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            loading="lazy"
          />
        </div>
        {/* Hover social links */}
        <div className="absolute inset-0 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <a href="#" className="text-primary hover:text-accent transition-colors"><Github className="w-4 h-4" /></a>
          <a href="#" className="text-secondary hover:text-accent transition-colors"><Linkedin className="w-4 h-4" /></a>
          <a href="#" className="text-primary hover:text-accent transition-colors"><Twitter className="w-4 h-4" /></a>
        </div>
      </div>
      <h4 className="font-display text-lg text-foreground">{name}</h4>
      <p className="font-body text-xs text-muted-foreground">{role}</p>
    </motion.div>
  );
};

export default TeamCard;
