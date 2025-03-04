
import { useState, useEffect } from 'react';
import { 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  TooltipProps
} from 'recharts';
import { format, subDays } from 'date-fns';
import { cn } from "@/lib/utils";

const generateMockData = () => {
  const data = [];
  const now = new Date();
  
  for (let i = 30; i >= 0; i--) {
    const date = subDays(now, i);
    const problems = Math.floor(Math.random() * 8) + 1;
    
    data.push({
      date: format(date, 'MMM dd'),
      fullDate: date,
      problems,
      completed: Math.random() > 0.2,
    });
  }
  
  return data;
};

const CustomTooltip = ({ active, payload, label }: TooltipProps<number, string>) => {
  if (active && payload && payload.length) {
    return (
      <div className="glass-card p-3 rounded-lg border border-border shadow-md">
        <p className="text-sm font-medium">{label}</p>
        <p className="text-sm text-primary font-semibold">
          {`${payload[0].value} Problems`}
        </p>
      </div>
    );
  }

  return null;
};

export const StreakChart = () => {
  const [chartData, setChartData] = useState<any[]>([]);
  const [currentStreak, setCurrentStreak] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const data = generateMockData();
    setChartData(data);
    
    // Calculate current streak
    let streak = 0;
    for (let i = data.length - 1; i >= 0; i--) {
      if (data[i].completed) {
        streak++;
      } else {
        break;
      }
    }
    setCurrentStreak(streak);
    
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="glass-card rounded-xl p-6 animate-fade-in">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4 gap-2">
        <div>
          <h3 className="text-lg font-semibold">Daily Problem Streak</h3>
          <p className="text-sm text-muted-foreground">Your coding consistency over time</p>
        </div>
        <div className="flex items-center gap-2 px-3 py-1.5 bg-primary/10 rounded-lg text-primary">
          <span className="text-xs font-medium">Current Streak:</span>
          <span className="text-lg font-bold">{currentStreak} days</span>
        </div>
      </div>
      
      <div className="h-[300px] w-full mt-4">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={chartData}
            margin={{ top: 10, right: 10, left: 0, bottom: 20 }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(0,0,0,0.05)" />
            <XAxis 
              dataKey="date" 
              tick={{ fontSize: 12 }} 
              tickLine={false}
              axisLine={{ stroke: 'rgba(0,0,0,0.1)' }}
            />
            <YAxis 
              allowDecimals={false}
              tick={{ fontSize: 12 }} 
              tickLine={false}
              axisLine={{ stroke: 'rgba(0,0,0,0.1)' }}
              domain={[0, 'dataMax + 1']}
            />
            <Tooltip content={<CustomTooltip />} />
            <Line
              type="monotone"
              dataKey="problems"
              stroke="hsl(var(--primary))"
              strokeWidth={2}
              dot={(props) => {
                const { cx, cy, payload } = props;
                const completed = payload.completed;
                
                return (
                  <circle 
                    cx={cx} 
                    cy={cy} 
                    r={4} 
                    fill={completed ? "hsl(var(--primary))" : "white"} 
                    stroke="hsl(var(--primary))" 
                    strokeWidth={2}
                  />
                );
              }}
              activeDot={{ r: 6, fill: "hsl(var(--primary))" }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
      
      <div className="mt-6">
        <h4 className="text-sm font-medium mb-3">Last 7 Days</h4>
        <div className="flex justify-between">
          {chartData.slice(-7).map((day, index) => (
            <div key={index} className="flex flex-col items-center">
              <div 
                className={cn(
                  "h-3 w-3 rounded-full mb-2",
                  day.completed ? "bg-primary" : "bg-muted-foreground/20"
                )}
              />
              <span className="text-xs text-muted-foreground">{format(day.fullDate, 'EEE')}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
