
import React from 'react';

export const Navbar = () => {
  return (
    <nav className="bg-background text-foreground p-4 shadow-md">
      <div className="container mx-auto flex items-center justify-between">
        <a href="/" className="text-xl font-bold">
          HealthFlow
        </a>
      </div>
    </nav>
  );
};
