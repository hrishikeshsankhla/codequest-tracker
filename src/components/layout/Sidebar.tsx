
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { 
  BookOpen, 
  ChevronLeft,
  ChevronRight, 
  Crown, 
  Home, 
  User, 
  Users,
  BarChart2,
  Code,
  Settings,
} from "lucide-react";
import { cn } from "@/lib/utils";

export const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const location = useLocation();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const navItems = [
    { name: "Dashboard", icon: Home, path: "/" },
    { name: "Challenges", icon: Code, path: "/challenges" },
    { name: "Leaderboard", icon: Crown, path: "/leaderboard" },
    { name: "Groups", icon: Users, path: "/groups" },
    { name: "Learning", icon: BookOpen, path: "/learning" },
    { name: "Analytics", icon: BarChart2, path: "/analytics" },
    { name: "Profile", icon: User, path: "/profile" },
    { name: "Settings", icon: Settings, path: "/settings" }
  ];

  return (
    <div 
      className={cn(
        "h-screen fixed left-0 top-0 z-40 flex flex-col transition-all duration-300 ease-in-out bg-sidebar text-sidebar-foreground border-r border-sidebar-border",
        collapsed ? "w-[70px]" : "w-[250px]"
      )}
    >
      <div className="flex items-center justify-between p-4 border-b border-sidebar-border">
        {!collapsed && (
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-md bg-primary flex items-center justify-center">
              <Code className="h-5 w-5 text-white" />
            </div>
            <span className="font-semibold text-lg animate-fade-in">CodeQuest</span>
          </div>
        )}
        {collapsed && (
          <div className="mx-auto h-8 w-8 rounded-md bg-primary flex items-center justify-center">
            <Code className="h-5 w-5 text-white" />
          </div>
        )}
        <button 
          onClick={() => setCollapsed(!collapsed)}
          className="h-8 w-8 rounded-md hover:bg-sidebar-accent flex items-center justify-center transition-colors"
        >
          {collapsed ? (
            <ChevronRight className="h-4 w-4" />
          ) : (
            <ChevronLeft className="h-4 w-4" />
          )}
        </button>
      </div>

      <nav className="flex-1 py-6 px-3 space-y-1 overflow-y-auto">
        {navItems.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <Link
              key={item.path}
              to={item.path}
              className={cn(
                "flex items-center gap-3 px-3 py-2.5 rounded-md transition-all group",
                isActive 
                  ? "bg-sidebar-accent text-primary" 
                  : "hover:bg-sidebar-accent/50 text-sidebar-foreground"
              )}
            >
              <item.icon 
                className={cn(
                  "h-5 w-5",
                  isActive ? "text-primary" : "text-sidebar-foreground"
                )} 
              />
              {!collapsed && (
                <span className="font-medium whitespace-nowrap">{item.name}</span>
              )}
              {!collapsed && isActive && (
                <div className="h-1.5 w-1.5 rounded-full bg-primary ml-auto"></div>
              )}
            </Link>
          );
        })}
      </nav>

      <div className={cn(
        "mt-auto mb-4 mx-4 p-4 rounded-xl", 
        "bg-sidebar-accent/50 backdrop-blur-sm",
      )}>
        {!collapsed ? (
          <div className="space-y-3">
            <p className="text-sm font-medium">Current Streak</p>
            <div className="flex items-center justify-between">
              <div className="flex space-x-1">
                {[1, 2, 3, 4, 5].map((day) => (
                  <div 
                    key={day}
                    className={cn(
                      "streak-dot",
                      day <= 3 ? "streak-active" : "streak-inactive"
                    )}
                  />
                ))}
              </div>
              <span className="text-xl font-bold">3</span>
            </div>
          </div>
        ) : (
          <div className="flex flex-col items-center">
            <div className="streak-dot streak-active mb-1" />
            <span className="text-sm font-bold">3</span>
          </div>
        )}
      </div>
    </div>
  );
};
