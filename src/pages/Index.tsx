
import { Sidebar } from "@/components/layout/Sidebar";
import { Header } from "@/components/layout/Header";
import { StatsCard } from "@/components/dashboard/StatsCard";
import { StreakChart } from "@/components/dashboard/StreakChart";
import { ChallengeCard } from "@/components/dashboard/ChallengeCard";
import { AnimatedNumber } from "@/components/ui/AnimatedNumber";
import { 
  Award, 
  Braces, 
  CheckCircle2, 
  ChevronRight, 
  Flame,
  GitPullRequestDraft,
  Star,
  Trophy,
  Users,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const dailyChallenge = {
  title: "Binary Tree Level Order Traversal",
  difficulty: "Medium" as const,
  category: "Trees & Graphs",
  timeEstimate: "20-30 min",
  description: "Given the root of a binary tree, return the level order traversal of its nodes' values (i.e., from left to right, level by level).",
  isDaily: true,
};

const recommendedChallenges = [
  {
    title: "Two Sum",
    difficulty: "Easy" as const,
    category: "Arrays & Hashing",
    timeEstimate: "10-15 min",
    description: "Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.",
  },
  {
    title: "Valid Parentheses",
    difficulty: "Easy" as const,
    category: "Stack",
    timeEstimate: "10-15 min",
    description: "Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.",
  },
  {
    title: "Merge K Sorted Lists",
    difficulty: "Hard" as const,
    category: "Linked Lists",
    timeEstimate: "30-45 min",
    description: "You are given an array of k linked-lists lists, each linked-list is sorted in ascending order. Merge all the linked-lists into one sorted linked-list.",
  },
];

const Index = () => {
  return (
    <div className="min-h-screen w-full bg-background">
      <Sidebar />
      
      <div className="ml-[250px] transition-all duration-300">
        <Header />
        
        <main className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <StatsCard 
              title="Problems Solved"
              value={142}
              previousValue={124}
              icon={<CheckCircle2 className="h-5 w-5" />}
              className=""
              style={{ "--index": 0 } as React.CSSProperties}
            />
            <StatsCard 
              title="Current Streak"
              value={18}
              previousValue={12}
              icon={<Flame className="h-5 w-5" />}
              className=""
              style={{ "--index": 1 } as React.CSSProperties}
            />
            <StatsCard 
              title="Leaderboard Rank"
              value={16}
              previousValue={21}
              icon={<Trophy className="h-5 w-5" />}
              formatter={(val) => `#${val}`}
              className=""
              style={{ "--index": 2 } as React.CSSProperties}
            />
            <StatsCard 
              title="Points Earned"
              value={3250}
              previousValue={2800}
              icon={<Star className="h-5 w-5" />}
              className=""
              style={{ "--index": 3 } as React.CSSProperties}
            />
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
            <div className="lg:col-span-2">
              <StreakChart />
            </div>
            
            <div className="glass-card rounded-xl p-6 animate-fade-in">
              <h3 className="text-lg font-semibold mb-5">Today's Goal</h3>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="h-9 w-9 rounded-md bg-primary/10 flex items-center justify-center text-primary">
                      <GitPullRequestDraft className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-medium text-sm">Complete Daily Challenge</p>
                      <p className="text-xs text-muted-foreground">Medium difficulty</p>
                    </div>
                  </div>
                  <div className="h-5 w-5 rounded-full border-2 border-muted"></div>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="h-9 w-9 rounded-md bg-primary/10 flex items-center justify-center text-primary">
                      <Braces className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-medium text-sm">Solve 3 Problems</p>
                      <p className="text-xs text-muted-foreground">1 of 3 completed</p>
                    </div>
                  </div>
                  <div className="h-5 w-5 rounded-full border-2 border-muted flex items-center justify-center">
                    <div className="h-2.5 w-2.5 rounded-full bg-primary"></div>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="h-9 w-9 rounded-md bg-primary/10 flex items-center justify-center text-primary">
                      <Users className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-medium text-sm">Join a Group Discussion</p>
                      <p className="text-xs text-muted-foreground">Share your solution</p>
                    </div>
                  </div>
                  <div className="h-5 w-5 rounded-full border-2 border-muted"></div>
                </div>
              </div>
              
              <div className="mt-6 pt-4 border-t border-border">
                <div className="flex justify-between items-center mb-2">
                  <h4 className="text-sm font-medium">Total Points Today</h4>
                  <div className="text-xl font-bold text-primary">
                    <AnimatedNumber value={50} duration={1500} />
                  </div>
                </div>
                
                <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-primary rounded-full transition-all duration-1000 ease-out"
                    style={{ width: "33%" }}
                  ></div>
                </div>
                <div className="flex justify-between mt-1">
                  <span className="text-xs text-muted-foreground">0</span>
                  <span className="text-xs text-muted-foreground">150</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mb-8">
            <div className="flex items-center justify-between mb-5">
              <h3 className="text-lg font-semibold">Daily Challenge</h3>
              <div className="flex items-center gap-1 text-sm text-muted-foreground">
                <span>Resets in 8 hours</span>
              </div>
            </div>
            
            <ChallengeCard challenge={dailyChallenge} className="animate-fade-in" />
          </div>
          
          <div>
            <div className="flex items-center justify-between mb-5">
              <h3 className="text-lg font-semibold">Recommended for You</h3>
              <Button variant="ghost" size="sm" className="gap-1 text-muted-foreground">
                <span>View All</span>
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {recommendedChallenges.map((challenge, index) => (
                <ChallengeCard 
                  key={challenge.title} 
                  challenge={challenge} 
                  className="animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` } as React.CSSProperties}
                />
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Index;
