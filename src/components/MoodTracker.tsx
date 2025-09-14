import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Smile, Meh, Frown, Heart, Brain, Sun, Moon } from "lucide-react";

const MoodTracker = () => {
  const [selectedMood, setSelectedMood] = useState<string | null>(null);
  const [todayLogged, setTodayLogged] = useState(false);

  const moodOptions = [
    { id: 'great', label: 'Great', icon: Smile, color: 'bg-success text-success-foreground', description: 'Feeling wonderful!' },
    { id: 'good', label: 'Good', icon: Sun, color: 'bg-wellness-energy text-foreground', description: 'Pretty positive' },
    { id: 'okay', label: 'Okay', icon: Meh, color: 'bg-wellness-balance text-foreground', description: 'Just getting by' },
    { id: 'down', label: 'Down', icon: Moon, color: 'bg-wellness-focus text-foreground', description: 'Feeling low' },
    { id: 'stressed', label: 'Stressed', icon: Frown, color: 'bg-warning text-warning-foreground', description: 'Overwhelmed' },
  ];

  const recentMoods = [
    { date: 'Today', mood: selectedMood || 'Not logged', color: selectedMood ? moodOptions.find(m => m.id === selectedMood)?.color : 'bg-muted text-muted-foreground' },
    { date: 'Yesterday', mood: 'Good', color: 'bg-wellness-energy text-foreground' },
    { date: '2 days ago', mood: 'Okay', color: 'bg-wellness-balance text-foreground' },
    { date: '3 days ago', mood: 'Great', color: 'bg-success text-success-foreground' },
    { date: '4 days ago', mood: 'Down', color: 'bg-wellness-focus text-foreground' },
  ];

  const handleMoodSelect = (moodId: string) => {
    setSelectedMood(moodId);
  };

  const handleSaveMood = () => {
    if (selectedMood) {
      setTodayLogged(true);
      // Here you would typically save to a backend or local storage
    }
  };

  return (
    <Card className="shadow-wellness border-border/50">
      <CardHeader>
        <div className="flex items-center space-x-3">
          <Heart className="h-6 w-6 text-primary" />
          <div>
            <CardTitle className="text-2xl">Daily Mood Check-in</CardTitle>
            <CardDescription>
              How are you feeling right now? Tracking your mood helps identify patterns and triggers.
            </CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-6">
        {!todayLogged ? (
          <>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {moodOptions.map((mood) => {
                const IconComponent = mood.icon;
                const isSelected = selectedMood === mood.id;
                return (
                  <button
                    key={mood.id}
                    onClick={() => handleMoodSelect(mood.id)}
                    className={`p-4 rounded-xl border-2 transition-all duration-200 hover:scale-105 ${
                      isSelected 
                        ? 'border-primary shadow-wellness' 
                        : 'border-border/30 hover:border-primary/50'
                    }`}
                  >
                    <div className="text-center space-y-2">
                      <div className={`w-12 h-12 rounded-full ${mood.color} flex items-center justify-center mx-auto`}>
                        <IconComponent className="h-6 w-6" />
                      </div>
                      <div>
                        <p className="font-medium text-sm">{mood.label}</p>
                        <p className="text-xs text-muted-foreground">{mood.description}</p>
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>

            {selectedMood && (
              <div className="bg-wellness-calm/50 p-4 rounded-xl border border-primary/20">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Selected mood: {moodOptions.find(m => m.id === selectedMood)?.label}</p>
                    <p className="text-sm text-muted-foreground">Ready to log this mood?</p>
                  </div>
                  <Button onClick={handleSaveMood} className="bg-gradient-primary hover:opacity-90">
                    Save Mood
                  </Button>
                </div>
              </div>
            )}
          </>
        ) : (
          <div className="bg-gradient-wellness p-6 rounded-xl text-center space-y-4">
            <div className="flex items-center justify-center space-x-2">
              <Heart className="h-6 w-6 text-success" />
              <p className="text-lg font-medium">Mood logged for today! 🎉</p>
            </div>
            <p className="text-muted-foreground">
              Great job taking care of your mental health. Come back tomorrow for another check-in.
            </p>
          </div>
        )}

        <div className="border-t border-border/50 pt-6">
          <div className="flex items-center justify-between mb-4">
            <h4 className="font-semibold flex items-center space-x-2">
              <Brain className="h-4 w-4" />
              <span>Recent Mood History</span>
            </h4>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
            {recentMoods.map((entry, index) => (
              <div key={index} className="text-center space-y-2">
                <p className="text-xs text-muted-foreground">{entry.date}</p>
                <Badge className={`${entry.color} text-xs px-2 py-1`}>
                  {entry.mood}
                </Badge>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default MoodTracker;