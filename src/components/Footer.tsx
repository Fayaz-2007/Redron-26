const Footer = () => (
  <footer className="relative border-t border-border py-10">
    <div className="container mx-auto px-4">
      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <span className="font-tech text-lg font-bold text-primary text-glow-red tracking-widest">REDRON</span>
          <span className="text-muted-foreground font-body text-sm">© 2026</span>
        </div>
        <p className="font-body text-xs text-muted-foreground text-center">
          Organized by RRC — Crafted with passion & powered by heroes.
        </p>
        <div className="flex gap-6">
          {["Home", "Events", "Contact"].map((link) => (
            <button
              key={link}
              onClick={() => document.getElementById(link.toLowerCase())?.scrollIntoView({ behavior: "smooth" })}
              className="font-body text-xs text-muted-foreground hover:text-primary transition-colors uppercase tracking-wider"
            >
              {link}
            </button>
          ))}
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
