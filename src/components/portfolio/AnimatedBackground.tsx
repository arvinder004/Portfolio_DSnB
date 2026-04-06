const dots = [
  { top: "14%", left: "10%", size: "h-2 w-2", color: "bg-primary/60", delay: "0s" },
  { top: "24%", left: "76%", size: "h-3 w-3", color: "bg-accent/50", delay: "0.8s" },
  { top: "48%", left: "22%", size: "h-1.5 w-1.5", color: "bg-white/30", delay: "1.4s" },
  { top: "68%", left: "82%", size: "h-2 w-2", color: "bg-primary/40", delay: "2s" },
  { top: "78%", left: "36%", size: "h-2.5 w-2.5", color: "bg-accent/40", delay: "2.6s" },
];

const AnimatedBackground = () => {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute left-[-8rem] top-[-5rem] h-80 w-80 rounded-full bg-primary/10 blur-3xl" />
      <div className="absolute right-[-10rem] top-[18%] h-[28rem] w-[28rem] rounded-full bg-accent/10 blur-3xl" />
      <div className="absolute bottom-[-8rem] left-[20%] h-72 w-72 rounded-full bg-primary/10 blur-3xl" />

      <div className="absolute inset-0 opacity-40" style={{ backgroundImage: "linear-gradient(hsl(0 0% 100% / 0.04) 1px, transparent 1px), linear-gradient(90deg, hsl(0 0% 100% / 0.04) 1px, transparent 1px)", backgroundSize: "72px 72px" }} />

      {dots.map((dot) => (
        <span
          key={`${dot.top}-${dot.left}`}
          className={`absolute rounded-full ${dot.size} ${dot.color} animate-pulse`}
          style={{ top: dot.top, left: dot.left, animationDelay: dot.delay }}
        />
      ))}
    </div>
  );
};

export default AnimatedBackground;
