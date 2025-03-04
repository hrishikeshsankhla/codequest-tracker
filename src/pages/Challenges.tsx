
import { useState } from "react";
import { Sidebar } from "@/components/layout/Sidebar";
import { Header } from "@/components/layout/Header";
import { ChallengeCard } from "@/components/dashboard/ChallengeCard";
import { 
  ChevronDown,
  Filter,
  Search
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type Difficulty = "All" | "Easy" | "Medium" | "Hard";
type Category = "All" | "Arrays" | "Strings" | "Trees" | "Dynamic Programming" | "Graphs";

const challenges = [
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
  {
    title: "Binary Tree Level Order Traversal",
    difficulty: "Medium" as const,
    category: "Trees & Graphs",
    timeEstimate: "20-30 min",
    description: "Given the root of a binary tree, return the level order traversal of its nodes' values (i.e., from left to right, level by level).",
  },
  {
    title: "Longest Substring Without Repeating Characters",
    difficulty: "Medium" as const,
    category: "Strings",
    timeEstimate: "15-20 min",
    description: "Given a string s, find the length of the longest substring without repeating characters.",
  },
  {
    title: "Maximum Subarray",
    difficulty: "Easy" as const,
    category: "Arrays & Hashing",
    timeEstimate: "10-15 min",
    description: "Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.",
  },
  {
    title: "Climbing Stairs",
    difficulty: "Easy" as const,
    category: "Dynamic Programming",
    timeEstimate: "5-10 min",
    description: "You are climbing a staircase. It takes n steps to reach the top. Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?",
  },
  {
    title: "Word Break",
    difficulty: "Medium" as const,
    category: "Dynamic Programming",
    timeEstimate: "20-30 min",
    description: "Given a string s and a dictionary of strings wordDict, return true if s can be segmented into a space-separated sequence of one or more dictionary words.",
  },
  {
    title: "Trapping Rain Water",
    difficulty: "Hard" as const,
    category: "Arrays & Hashing",
    timeEstimate: "25-35 min",
    description: "Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.",
  },
];

const Challenges = () => {
  const [selectedDifficulty, setSelectedDifficulty] = useState<Difficulty>("All");
  const [selectedCategory, setSelectedCategory] = useState<Category>("All");
  const [searchQuery, setSearchQuery] = useState("");
  
  const filteredChallenges = challenges.filter(challenge => {
    const matchesDifficulty = selectedDifficulty === "All" || challenge.difficulty === selectedDifficulty;
    const matchesCategory = selectedCategory === "All" || challenge.category.includes(selectedCategory);
    const matchesSearch = challenge.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          challenge.description.toLowerCase().includes(searchQuery.toLowerCase());
    
    return matchesDifficulty && matchesCategory && matchesSearch;
  });
  
  const DifficultyButton = ({ difficulty }: { difficulty: Difficulty }) => (
    <button
      onClick={() => setSelectedDifficulty(difficulty)}
      className={cn(
        "px-4 py-2 text-sm font-medium rounded-md transition-all",
        selectedDifficulty === difficulty 
          ? "bg-primary text-primary-foreground" 
          : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
      )}
    >
      {difficulty}
    </button>
  );
  
  return (
    <div className="min-h-screen w-full bg-background">
      <Sidebar />
      
      <div className="ml-[250px] transition-all duration-300">
        <Header />
        
        <main className="p-6">
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-6">Coding Challenges</h2>
            
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
              <div className="flex flex-wrap gap-2">
                <DifficultyButton difficulty="All" />
                <DifficultyButton difficulty="Easy" />
                <DifficultyButton difficulty="Medium" />
                <DifficultyButton difficulty="Hard" />
              </div>
              
              <div className="flex gap-3">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <input 
                    type="text" 
                    placeholder="Search challenges..."
                    className="w-full md:w-64 h-10 pl-10 pr-4 rounded-md border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
                
                <Button variant="outline" size="icon" className="h-10 w-10">
                  <Filter className="h-4 w-4" />
                </Button>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredChallenges.map((challenge, index) => (
                <ChallengeCard 
                  key={challenge.title} 
                  challenge={challenge} 
                  className="animate-fade-in"
                  style={{ animationDelay: `${index * 50}ms` } as React.CSSProperties}
                />
              ))}
              
              {filteredChallenges.length === 0 && (
                <div className="col-span-full py-12 text-center">
                  <p className="text-muted-foreground">No challenges match your filters. Try adjusting your search criteria.</p>
                </div>
              )}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Challenges;
