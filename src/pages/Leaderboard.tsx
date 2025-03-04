
import { useState } from "react";
import { Sidebar } from "@/components/layout/Sidebar";
import { Header } from "@/components/layout/Header";
import { 
  ArrowDown,
  ArrowUp,
  ChevronLeft,
  ChevronRight,
  Clock,
  Crown,
  Flame,
  Medal,
  Search,
  Trophy,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type LeaderboardEntry = {
  rank: number;
  previousRank: number;
  username: string;
  fullName: string;
  avatar: string;
  problemsSolved: number;
  streak: number;
  points: number;
  isCurrentUser?: boolean;
};

const mockLeaderboardData: LeaderboardEntry[] = [
  { 
    rank: 1, 
    previousRank: 1, 
    username: "codingmaster", 
    fullName: "Alex Johnson", 
    avatar: "AJ",
    problemsSolved: 423, 
    streak: 86, 
    points: 12840 
  },
  { 
    rank: 2, 
    previousRank: 3, 
    username: "devguru", 
    fullName: "Sarah Chen", 
    avatar: "SC",
    problemsSolved: 398, 
    streak: 45, 
    points: 10750 
  },
  { 
    rank: 3, 
    previousRank: 2, 
    username: "algorithmace", 
    fullName: "Michael Smith", 
    avatar: "MS",
    problemsSolved: 387, 
    streak: 39, 
    points: 9980 
  },
  { 
    rank: 4, 
    previousRank: 5, 
    username: "bytebender", 
    fullName: "Jessica Williams", 
    avatar: "JW",
    problemsSolved: 352, 
    streak: 28, 
    points: 8760 
  },
  { 
    rank: 5, 
    previousRank: 4, 
    username: "codewarrior", 
    fullName: "David Miller", 
    avatar: "DM",
    problemsSolved: 341, 
    streak: 63, 
    points: 8490 
  },
  { 
    rank: 6, 
    previousRank: 6, 
    username: "logicninja", 
    fullName: "Emma Thompson", 
    avatar: "ET",
    problemsSolved: 326, 
    streak: 12, 
    points: 7890 
  },
  { 
    rank: 7, 
    previousRank: 9, 
    username: "pythonista", 
    fullName: "Thomas Brown", 
    avatar: "TB",
    problemsSolved: 315, 
    streak: 27, 
    points: 7560 
  },
  { 
    rank: 8, 
    previousRank: 8, 
    username: "bugslayer", 
    fullName: "Rachel Garcia", 
    avatar: "RG",
    problemsSolved: 302, 
    streak: 19, 
    points: 7210 
  },
  { 
    rank: 9, 
    previousRank: 7, 
    username: "frontendwiz", 
    fullName: "Daniel Martinez", 
    avatar: "DM",
    problemsSolved: 289, 
    streak: 31, 
    points: 6980 
  },
  { 
    rank: 10, 
    previousRank: 11, 
    username: "reactrocket", 
    fullName: "Olivia Wilson", 
    avatar: "OW",
    problemsSolved: 275, 
    streak: 24, 
    points: 6540 
  },
  { 
    rank: 16, 
    previousRank: 21, 
    username: "js_dev", 
    fullName: "John Smith", 
    avatar: "JS",
    problemsSolved: 142, 
    streak: 18, 
    points: 3250,
    isCurrentUser: true
  },
];

const getTopThree = (data: LeaderboardEntry[]) => {
  return data.filter(entry => entry.rank <= 3).sort((a, b) => a.rank - b.rank);
};

const getOthers = (data: LeaderboardEntry[]) => {
  return data.filter(entry => entry.rank > 3);
};

const getRankChange = (current: number, previous: number) => {
  const diff = previous - current;
  
  if (diff > 0) {
    return { type: 'increase', value: diff };
  } else if (diff < 0) {
    return { type: 'decrease', value: Math.abs(diff) };
  } else {
    return { type: 'same', value: 0 };
  }
};

const Leaderboard = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [timeFrame, setTimeFrame] = useState<'weekly' | 'monthly' | 'allTime'>('weekly');
  
  const topThree = getTopThree(mockLeaderboardData);
  const otherUsers = getOthers(mockLeaderboardData);
  const currentUser = mockLeaderboardData.find(user => user.isCurrentUser);
  
  const filteredUsers = otherUsers.filter(user => 
    user.username.toLowerCase().includes(searchQuery.toLowerCase()) ||
    user.fullName.toLowerCase().includes(searchQuery.toLowerCase())
  );
  
  const getTimeFrameLabel = () => {
    switch(timeFrame) {
      case 'weekly': return 'This Week';
      case 'monthly': return 'This Month';
      case 'allTime': return 'All Time';
    }
  };
  
  return (
    <div className="min-h-screen w-full bg-background">
      <Sidebar />
      
      <div className="ml-[250px] transition-all duration-300">
        <Header />
        
        <main className="p-6">
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-6">Leaderboard</h2>
            
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
              <div className="flex items-center gap-3">
                <Button 
                  variant={timeFrame === 'weekly' ? "default" : "outline"} 
                  onClick={() => setTimeFrame('weekly')}
                >
                  Weekly
                </Button>
                <Button 
                  variant={timeFrame === 'monthly' ? "default" : "outline"} 
                  onClick={() => setTimeFrame('monthly')}
                >
                  Monthly
                </Button>
                <Button 
                  variant={timeFrame === 'allTime' ? "default" : "outline"} 
                  onClick={() => setTimeFrame('allTime')}
                >
                  All Time
                </Button>
              </div>
              
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <input 
                  type="text" 
                  placeholder="Search users..."
                  className="w-full md:w-64 h-10 pl-10 pr-4 rounded-md border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>
            
            {/* Top 3 Podium */}
            <div className="mb-12 flex flex-col items-center">
              <h3 className="text-lg font-semibold mb-6">{getTimeFrameLabel()} Champions</h3>
              
              <div className="flex flex-wrap justify-center items-end gap-6 md:gap-12">
                {topThree.map((entry) => {
                  const isFirst = entry.rank === 1;
                  const isSecond = entry.rank === 2;
                  const isThird = entry.rank === 3;
                  
                  const podiumHeight = isFirst ? 'h-32' : isSecond ? 'h-24' : 'h-20';
                  const trophyColor = isFirst ? 'text-yellow-500' : isSecond ? 'text-slate-400' : 'text-amber-700';
                  
                  return (
                    <div key={entry.username} className="flex flex-col items-center">
                      <div className="mb-3">
                        {isFirst && <Crown className="h-5 w-5 text-yellow-500 mb-1 mx-auto" />}
                        <div className={cn(
                          "h-16 w-16 rounded-full flex items-center justify-center",
                          "border-2 border-primary bg-primary/10"
                        )}>
                          <span className="text-lg font-semibold">{entry.avatar}</span>
                        </div>
                        <div className="text-center mt-3">
                          <p className="font-semibold">{entry.username}</p>
                          <p className="text-xs text-muted-foreground">{entry.fullName}</p>
                        </div>
                        <div className="mt-1 flex items-center justify-center gap-1">
                          <Trophy className={cn("h-4 w-4", trophyColor)} />
                          <span className="text-sm font-medium">{entry.points.toLocaleString()} pts</span>
                        </div>
                      </div>
                      
                      <div className={cn(
                        "w-24 rounded-t-lg flex items-center justify-center bg-primary",
                        podiumHeight
                      )}>
                        <span className="text-white font-bold text-xl">#{entry.rank}</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            
            {/* Leaderboard Table */}
            <div className="glass-card rounded-xl overflow-hidden animate-fade-in mb-6">
              <div className="grid grid-cols-12 gap-2 p-4 bg-secondary font-medium text-sm">
                <div className="col-span-1 text-center">Rank</div>
                <div className="col-span-4 md:col-span-3">User</div>
                <div className="col-span-2 text-center">Problems</div>
                <div className="col-span-2 text-center hidden md:block">Streak</div>
                <div className="col-span-3 md:col-span-2 text-center">Points</div>
                <div className="col-span-2 text-right"></div>
              </div>
              
              <div className="divide-y divide-border">
                {filteredUsers.map((entry) => {
                  const rankChange = getRankChange(entry.rank, entry.previousRank);
                  
                  return (
                    <div 
                      key={entry.username}
                      className={cn(
                        "grid grid-cols-12 gap-2 p-4 items-center transition-colors",
                        entry.isCurrentUser ? "bg-primary/5 border-l-4 border-primary" : "hover:bg-muted/30"
                      )}
                    >
                      <div className="col-span-1 text-center flex flex-col items-center">
                        <span className="font-semibold">{entry.rank}</span>
                        <div className="flex items-center mt-1">
                          {rankChange.type === 'increase' && (
                            <div className="flex items-center text-green-500 text-xs">
                              <ArrowUp className="h-3 w-3 mr-0.5" />
                              <span>{rankChange.value}</span>
                            </div>
                          )}
                          {rankChange.type === 'decrease' && (
                            <div className="flex items-center text-red-500 text-xs">
                              <ArrowDown className="h-3 w-3 mr-0.5" />
                              <span>{rankChange.value}</span>
                            </div>
                          )}
                          {rankChange.type === 'same' && (
                            <div className="text-muted-foreground text-xs">-</div>
                          )}
                        </div>
                      </div>
                      
                      <div className="col-span-4 md:col-span-3 flex items-center gap-3">
                        <div className="h-9 w-9 rounded-full bg-secondary flex items-center justify-center">
                          <span className="font-medium text-sm">{entry.avatar}</span>
                        </div>
                        <div>
                          <p className="font-medium text-sm">{entry.username}</p>
                          <p className="text-xs text-muted-foreground hidden md:block">{entry.fullName}</p>
                        </div>
                      </div>
                      
                      <div className="col-span-2 text-center flex flex-col items-center">
                        <span className="font-medium">{entry.problemsSolved}</span>
                        <span className="text-xs text-muted-foreground">solved</span>
                      </div>
                      
                      <div className="col-span-2 text-center hidden md:flex flex-col items-center">
                        <div className="flex items-center">
                          <Flame className="h-3.5 w-3.5 text-primary mr-1" />
                          <span className="font-medium">{entry.streak}</span>
                        </div>
                        <span className="text-xs text-muted-foreground">days</span>
                      </div>
                      
                      <div className="col-span-3 md:col-span-2 text-center">
                        <span className="font-semibold">{entry.points.toLocaleString()}</span>
                        <span className="text-xs text-muted-foreground ml-1">pts</span>
                      </div>
                      
                      <div className="col-span-2 flex justify-end">
                        <Button variant="ghost" size="sm" className="h-8">
                          View Profile
                        </Button>
                      </div>
                    </div>
                  );
                })}
                
                {filteredUsers.length === 0 && (
                  <div className="p-8 text-center">
                    <p className="text-muted-foreground">No users found. Try adjusting your search.</p>
                  </div>
                )}
              </div>
              
              <div className="p-3 border-t border-border flex items-center justify-between bg-secondary/50">
                <Button variant="ghost" size="sm" className="gap-1">
                  <ChevronLeft className="h-4 w-4" />
                  <span>Previous</span>
                </Button>
                
                <div className="text-sm">
                  Page <span className="font-medium">1</span> of <span className="font-medium">5</span>
                </div>
                
                <Button variant="ghost" size="sm" className="gap-1">
                  <span>Next</span>
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
            
            {/* Current User Stats */}
            {currentUser && (
              <div className="glass-card rounded-xl p-5 animate-fade-in border-l-4 border-primary">
                <h3 className="text-sm font-medium mb-3">Your Position</h3>
                
                <div className="grid grid-cols-12 gap-2 items-center">
                  <div className="col-span-1 text-center">
                    <span className="font-bold text-lg">{currentUser.rank}</span>
                  </div>
                  
                  <div className="col-span-4 md:col-span-3 flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-primary/10 border-2 border-primary flex items-center justify-center">
                      <span className="font-medium">{currentUser.avatar}</span>
                    </div>
                    <div>
                      <p className="font-semibold">{currentUser.username}</p>
                      <p className="text-xs text-muted-foreground">{currentUser.fullName}</p>
                    </div>
                  </div>
                  
                  <div className="col-span-7 md:col-span-8">
                    <div className="grid grid-cols-3 gap-4">
                      <div className="text-center p-2 rounded-lg bg-secondary">
                        <p className="text-xs text-muted-foreground mb-1">Problems Solved</p>
                        <p className="font-semibold">{currentUser.problemsSolved}</p>
                      </div>
                      
                      <div className="text-center p-2 rounded-lg bg-secondary">
                        <p className="text-xs text-muted-foreground mb-1">Current Streak</p>
                        <div className="flex items-center justify-center">
                          <Flame className="h-4 w-4 text-primary mr-1" />
                          <span className="font-semibold">{currentUser.streak} days</span>
                        </div>
                      </div>
                      
                      <div className="text-center p-2 rounded-lg bg-secondary">
                        <p className="text-xs text-muted-foreground mb-1">Total Points</p>
                        <p className="font-semibold">{currentUser.points.toLocaleString()}</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-4 pt-3 border-t border-border flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-sm">Points to next rank:</span>
                    <span className="font-medium">310</span>
                  </div>
                  
                  <Button size="sm">View Your Stats</Button>
                </div>
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Leaderboard;
