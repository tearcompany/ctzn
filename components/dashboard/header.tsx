'use client';

import { useState } from 'react';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search, Bell, User, Sun, Moon, Maximize, Minimize, Eye } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

interface HeaderProps {
  onSearch?: (query: string) => void;
  onQuickPreview?: (query: string) => void;
}

export function Header({ onSearch, onQuickPreview }: HeaderProps) {
  const pathname = usePathname();
  const [searchQuery, setSearchQuery] = useState('');
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const getPageTitle = () => {
    switch (pathname) {
      case '/dashboard':
        return 'Dashboard';
      case '/analysis':
        return 'Analysis';
      case '/patterns':
        return 'Pattern Explorer';
      case '/timeline':
        return 'Time Axis';
      case '/history':
        return 'Analysis History';
      default:
        return 'Kabbalistic Pattern Analysis';
    }
  };

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch((err) => {
        console.error(`Error attempting to enable fullscreen: ${err.message}`);
      });
      setIsFullscreen(true);
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
        setIsFullscreen(false);
      }
    }
  };

  const toggleDarkMode = () => {
    document.documentElement.classList.toggle('dark');
    setIsDarkMode(!isDarkMode);
  };

  const handleSearch = () => {
    if (onSearch && searchQuery) {
      onSearch(searchQuery);
    }
  };

  const handleQuickPreview = () => {
    if (onQuickPreview && searchQuery) {
      onQuickPreview(searchQuery);
    }
  };

  return (
    <header className="h-14 border-b bg-card flex items-center justify-between px-4">
      <h1 className="text-lg font-semibold">{getPageTitle()}</h1>

      <div className="flex items-center gap-2 w-1/3">
        <div className="relative flex-1">
          <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Enter Hebrew or English text..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-8 bg-background"
            onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
          />
        </div>
        <Button className="bg-primary hover:bg-primary/90 text-primary-foreground" onClick={handleSearch}>
          Analyze
        </Button>
        <Button variant="outline" size="icon" onClick={handleQuickPreview} title="Quick Preview">
          <Eye className="h-4 w-4" />
        </Button>
      </div>

      <div className="flex items-center gap-2">
        <Button variant="ghost" size="icon" onClick={toggleDarkMode}>
          {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
        </Button>
        <Button variant="ghost" size="icon" onClick={toggleFullscreen}>
          {isFullscreen ? <Minimize className="h-5 w-5" /> : <Maximize className="h-5 w-5" />}
        </Button>
        <Button variant="ghost" size="icon" className="relative">
          <Bell className="h-5 w-5" />
          <span className="absolute top-1 right-1 h-2 w-2 rounded-full bg-secondary"></span>
        </Button>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon">
              <User className="h-5 w-5" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>Settings</DropdownMenuItem>
            <DropdownMenuItem>Help</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Log out</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
}
