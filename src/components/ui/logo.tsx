import React from 'react';
import Image from 'next/image';

const Logo = () => {
  return (
    <div className="logo">
      {/* Replace '/logo.png' with the path to your actual logo image */}
      <Image src="/src/components/logo.png" alt="SZABIST Logo" width={50} height={50} />
    </div>
  );
};

export default Logo;