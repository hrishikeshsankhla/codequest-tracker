
import { useState } from "react";
import { Bell, Search } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Header = () => {
  const [mounted, setMounted] = useState(true);

  return (
    <header className="h-16 w-full flex items-center justify-between px-6 border-b border-border glass sticky top-0 z-30">
      <div className="flex-1">
        <h1 className="text-2xl font-semibold tracking-tight animate-fade-in">Dashboard</h1>
      </div>
      
      <div className="flex items-center gap-4">
        <div className="relative w-64 hidden md:block">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <input 
            type="text" 
            placeholder="Search..."
            className="w-full h-10 pl-10 pr-4 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
          />
        </div>
        
        <div className="relative">
          <Button variant="ghost" size="icon" className="relative">
            <Bell className="h-5 w-5" />
            <span className="absolute -top-0.5 -right-0.5 h-2.5 w-2.5 bg-primary rounded-full"></span>
          </Button>
        </div>
        
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-full border-2 border-primary bg-gradient-to-br from-purple-100 to-indigo-100 flex items-center justify-center overflow-hidden">
            <span className="font-semibold text-sm text-primary">JS</span>
          </div>
          <div className="hidden md:block">
            <p className="font-medium text-sm">John Smith</p>
            <p className="text-xs text-muted-foreground">Student</p>
          </div>
        </div>
      </div>
    </header>
  );
};
