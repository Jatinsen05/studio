
import React from 'react';
import {LucideIcon} from 'lucide-react';
import {Stethoscope, Moon, Sun} from 'lucide-react';
import {useTheme} from 'next-themes';

interface NavbarProps {
  icon?: LucideIcon;
}

export const Navbar = ({icon: Icon = Stethoscope}: NavbarProps) => {
  const {theme, setTheme} = useTheme();

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <nav className="bg-background text-foreground p-4 shadow-md">
      <div className="container mx-auto flex items-center justify-between">
        <a
          href="/"
          className="text-xl font-bold flex items-center space-x-2 bg-gradient-to-r from-primary to-accent text-transparent bg-clip-text shadow-sm"
        >
          <Icon className="h-6 w-6 text-primary" />
          <span>HealthFlow</span>
        </a>
        <button
          onClick={toggleTheme}
          className="p-2 rounded-full hover:bg-secondary"
        >
          {theme === 'light' ? (
            <Moon className="h-5 w-5" />
          ) : (
            <Sun className="h-5 w-5" />
          )}
        </button>
      </div>
    </nav>
  );
};
