import React, { useRef, useEffect } from "react";
import gsap from "gsap";

export default function MagicBento({ children }) {
  const cardRef = useRef(null);
  const particlesRef = useRef([]);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    // 🌟 Create Glow Layer
    const glow = document.createElement("div");
    glow.className =
      "absolute inset-0 rounded-lg opacity-0 transition-opacity duration-500 pointer-events-none";
    glow.style.background =
      "radial-gradient(circle at center, rgba(59,130,246,0.4), transparent 70%)";
    card.appendChild(glow);

    // ✨ Create Particles
    for (let i = 0; i < 15; i++) {
      const particle = document.createElement("div");
      particle.className = "absolute w-1 h-1 rounded-full bg-blue-400 opacity-60";
      particle.style.left = Math.random() * 100 + "%";
      particle.style.top = Math.random() * 100 + "%";
      card.appendChild(particle);
      particlesRef.current.push(particle);

      // Animate floating particles
      gsap.to(particle, {
        y: Math.random() * 20 - 10,
        x: Math.random() * 20 - 10,
        opacity: Math.random(),
        duration: 2 + Math.random() * 2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    }

    // 🖱️ Mouse move glow & tilt
    const handleMove = (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      // Glow follows mouse
      gsap.to(glow, {
        opacity: 1,
        duration: 0.3,
        background: `radial-gradient(circle at ${x}px ${y}px, rgba(59,130,246,0.4), transparent 70%)`,
      });

      // Tilt effect
      const rotateY = ((x - rect.width / 2) / rect.width) * 20;
      const rotateX = -((y - rect.height / 2) / rect.height) * 20;

      gsap.to(card, {
        rotateY,
        rotateX,
        transformPerspective: 800,
        duration: 0.3,
      });
    };

    const handleLeave = () => {
      gsap.to(glow, { opacity: 0, duration: 0.5 });
      gsap.to(card, { rotateX: 0, rotateY: 0, duration: 0.5 });
    };

    card.addEventListener("mousemove", handleMove);
    card.addEventListener("mouseleave", handleLeave);

    return () => {
      card.removeEventListener("mousemove", handleMove);
      card.removeEventListener("mouseleave", handleLeave);
    };
  }, []);

  return (
    <div
      ref={cardRef}
      className="relative overflow-hidden rounded-xl transition-transform duration-300"
    >
      {children}
    </div>
  );
}
