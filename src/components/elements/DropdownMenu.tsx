import { useState, useEffect } from "react";

export default function DropdownMenu({ title, items }) {
  const [hovered, setHovered] = useState(false);
  const [timeoutId, setTimeoutId] = useState(null);

  const handleMouseEnter = () => {
    if (timeoutId) {
      clearTimeout(timeoutId);
      setTimeoutId(null);
    }
    setHovered(true);
  };

  const handleMouseLeave = () => {
    const id = setTimeout(() => setHovered(false), 100);
    setTimeoutId(id);
  };

  useEffect(() => {
    // Nettoyage des timers au démontage
    return () => {
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [timeoutId]);

  return (
    <li
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <a href="/services">{title}</a>
      {hovered && (
        <ul className="absolute w-52 top-full left-0 bg-white text-black shadow-lg rounded mt-2 p-2">
          {items.map((item, index) => (
            <li key={index} className="py-2 hover:text-blue-600">
              <a href={item.href}>{item.label}</a>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
}
