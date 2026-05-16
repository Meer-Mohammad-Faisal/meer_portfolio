const SpotlightCard = ({ children, className = '' }) => {
  const handlePointerMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    event.currentTarget.style.setProperty('--spotlight-x', `${event.clientX - rect.left}px`);
    event.currentTarget.style.setProperty('--spotlight-y', `${event.clientY - rect.top}px`);
  };

  return (
    <div
      className={`spotlight-card group relative overflow-hidden rounded-[1.35rem] border border-white/10 bg-white/[0.045] shadow-2xl shadow-black/20 backdrop-blur-xl ${className}`}
      onPointerMove={handlePointerMove}
    >
      {children}
    </div>
  );
};

export default SpotlightCard;
