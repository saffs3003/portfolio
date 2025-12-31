import { useEffect, useRef } from "react";

function Glow() {
  const glowRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!glowRef.current) return;

      glowRef.current.style.left = `${e.clientX}px`;
      glowRef.current.style.top = `${e.clientY}px`;
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      ref={glowRef}
      className="glowElement"
      style={{
        position: "fixed",
        width: "0px",
        height: "0px",
        borderRadius: "50%",

        boxShadow: "0px 0px 100px 40px rgba(0, 94, 138, 0.14)",
        pointerEvents: "none",
        transform: "translate(-50%, -50%)",
        transition: "left 0.02s linear, top 0.02s linear",
        zIndex: 1,
      }}
    />
  );
}

export default Glow;
