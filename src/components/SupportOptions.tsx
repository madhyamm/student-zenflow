import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MessageCircle, Calendar, Users, Phone, Video, Clock, CheckCircle } from "lucide-react";

const SupportOptions = () => {
  const supportOptions = [
    {
      id: 'ai-chat',
      title: 'AI Support Chat',
      description: 'Immediate responses to your concerns',
      status: 'Available Now',
      icon: MessageCircle,
      color: 'bg-success text-success-foreground',
      action: 'Start Chat'
    },
    {
      id: 'counselor',
      title: 'Professional Counselor',
      description: 'Licensed therapists who understand student life',
      status: 'Next available: Tomorrow 2pm',
      icon: Calendar,
      color: 'bg-primary text-primary-foreground',
      action: 'Book Session'
    },
    {
      id: 'peer-support',
      title: 'Peer Support Group',
      description: 'Connect with students facing similar challenges',
      status: 'Group starts at 7pm',
      icon: Users,
      color: 'bg-wellness-focus text-foreground',
      action: 'Join Group'
    },
    {
      id: 'crisis',
      title: 'Crisis Support',
      description: '24/7 immediate help for urgent situations',
      status: 'Always Available',
      icon: Phone,
      color: 'bg-destructive text-destructive-foreground',
      action: 'Get Help Now'
    }
  ];

  const upcomingAppointments = [
    {
      id: 1,
      title: 'Check-in with Dr. Sarah',
      date: 'Tomorrow',
      time: '2:00 PM',
      type: 'Video Call',
      status: 'confirmed'
    },
    {
      id: 2,
      title: 'Anxiety Support Group',
      date: 'Friday',
      time: '7:00 PM',
      type: 'Group Session',
      status: 'confirmed'
    }
  ];

  return (
    <div className="space-y-6">
      {/* Get Support Card */}
      <Card className="shadow-wellness border-border/50">
        <CardHeader>
          <div className="flex items-center space-x-3">
            <MessageCircle className="h-6 w-6 text-primary" />
            <div>
              <CardTitle className="text-xl">Get Support</CardTitle>
              <CardDescription>
                Choose the type of support that feels right for you
              </CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          {supportOptions.map((option) => {
            const IconComponent = option.icon;
            return (
              <div 
                key={option.id}
                className="border border-border/30 rounded-lg p-4 hover:border-primary/50 hover:shadow-soft transition-all duration-200"
              >
                <div className="flex items-start justify-between">
                  <div className="flex space-x-3 flex-1">
                    <div className={`w-10 h-10 rounded-lg ${option.color} flex items-center justify-center flex-shrink-0`}>
                      <IconComponent className="h-5 w-5" />
                    </div>
                    <div className="space-y-1 flex-1">
                      <h4 className="font-medium text-foreground">{option.title}</h4>
                      <p className="text-sm text-muted-foreground">{option.description}</p>
                      <Badge variant="outline" className="text-xs">
                        {option.status}
                      </Badge>
                    </div>
                  </div>
                  <Button 
                    size="sm" 
                    variant={option.id === 'crisis' ? 'destructive' : 'outline'}
                    className="ml-3 flex-shrink-0"
                  >
                    {option.action}
                  </Button>
                </div>
              </div>
            );
          })}
        </CardContent>
      </Card>

      {/* Upcoming Appointments */}
      <Card className="shadow-wellness border-border/50">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Calendar className="h-6 w-6 text-primary" />
              <div>
                <CardTitle className="text-xl">Your Schedule</CardTitle>
                <CardDescription>
                  Upcoming appointments and sessions
                </CardDescription>
              </div>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          {upcomingAppointments.length > 0 ? (
            upcomingAppointments.map((appointment) => (
              <div 
                key={appointment.id}
                className="border border-border/30 rounded-lg p-4 bg-wellness-calm/20"
              >
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <h4 className="font-medium text-foreground">{appointment.title}</h4>
                    <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                      <div className="flex items-center space-x-1">
                        <Clock className="h-3 w-3" />
                        <span>{appointment.date} at {appointment.time}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Video className="h-3 w-3" />
                        <span>{appointment.type}</span>
                      </div>
                    </div>
                  </div>
                  <Badge className="bg-success text-success-foreground">
                    <CheckCircle className="h-3 w-3 mr-1" />
                    Confirmed
                  </Badge>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center py-8 text-muted-foreground">
              <Calendar className="h-12 w-12 mx-auto mb-4 opacity-50" />
              <p>No upcoming appointments</p>
              <Button variant="outline" className="mt-4 hover:bg-wellness-calm">
                Schedule a Session
              </Button>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Emergency Resources */}
      <Card className="shadow-wellness border-destructive/20 bg-destructive/5">
        <CardHeader>
          <div className="flex items-center space-x-3">
            <Phone className="h-6 w-6 text-destructive" />
            <div>
              <CardTitle className="text-xl text-destructive">Crisis Resources</CardTitle>
              <CardDescription>
                If you're in immediate danger, call emergency services
              </CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="font-medium">National Suicide Prevention Lifeline</span>
              <span className="text-destructive font-mono">988</span>
            </div>
            <div className="flex justify-between">
              <span className="font-medium">Crisis Text Line</span>
              <span className="text-destructive font-mono">Text HOME to 741741</span>
            </div>
            <div className="flex justify-between">
              <span className="font-medium">Emergency Services</span>
              <span className="text-destructive font-mono">911</span>
            </div>
          </div>
          <Button variant="destructive" className="w-full">
            <Phone className="h-4 w-4 mr-2" />
            Access Crisis Support
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default SupportOptions;