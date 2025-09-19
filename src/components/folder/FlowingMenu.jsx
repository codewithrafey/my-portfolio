import React, { useContext } from "react";
import { gsap } from "gsap";
import { ThemeContext } from "../../context/ThemeProvider"; // 👈 theme ka access
import { Link } from "react-router-dom";

function FlowingMenu({ items = [] }) {
  const { theme } = useContext(ThemeContext);

  return (
    <div className="w-full h-full overflow-hidden">
      <nav className="flex flex-col h-full m-0 p-0">
        {items.map((item, idx) => (
          <MenuItem key={idx} {...item} theme={theme} />
        ))}
      </nav>
    </div>
  );
}

function MenuItem({ link, text, image, theme }) {
  const itemRef = React.useRef(null);
  const marqueeRef = React.useRef(null);
  const marqueeInnerRef = React.useRef(null);

  const animationDefaults = { duration: 0.6, ease: "expo" };

  const findClosestEdge = (mouseX, mouseY, width, height) => {
    const topEdgeDist = (mouseX - width / 2) ** 2 + mouseY ** 2;
    const bottomEdgeDist = (mouseX - width / 2) ** 2 + (mouseY - height) ** 2;
    return topEdgeDist < bottomEdgeDist ? "top" : "bottom";
  };

  const handleMouseEnter = (ev) => {
    if (!itemRef.current || !marqueeRef.current || !marqueeInnerRef.current) return;
    const rect = itemRef.current.getBoundingClientRect();
    const edge = findClosestEdge(ev.clientX - rect.left, ev.clientY - rect.top, rect.width, rect.height);

    gsap
      .timeline({ defaults: animationDefaults })
      .set(marqueeRef.current, { y: edge === "top" ? "-101%" : "101%" })
      .set(marqueeInnerRef.current, { y: edge === "top" ? "101%" : "-101%" })
      .to([marqueeRef.current, marqueeInnerRef.current], { y: "0%" });
  };

  const handleMouseLeave = (ev) => {
    if (!itemRef.current || !marqueeRef.current || !marqueeInnerRef.current) return;
    const rect = itemRef.current.getBoundingClientRect();
    const edge = findClosestEdge(ev.clientX - rect.left, ev.clientY - rect.top, rect.width, rect.height);

    gsap
      .timeline({ defaults: animationDefaults })
      .to(marqueeRef.current, { y: edge === "top" ? "-101%" : "101%" })
      .to(marqueeInnerRef.current, { y: edge === "top" ? "101%" : "-101%" });
  };

  // ✅ Marquee content repeat
  const repeatedMarqueeContent = Array.from({ length: 4 }).map((_, idx) => (
    <React.Fragment key={idx}>
      <span className="uppercase font-medium text-lg sm:text-xl md:text-2xl px-6 py-4">
        {text}
      </span>
      <div
        className="w-[260px] h-[120px] mx-4 my-2 rounded-[20px] bg-cover bg-center"
        style={{ backgroundImage: `url(${image})` }}
      />
    </React.Fragment>
  ));

  return (
    <div
      className={`flex-1 relative overflow-hidden text-center border-b 
        ${theme === "light" ? "border-gray-300" : "border-gray-700"}`}
      ref={itemRef}
    >
      {/* Main text */}
      <Link
      to={`${link}`}
        className={`flex items-center justify-center w-full h-full py-8 px-6 relative cursor-pointer uppercase font-semibold text-xl sm:text-2xl transition-colors
          ${theme === "light" ? "text-gray-900 hover:text-blue-600" : "text-white hover:text-blue-400"}`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {text}
      </Link>

      {/* Hover Marquee */}
<div
  className={`absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none 
    ${theme === "light" ? "bg-white" : "bg-black"}`}
  ref={marqueeRef}
  style={{ transform: "translateY(101%)" }} // ✅ start hidden
>
  <div className="h-full w-[200%] flex" ref={marqueeInnerRef}>
    {/* Marquee Row */}
    <div className="flex items-center h-full w-full animate-marquee">
      {repeatedMarqueeContent}
    </div>
    {/* Duplicate Row for seamless loop */}
    <div className="flex items-center h-full w-full animate-marquee">
      {repeatedMarqueeContent}
    </div>
  </div>
</div>
    </div>
  );
}

export default FlowingMenu;
