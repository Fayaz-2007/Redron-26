import { motion } from "framer-motion";

interface EventCardProps {
  title: string;
  tag: string;
  date: string;
  image: string;
  onViewDetails: () => void;
}

const EventCard = ({ title, tag, date, image, onViewDetails }: EventCardProps) => {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      className="group relative rounded-xl overflow-hidden border border-border bg-card/60 backdrop-blur-sm transition-all duration-500 hover:border-primary/50 hover:box-glow-red"
    >
      <div className="relative h-56 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
        <span className="absolute top-3 left-3 font-tech text-[10px] tracking-widest uppercase px-3 py-1 rounded-full border border-secondary/40 bg-secondary/10 text-secondary backdrop-blur-sm">
          {tag}
        </span>
      </div>

      <div className="p-5">
        <h3 className="font-display text-2xl text-foreground group-hover:text-primary transition-colors">
          {title}
        </h3>
        <p className="font-tech text-[10px] tracking-widest uppercase text-muted-foreground mt-1">
          {date}
        </p>
        <button
          onClick={onViewDetails}
          className="mt-4 w-full py-2.5 rounded-lg font-body text-sm font-bold uppercase tracking-wider border border-primary/40 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 relative overflow-hidden group/btn"
        >
          <span className="relative z-10">View Details</span>
          <span className="absolute inset-0 bg-primary scale-x-0 group-hover/btn:scale-x-100 transition-transform origin-left duration-300" />
        </button>
      </div>

      {/* Top glow line */}
      <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary via-secondary to-primary scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500" />
    </motion.div>
  );
};

export default EventCard;
