import { useEffect, useRef, useState } from "react";

export default function Cursor() {
  const outerRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      if (outerRef.current && innerRef.current) {
        // Smoothly animate outer cursor, snap inner cursor
        innerRef.current.style.left = `${clientX}px`;
        innerRef.current.style.top = `${clientY}px`;
        
        // GSAP-like smooth interpolation in vanilla JS for outer cursor
        outerRef.current.animate(
          {
            left: `${clientX}px`,
            top: `${clientY}px`,
          },
          { duration: 150, fill: "forwards" }
        );
      }
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.closest("button") ||
        target.closest("a") ||
        target.classList.contains("clickable")
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    const handleMouseLeaveWindow = () => setIsHidden(true);
    const handleMouseEnterWindow = () => setIsHidden(false);

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseleave", handleMouseLeaveWindow);
    document.addEventListener("mouseenter", handleMouseEnterWindow);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseleave", handleMouseLeaveWindow);
      document.removeEventListener("mouseenter", handleMouseEnterWindow);
    };
  }, []);

  if (isHidden) return null;

  return (
    <>
      <div
        ref={outerRef}
        className={`custom-cursor fixed top-0 left-0 hidden md:block ${
          isHovered ? "cursor-hover" : ""
        }`}
      />
      <div
        ref={innerRef}
        className="custom-cursor-dot fixed top-0 left-0 hidden md:block"
      />
    </>
  );
}
