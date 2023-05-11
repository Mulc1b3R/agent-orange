import React from 'react';
import ParticlesBg from 'particles-bg';

interface DottedGridBackgroundProps {
  children: React.ReactNode;
  className?: string;
}

const DottedGridBackground = ({
  children,
  className,
}: DottedGridBackgroundProps) => {
  return (
    <div className={`${className ? className + ' ' : ''} background`}>
      <ParticlesBg type="cobweb" color="#ffffff" bg={true} />
      <div className="lower-gradient" />
      {children}
    </div>
  );
};

export default DottedGridBackground;
