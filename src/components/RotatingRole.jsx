import { useEffect, useState } from 'react';

// Small, dependency-free rotating role component — no external library required.
const RotatingRole = ({ roles = [], interval = 2500, className = '' }) => {
  const [index, setIndex] = useState(0);
  const [display, setDisplay] = useState('');
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    let mounted = true;
    let charIndex = 0;
    setTyping(true);

    const type = () => {
      if (!mounted) return;
      const role = roles[index] || '';
      if (charIndex <= role.length) {
        setDisplay(role.slice(0, charIndex));
        charIndex += 1;
        setTimeout(type, 55);
      } else {
        setTyping(false);
        // pause on full role, then start delete
        setTimeout(() => {
          if (!mounted) return;
          deleteAnim();
        }, interval);
      }
    };

    const deleteAnim = () => {
      if (!mounted) return;
      const role = roles[index] || '';
      if (charIndex > 0) {
        charIndex -= 1;
        setDisplay(role.slice(0, charIndex));
        setTimeout(deleteAnim, 30);
      } else {
        // move to next
        setIndex((i) => (i + 1) % roles.length);
      }
    };

    type();

    return () => {
      mounted = false;
    };
  }, [index, roles, interval]);

  return (
    <span className={className} aria-live="polite">
      {display}
      <span className="inline-block ml-1 w-0.5 h-6 bg-white animate-blink" />
    </span>
  );
};

export default RotatingRole;
