
const LogoLoop = ({ logos = [], speed = 120, direction = 'left', logoHeight = 48, gap = 48 }) => {
  return (
    <div className="relative w-full overflow-hidden  py-8">
      <div className="flex animate-logo-loop" style={{ 
        '--speed': `${speed / 10}s`,
        '--direction': direction === 'left' ? 'normal' : 'reverse',
        '--gap': `${gap}px`
      }}>
        {/* Original set */}
        {logos.map((logo, index) => (
          <div key={`original-${index}`} className={`flex hover:scale-110 transition-all items-center justify-center mx-[var(--gap)]`} style={{ height: `${logoHeight}px` }}>
            {logo.node}
          </div>
        ))}
        {/* Duplicate set for seamless loop */}
        {logos.map((logo, index) => (
          <div key={`duplicate-${index}`} className="flex hover:scale-110 transition-all items-center justify-center mx-[var(--gap)]" style={{ height: `${logoHeight}px` }}>
            {logo.node}
          </div>
        ))}
      </div>
      

    </div>
  );
};

export default LogoLoop;