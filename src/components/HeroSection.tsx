import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";
import CountdownTimer from "./CountdownTimer";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="" className="w-full h-full object-cover" width={1920} height={1080} />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/70 to-background" />
        <div className="absolute inset-0 web-pattern opacity-30" />
      </div>

      {/* Animated web lines */}
      <div className="absolute inset-0 pointer-events-none">
        <svg className="absolute top-0 left-1/4 w-1 h-40 animate-web-swing origin-top" style={{ animationDelay: "0s" }}>
          <line x1="0" y1="0" x2="0" y2="160" stroke="hsl(0 85% 50% / 0.3)" strokeWidth="1" />
        </svg>
        <svg className="absolute top-0 right-1/3 w-1 h-56 animate-web-swing origin-top" style={{ animationDelay: "1s" }}>
          <line x1="0" y1="0" x2="0" y2="224" stroke="hsl(220 80% 50% / 0.3)" strokeWidth="1" />
        </svg>
      </div>

      <div className="relative z-10 text-center px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="font-tech text-xs sm:text-sm tracking-[0.3em] uppercase text-secondary mb-4 block text-glow-blue">
            RRC Presents
          </span>
          <h1 className="font-display text-7xl sm:text-9xl lg:text-[12rem] leading-none text-primary text-glow-red tracking-wider">
            REDRON
          </h1>
          <p className="font-display text-3xl sm:text-5xl text-foreground/90 tracking-widest mt-2">
            2026
          </p>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="font-body text-lg sm:text-xl text-muted-foreground mt-6 max-w-md mx-auto"
        >
          Unleash the Hero Within
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="mt-8 flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#events"
            className="group relative inline-flex items-center justify-center px-8 py-3 font-body text-sm font-bold uppercase tracking-wider bg-primary text-primary-foreground rounded overflow-hidden transition-all hover:box-glow-red"
          >
            <span className="relative z-10">Register Now</span>
            <span className="absolute inset-0 bg-accent scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
          </a>
          <a
            href="#events"
            className="group relative inline-flex items-center justify-center px-8 py-3 font-body text-sm font-bold uppercase tracking-wider border border-secondary text-secondary rounded overflow-hidden transition-all hover:box-glow-blue"
          >
            <span className="relative z-10">Explore Events</span>
            <span className="absolute inset-0 bg-secondary/10 scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="mt-12 flex justify-center"
        >
          <CountdownTimer />
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-5 h-8 rounded-full border-2 border-primary/40 flex justify-center pt-1.5">
          <div className="w-1 h-2 rounded-full bg-primary animate-pulse-glow" />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
