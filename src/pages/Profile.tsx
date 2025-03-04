
import { Sidebar } from "@/components/layout/Sidebar";
import { Header } from "@/components/layout/Header";
import { 
  CalendarDays,
  CheckCircle2,
  ChevronRight,
  Clock, 
  Code, 
  Edit2, 
  ExternalLink,
  Flame,
  Github,
  Linkedin, 
  Settings,
  Star,
  Trophy,
  UserRoundCog
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { StreakChart } from "@/components/dashboard/StreakChart";

const challenges = [
  {
    id: "1",
    title: "Two Sum",
    difficulty: "Easy",
    date: "June 15, 2023",
    status: "Completed",
    language: "JavaScript"
  },
  {
    id: "2",
    title: "Binary Tree Level Order Traversal",
    difficulty: "Medium",
    date: "June 14, 2023",
    status: "Completed",
    language: "Python"
  },
  {
    id: "3",
    title: "LRU Cache",
    difficulty: "Medium",
    date: "June 13, 2023",
    status: "Completed",
    language: "JavaScript"
  },
  {
    id: "4",
    title: "Merge K Sorted Lists",
    difficulty: "Hard",
    date: "June 12, 2023",
    status: "Completed",
    language: "TypeScript"
  },
  {
    id: "5",
    title: "Valid Parentheses",
    difficulty: "Easy",
    date: "June 11, 2023",
    status: "Completed",
    language: "JavaScript"
  }
];

const achievements = [
  {
    id: "1",
    title: "First Victory",
    description: "Solve your first problem",
    icon: <CheckCircle2 className="h-5 w-5" />,
    date: "January 10, 2023",
    unlocked: true
  },
  {
    id: "2",
    title: "Week Warrior",
    description: "Maintain a 7-day streak",
    icon: <Flame className="h-5 w-5" />,
    date: "February 5, 2023",
    unlocked: true
  },
  {
    id: "3",
    title: "Problem Pioneer",
    description: "Solve 100 problems",
    icon: <Code className="h-5 w-5" />,
    date: "May 22, 2023",
    unlocked: true
  },
  {
    id: "4",
    title: "Algorithm Ace",
    description: "Complete all easy problems",
    icon: <Star className="h-5 w-5" />,
    date: "Not yet achieved",
    unlocked: false
  },
  {
    id: "5",
    title: "Leaderboard Legend",
    description: "Reach top 10 in leaderboard",
    icon: <Trophy className="h-5 w-5" />,
    date: "Not yet achieved",
    unlocked: false
  }
];

const Profile = () => {
  return (
    <div className="min-h-screen w-full bg-background">
      <Sidebar />
      
      <div className="ml-[250px] transition-all duration-300">
        <Header />
        
        <main className="p-6">
          <div className="mb-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <h2 className="text-2xl font-bold">My Profile</h2>
            <div className="flex items-center gap-3">
              <Button variant="outline" size="sm" className="gap-1.5">
                <UserRoundCog className="h-4 w-4" />
                <span>Edit Profile</span>
              </Button>
              <Button variant="outline" size="sm" className="gap-1.5">
                <Settings className="h-4 w-4" />
                <span>Settings</span>
              </Button>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            {/* Profile Card */}
            <div className="glass-card rounded-xl overflow-hidden animate-fade-in">
              <div className="h-24 bg-gradient-to-r from-primary/80 to-primary"></div>
              
              <div className="px-6 pt-0 pb-6 -mt-12">
                <div className="flex justify-between items-end mb-4">
                  <div className="h-24 w-24 rounded-full border-4 border-card bg-secondary flex items-center justify-center">
                    <span className="text-2xl font-bold">JS</span>
                  </div>
                  
                  <Button variant="outline" size="sm" className="gap-1.5">
                    <Edit2 className="h-3.5 w-3.5" />
                    <span>Edit</span>
                  </Button>
                </div>
                
                <h3 className="text-xl font-bold mb-1">John Smith</h3>
                <p className="text-sm text-muted-foreground mb-4">Frontend Developer at TechCorp</p>
                
                <div className="flex items-center gap-2 mb-4">
                  <div className="bg-primary/10 text-primary rounded-full px-2.5 py-1 text-xs font-medium">
                    Student
                  </div>
                  <div className="bg-secondary rounded-full px-2.5 py-1 text-xs font-medium">
                    JavaScript
                  </div>
                  <div className="bg-secondary rounded-full px-2.5 py-1 text-xs font-medium">
                    React
                  </div>
                </div>
                
                <p className="text-sm text-muted-foreground mb-6">
                  Frontend developer focused on building responsive web applications with modern JavaScript frameworks.
                </p>
                
                <div className="flex items-center gap-3">
                  <Button variant="outline" size="sm" className="gap-1.5">
                    <Github className="h-3.5 w-3.5" />
                    <span>GitHub</span>
                  </Button>
                  <Button variant="outline" size="sm" className="gap-1.5">
                    <Linkedin className="h-3.5 w-3.5" />
                    <span>LinkedIn</span>
                  </Button>
                </div>
              </div>
            </div>
            
            {/* Stats Cards */}
            <div className="col-span-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="glass-card p-4 rounded-xl animate-fade-in" style={{ animationDelay: "50ms" }}>
                <div className="flex items-start justify-between mb-2">
                  <p className="text-sm text-muted-foreground">Problems Solved</p>
                  <div className="h-8 w-8 rounded-md bg-primary/10 flex items-center justify-center text-primary">
                    <Code className="h-4 w-4" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold">142</h3>
                <div className="mt-2 flex items-center gap-1 text-xs text-green-500">
                  <span>+12</span>
                  <span className="text-muted-foreground">this month</span>
                </div>
              </div>
              
              <div className="glass-card p-4 rounded-xl animate-fade-in" style={{ animationDelay: "100ms" }}>
                <div className="flex items-start justify-between mb-2">
                  <p className="text-sm text-muted-foreground">Current Streak</p>
                  <div className="h-8 w-8 rounded-md bg-primary/10 flex items-center justify-center text-primary">
                    <Flame className="h-4 w-4" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold">18 days</h3>
                <div className="mt-2 flex items-center gap-1 text-xs text-green-500">
                  <span>Best: 21 days</span>
                </div>
              </div>
              
              <div className="glass-card p-4 rounded-xl animate-fade-in" style={{ animationDelay: "150ms" }}>
                <div className="flex items-start justify-between mb-2">
                  <p className="text-sm text-muted-foreground">Leaderboard</p>
                  <div className="h-8 w-8 rounded-md bg-primary/10 flex items-center justify-center text-primary">
                    <Trophy className="h-4 w-4" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold">#16</h3>
                <div className="mt-2 flex items-center gap-1 text-xs text-green-500">
                  <span>+5</span>
                  <span className="text-muted-foreground">positions</span>
                </div>
              </div>
              
              <div className="glass-card p-4 rounded-xl animate-fade-in" style={{ animationDelay: "200ms" }}>
                <div className="flex items-start justify-between mb-2">
                  <p className="text-sm text-muted-foreground">Total Points</p>
                  <div className="h-8 w-8 rounded-md bg-primary/10 flex items-center justify-center text-primary">
                    <Star className="h-4 w-4" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold">3,250</h3>
                <div className="mt-2 flex items-center gap-1 text-xs text-green-500">
                  <span>+450</span>
                  <span className="text-muted-foreground">this month</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
            <div className="lg:col-span-2">
              <StreakChart />
            </div>
            
            <div className="glass-card rounded-xl p-6 animate-fade-in">
              <div className="flex items-center justify-between mb-5">
                <h3 className="text-lg font-semibold">Achievements</h3>
                <Button variant="ghost" size="sm" className="gap-1 text-muted-foreground">
                  <span>View All</span>
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
              
              <div className="space-y-4">
                {achievements.map((achievement) => (
                  <div 
                    key={achievement.id}
                    className={cn(
                      "flex items-start gap-3 p-3 rounded-lg transition-colors",
                      achievement.unlocked 
                        ? "bg-secondary/50" 
                        : "bg-muted/30 opacity-60"
                    )}
                  >
                    <div className={cn(
                      "h-10 w-10 rounded-md flex items-center justify-center",
                      achievement.unlocked
                        ? "bg-primary/10 text-primary"
                        : "bg-muted text-muted-foreground"
                    )}>
                      {achievement.icon}
                    </div>
                    
                    <div>
                      <h4 className="font-medium">{achievement.title}</h4>
                      <p className="text-xs text-muted-foreground mb-1">{achievement.description}</p>
                      <div className="text-xs flex items-center gap-1">
                        <CalendarDays className="h-3 w-3 text-muted-foreground" />
                        <span className={cn(
                          achievement.unlocked ? "text-muted-foreground" : "text-muted-foreground/60"
                        )}>
                          {achievement.date}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="glass-card rounded-xl overflow-hidden animate-fade-in mb-6">
            <div className="p-6 border-b border-border">
              <div className="flex items-center justify-between mb-1">
                <h3 className="text-lg font-semibold">Recent Submissions</h3>
                <Button variant="ghost" size="sm" className="gap-1 text-muted-foreground">
                  <span>View All</span>
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
              <p className="text-sm text-muted-foreground">View your recent coding challenge submissions</p>
            </div>
            
            <div className="divide-y divide-border">
              {challenges.map((challenge) => {
                const difficultyColor = {
                  "Easy": "text-green-500 bg-green-500/10",
                  "Medium": "text-yellow-500 bg-yellow-500/10",
                  "Hard": "text-red-500 bg-red-500/10"
                }[challenge.difficulty];
                
                return (
                  <div key={challenge.id} className="p-4 transition-colors hover:bg-muted/20">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <h4 className="font-medium">{challenge.title}</h4>
                          <div className={cn("text-xs px-2 py-0.5 rounded-full", difficultyColor)}>
                            {challenge.difficulty}
                          </div>
                        </div>
                        
                        <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <CalendarDays className="h-3 w-3" />
                            <span>{challenge.date}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Code className="h-3 w-3" />
                            <span>{challenge.language}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <CheckCircle2 className="h-3 w-3 text-green-500" />
                            <span className="text-green-500">{challenge.status}</span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-2">
                        <Button variant="outline" size="sm">View Solution</Button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Profile;
