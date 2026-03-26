import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { X, MapPin, Calendar, Users, IndianRupee, Trophy } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export interface EventData {
  title: string;
  tag: string;
  date: string;
  image: string;
  description: string;
  rules: string[];
  prizePool: string;
  venue: string;
  time: string;
  teamSize: string;
  fee: string;
}

interface EventModalProps {
  event: EventData | null;
  open: boolean;
  onClose: () => void;
}

const EventModal = ({ event, open, onClose }: EventModalProps) => {
  if (!event) return null;

  return (
    <Dialog open={open} onOpenChange={(v) => !v && onClose()}>
      <DialogContent className="max-w-4xl w-[95vw] max-h-[90vh] overflow-y-auto p-0 border-primary/20 bg-card/95 backdrop-blur-xl rounded-2xl gap-0">
        <DialogTitle className="sr-only">{event.title} Details</DialogTitle>

        {/* Hero banner */}
        <div className="relative h-48 sm:h-56 overflow-hidden rounded-t-2xl">
          <img src={event.image} alt={event.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-card via-card/60 to-transparent" />
          <span className="absolute top-4 left-4 font-tech text-[10px] tracking-widest uppercase px-3 py-1 rounded-full border border-secondary/40 bg-secondary/10 text-secondary backdrop-blur-sm">
            {event.tag}
          </span>
        </div>

        <div className="p-6 sm:p-8 grid md:grid-cols-5 gap-8">
          {/* LEFT — 3 cols */}
          <div className="md:col-span-3 space-y-6">
            <div>
              <h2 className="font-display text-4xl sm:text-5xl text-primary text-glow-red">
                {event.title}
              </h2>
              <button className="mt-4 px-8 py-3 rounded-lg bg-primary text-primary-foreground font-body text-sm font-bold uppercase tracking-wider hover:bg-primary/90 transition-colors box-glow-red">
                Register Now
              </button>
            </div>

            <div>
              <h4 className="font-tech text-xs tracking-widest uppercase text-secondary mb-2">About</h4>
              <p className="font-body text-sm leading-relaxed text-muted-foreground">
                {event.description}
              </p>
            </div>

            <div>
              <h4 className="font-tech text-xs tracking-widest uppercase text-secondary mb-3">Rules &amp; Guidelines</h4>
              <ol className="space-y-2">
                {event.rules.map((rule, i) => (
                  <li key={i} className="flex gap-3 font-body text-sm text-muted-foreground">
                    <span className="shrink-0 w-6 h-6 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center font-tech text-[10px] text-primary">
                      {i + 1}
                    </span>
                    {rule}
                  </li>
                ))}
              </ol>
            </div>
          </div>

          {/* RIGHT — 2 cols */}
          <div className="md:col-span-2 space-y-4">
            {/* Prize pool card */}
            <div className="rounded-xl border border-primary/30 bg-primary/5 p-5 text-center box-glow-red">
              <Trophy className="w-8 h-8 text-primary mx-auto mb-2" />
              <p className="font-tech text-xs tracking-widest uppercase text-muted-foreground">Prize Pool</p>
              <p className="font-display text-4xl text-primary mt-1">{event.prizePool}</p>
            </div>

            {/* Logistics */}
            <div className="rounded-xl border border-border bg-card p-5 space-y-4">
              <h4 className="font-tech text-xs tracking-widest uppercase text-secondary">Logistics</h4>
              {[
                { icon: MapPin, label: "Venue", value: event.venue },
                { icon: Calendar, label: "Date & Time", value: `${event.date} · ${event.time}` },
                { icon: Users, label: "Team Size", value: event.teamSize },
                { icon: IndianRupee, label: "Registration Fee", value: event.fee },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-secondary/10 border border-secondary/30 flex items-center justify-center shrink-0">
                    <item.icon className="w-4 h-4 text-secondary" />
                  </div>
                  <div>
                    <p className="font-tech text-[10px] tracking-widest uppercase text-muted-foreground">{item.label}</p>
                    <p className="font-body text-sm text-foreground">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default EventModal;
