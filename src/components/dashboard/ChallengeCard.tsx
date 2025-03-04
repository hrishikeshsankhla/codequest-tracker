
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ArrowRight, BookOpen, Code, Clock3 } from "lucide-react";

type ChallengeCardProps = {
  challenge: {
    title: string;
    difficulty: "Easy" | "Medium" | "Hard";
    category: string;
    timeEstimate: string;
    description: string;
    isDaily?: boolean;
  };
  className?: string;
};

export const ChallengeCard = ({ challenge, className }: ChallengeCardProps) => {
  const { title, difficulty, category, timeEstimate, description, isDaily } = challenge;
  
  const difficultyColor = {
    Easy: "text-green-500 bg-green-500/10",
    Medium: "text-yellow-500 bg-yellow-500/10",
    Hard: "text-red-500 bg-red-500/10"
  }[difficulty];
  
  return (
    <div className={cn("glass-card rounded-xl overflow-hidden transition-all duration-300 hover:shadow-md", className)}>
      {isDaily && (
        <div className="bg-primary/10 text-primary px-4 py-1.5 text-xs font-medium">
          Daily Challenge
        </div>
      )}
      
      <div className="p-5">
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-lg font-bold">{title}</h3>
          <div className={cn("text-xs font-medium px-2 py-1 rounded", difficultyColor)}>
            {difficulty}
          </div>
        </div>
        
        <div className="flex items-center gap-4 mb-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-1.5">
            <Code className="h-3.5 w-3.5" />
            <span>{category}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Clock3 className="h-3.5 w-3.5" />
            <span>{timeEstimate}</span>
          </div>
        </div>
        
        <p className="text-sm text-muted-foreground mb-5">
          {description}
        </p>
        
        <div className="flex items-center justify-between mt-2">
          <Button variant="ghost" size="sm" className="text-muted-foreground gap-1.5">
            <BookOpen className="h-4 w-4" />
            <span>Hints</span>
          </Button>
          
          <Button className="gap-1.5">
            <span>Solve</span>
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};
