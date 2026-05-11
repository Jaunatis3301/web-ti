const meteors = [
  { top: "8%", left: "12%", delay: "0s", duration: "7.4s", width: "9rem" },
  { top: "18%", left: "72%", delay: "1.6s", duration: "8.8s", width: "7rem" },
  { top: "34%", left: "42%", delay: "3.2s", duration: "7.8s", width: "8rem" },
  { top: "52%", left: "88%", delay: "4.7s", duration: "9.4s", width: "6.5rem" },
  { top: "72%", left: "24%", delay: "6.1s", duration: "8.2s", width: "7.5rem" },
];

export function MeteorBackground() {
  return (
    <div
      className="meteor-layer fixed inset-0 z-[15] overflow-hidden pointer-events-none"
      aria-hidden="true"
    >
      {meteors.map((meteor, index) => (
        <span
          key={index}
          className="meteor"
          style={{
            top: meteor.top,
            left: meteor.left,
            width: meteor.width,
            animationDelay: meteor.delay,
            animationDuration: meteor.duration,
          }}
        />
      ))}
    </div>
  );
}
