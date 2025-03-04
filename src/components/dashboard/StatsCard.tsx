
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import { CSSProperties } from "react";

type StatsCardProps = {
  title: string;
  value: number;
  previousValue: number;
  icon: React.ReactNode;
  formatter?: (value: number) => string;
  className?: string;
  style?: CSSProperties;
};

export const StatsCard = ({
  title,
  value,
  previousValue,
  icon,
  formatter = (val) => val.toString(),
  className,
  style
}: StatsCardProps) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  const percentChange = previousValue !== 0 
    ? ((value - previousValue) / previousValue) * 100 
    : 0;
  
  const isPositive = percentChange >= 0;
  const absChange = Math.abs(percentChange).toFixed(1);

  return (
    <div 
      className={cn(
        "glass-card p-6 rounded-xl transition-all duration-300",
        "transform opacity-0 translate-y-4",
        isVisible && "opacity-100 translate-y-0",
        className
      )}
      style={{ ...style, transitionDelay: "calc(var(--index, 0) * 100ms)" }}
    >
      <div className="flex justify-between items-start mb-4">
        <p className="text-sm font-medium text-muted-foreground">{title}</p>
        <div className="h-9 w-9 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
          {icon}
        </div>
      </div>
      
      <div className="space-y-2">
        <h2 className="text-3xl font-bold">{formatter(value)}</h2>
        
        <div className="flex items-center gap-2">
          <div 
            className={cn(
              "px-1.5 py-0.5 rounded text-xs font-medium flex items-center gap-1",
              isPositive ? "bg-green-500/10 text-green-500" : "bg-red-500/10 text-red-500"
            )}
          >
            <span>{isPositive ? "+" : "-"}{absChange}%</span>
          </div>
          <span className="text-xs text-muted-foreground">vs previous period</span>
        </div>
      </div>
    </div>
  );
};
