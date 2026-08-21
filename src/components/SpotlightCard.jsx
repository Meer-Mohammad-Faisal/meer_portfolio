const SpotlightCard = ({ children, className = '' }) => {
  const handlePointerMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    event.currentTarget.style.setProperty('--spotlight-x', `${event.clientX - rect.left}px`);
    event.currentTarget.style.setProperty('--spotlight-y', `${event.clientY - rect.top}px`);
  };

  return (
    <div
      className={`spotlight-card group relative overflow-hidden rounded-lg border border-[rgba(255,255,255,0.08)] bg-[#0B0B0B] shadow-sm ${className}`}
      onPointerMove={handlePointerMove}
    >
      {children}
    </div>
  );
};

export default SpotlightCard;
