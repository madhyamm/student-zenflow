import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Play, Headphones, FileText, Clock, Star } from "lucide-react";

const ResourcesSection = () => {
  const resources = [
    {
      id: 1,
      title: "5-Minute Breathing Exercise",
      description: "Quick stress relief technique for exam anxiety",
      type: "Exercise",
      duration: "5 min",
      rating: 4.8,
      category: "stress",
      icon: Play,
      color: "bg-wellness-calm"
    },
    {
      id: 2,
      title: "Understanding Academic Pressure",
      description: "CBT techniques for managing academic stress and perfectionism",
      type: "Article",
      duration: "8 min read",
      rating: 4.9,
      category: "academic",
      icon: FileText,
      color: "bg-wellness-energy"
    },
    {
      id: 3,
      title: "Sleep Better Tonight",
      description: "Guided meditation for better sleep and recovery",
      type: "Audio",
      duration: "15 min",
      rating: 4.7,
      category: "sleep",
      icon: Headphones,
      color: "bg-wellness-focus"
    },
    {
      id: 4,
      title: "Building Healthy Habits",
      description: "Small daily practices that improve mental wellbeing",
      type: "Guide",
      duration: "12 min read",
      rating: 4.6,
      category: "habits",
      icon: BookOpen,
      color: "bg-wellness-balance"
    }
  ];

  const categories = [
    { id: 'stress', label: 'Stress Relief', count: 24 },
    { id: 'academic', label: 'Academic Support', count: 18 },
    { id: 'sleep', label: 'Sleep & Rest', count: 15 },
    { id: 'habits', label: 'Healthy Habits', count: 21 },
    { id: 'relationships', label: 'Relationships', count: 12 },
  ];

  return (
    <Card className="shadow-wellness border-border/50">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <BookOpen className="h-6 w-6 text-primary" />
            <div>
              <CardTitle className="text-2xl">Wellness Resources</CardTitle>
              <CardDescription>
                Curated content to help you navigate student life challenges
              </CardDescription>
            </div>
          </div>
          <Button variant="outline" className="hover:bg-wellness-calm">
            Browse All
          </Button>
        </div>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Categories */}
        <div className="flex flex-wrap gap-3">
          {categories.map((category) => (
            <Badge 
              key={category.id} 
              variant="secondary" 
              className="hover:bg-primary hover:text-primary-foreground cursor-pointer transition-colors px-3 py-1"
            >
              {category.label} ({category.count})
            </Badge>
          ))}
        </div>

        {/* Featured Resources */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {resources.map((resource) => {
            const IconComponent = resource.icon;
            return (
              <div 
                key={resource.id}
                className="border border-border/30 rounded-xl p-4 hover:border-primary/50 hover:shadow-soft transition-all duration-200 cursor-pointer group"
              >
                <div className="flex items-start space-x-4">
                  <div className={`w-12 h-12 rounded-lg ${resource.color} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                    <IconComponent className="h-6 w-6 text-foreground" />
                  </div>
                  <div className="flex-1 space-y-2">
                    <div className="flex items-start justify-between">
                      <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                        {resource.title}
                      </h4>
                      <Badge variant="outline" className="text-xs">
                        {resource.type}
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground line-clamp-2">
                      {resource.description}
                    </p>
                    <div className="flex items-center justify-between text-xs text-muted-foreground">
                      <div className="flex items-center space-x-1">
                        <Clock className="h-3 w-3" />
                        <span>{resource.duration}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Star className="h-3 w-3 fill-warning text-warning" />
                        <span>{resource.rating}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Quick Tools */}
        <div className="border-t border-border/50 pt-6">
          <h4 className="font-semibold mb-4">Quick Relief Tools</h4>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            <Button 
              variant="outline" 
              className="h-auto p-4 hover:bg-wellness-calm flex-col space-y-2"
            >
              <Play className="h-5 w-5" />
              <span className="text-sm">4-7-8 Breathing</span>
            </Button>
            <Button 
              variant="outline" 
              className="h-auto p-4 hover:bg-wellness-energy flex-col space-y-2"
            >
              <Headphones className="h-5 w-5" />
              <span className="text-sm">Focus Sounds</span>
            </Button>
            <Button 
              variant="outline" 
              className="h-auto p-4 hover:bg-wellness-focus flex-col space-y-2"
            >
              <FileText className="h-5 w-5" />
              <span className="text-sm">Mood Journal</span>
            </Button>
            <Button 
              variant="outline" 
              className="h-auto p-4 hover:bg-wellness-balance flex-col space-y-2"
            >
              <BookOpen className="h-5 w-5" />
              <span className="text-sm">Affirmations</span>
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ResourcesSection;