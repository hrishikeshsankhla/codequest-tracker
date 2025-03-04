
import { useEffect, useState, useRef } from "react";
import { cn } from "@/lib/utils";

interface AnimatedNumberProps {
  value: number;
  duration?: number;
  className?: string;
  formatter?: (value: number) => string;
}

export const AnimatedNumber = ({
  value,
  duration = 1000,
  className,
  formatter = (num) => num.toString()
}: AnimatedNumberProps) => {
  const [displayValue, setDisplayValue] = useState(0);
  const startTimeRef = useRef<number | null>(null);
  const startValueRef = useRef(0);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    startValueRef.current = displayValue;
    startTimeRef.current = null;
    
    const animateValue = (timestamp: number) => {
      if (!startTimeRef.current) startTimeRef.current = timestamp;
      const progress = timestamp - startTimeRef.current;
      const progressRatio = Math.min(progress / duration, 1);
      
      // Easing function - easeOutExpo
      const easeRatio = progressRatio === 1 
        ? 1 
        : 1 - Math.pow(2, -10 * progressRatio);
      
      const nextValue = Math.round(
        startValueRef.current + (value - startValueRef.current) * easeRatio
      );
      
      setDisplayValue(nextValue);
      
      if (progressRatio < 1) {
        rafRef.current = requestAnimationFrame(animateValue);
      }
    };
    
    rafRef.current = requestAnimationFrame(animateValue);
    
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [value, duration]);

  return (
    <span className={cn("font-mono", className)}>
      {formatter(displayValue)}
    </span>
  );
};
