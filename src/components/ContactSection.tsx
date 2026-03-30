import { useState } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Send, Instagram, Linkedin, Mail } from "lucide-react";

const ContactSection = () => {
  const { ref, visible } = useScrollAnimation();
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Would connect to backend
    alert("Message sent! We'll get back to you soon.");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="relative py-24">
      <div className="absolute inset-0 web-pattern opacity-10" />
      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        <div className={`text-center mb-16 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <span className="font-tech text-xs tracking-[0.3em] uppercase text-secondary text-glow-blue">Contact</span>
          <h2 className="font-display text-5xl sm:text-7xl text-primary text-glow-red mt-2">GET IN TOUCH</h2>
        </div>

        <div className="max-w-xl mx-auto">
          <form
            onSubmit={handleSubmit}
            className={`space-y-4 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <input
              type="text"
              placeholder="Your Name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              required
              className="w-full px-4 py-3 rounded-lg bg-card border border-border font-body text-foreground placeholder:text-muted-foreground focus:border-primary/50 focus:outline-none focus:ring-1 focus:ring-primary/30 transition-all"
            />
            <input
              type="email"
              placeholder="Your Email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              required
              className="w-full px-4 py-3 rounded-lg bg-card border border-border font-body text-foreground placeholder:text-muted-foreground focus:border-primary/50 focus:outline-none focus:ring-1 focus:ring-primary/30 transition-all"
            />
            <textarea
              placeholder="Your Message"
              rows={4}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              required
              className="w-full px-4 py-3 rounded-lg bg-card border border-border font-body text-foreground placeholder:text-muted-foreground focus:border-primary/50 focus:outline-none focus:ring-1 focus:ring-primary/30 transition-all resize-none"
            />
            <button
              type="submit"
              className="group w-full flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-body text-sm font-bold uppercase tracking-wider hover:box-glow-red transition-all"
            >
              <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              Send Message
            </button>
          </form>

          <div className="flex justify-center gap-6 mt-10">
            {[
              { Icon: Instagram, href: "https://instagram.com/your_handle", label: "Instagram" },
              { Icon: Linkedin, href: "https://linkedin.com/in/your_profile", label: "LinkedIn" },
              { Icon: Mail, href: "mailto:your_email@example.com", label: "Email ID" },
            ].map(({ Icon, href, label }, i) => (
              <a
                key={i}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                title={label}
                className="w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 hover:box-glow-red transition-all"
              >
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
