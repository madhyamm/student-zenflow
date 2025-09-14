import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Brain, Heart, Users, Shield, MessageCircle, Calendar, BookOpen } from "lucide-react";
import heroImage from "@/assets/hero-wellness.jpg";
import MoodTracker from "@/components/MoodTracker";
import ResourcesSection from "@/components/ResourcesSection";
import SupportOptions from "@/components/SupportOptions";

const Index = () => {
  const [currentView, setCurrentView] = useState<'home' | 'dashboard'>('home');

  if (currentView === 'dashboard') {
    return (
      <div className="min-h-screen bg-gradient-calm">
        <header className="bg-card/80 backdrop-blur-sm border-b border-border/50 sticky top-0 z-50">
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Brain className="h-8 w-8 text-primary" />
                <h1 className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                  MindSpace
                </h1>
              </div>
              <Button 
                variant="outline" 
                onClick={() => setCurrentView('home')}
                className="hover:bg-wellness-calm"
              >
                Back to Home
              </Button>
            </div>
          </div>
        </header>

        <main className="container mx-auto px-4 py-8">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-foreground mb-2">Welcome back, Student</h2>
            <p className="text-muted-foreground">How are you feeling today?</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
              <MoodTracker />
              <ResourcesSection />
            </div>
            <div className="space-y-6">
              <SupportOptions />
            </div>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-calm">
      {/* Header */}
      <header className="bg-card/80 backdrop-blur-sm border-b border-border/50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Brain className="h-8 w-8 text-primary" />
              <h1 className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                MindSpace
              </h1>
            </div>
            <Button 
              onClick={() => setCurrentView('dashboard')}
              className="bg-gradient-primary hover:opacity-90 shadow-wellness"
            >
              Enter Platform
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fade-in">
              <div className="space-y-4">
                <h2 className="text-5xl font-bold text-foreground leading-tight">
                  Your Mental Health
                  <span className="block bg-gradient-primary bg-clip-text text-transparent">
                    Journey Starts Here
                  </span>
                </h2>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  A safe, confidential digital platform designed specifically for students. 
                  Access professional support, wellness tools, and peer communities 24/7.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg"
                  onClick={() => setCurrentView('dashboard')}
                  className="bg-gradient-primary hover:opacity-90 shadow-wellness text-lg px-8 py-3"
                >
                  Get Started Free
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  className="hover:bg-wellness-calm border-primary/20 text-lg px-8 py-3"
                >
                  Learn More
                </Button>
              </div>

              <div className="flex items-center space-x-6 text-sm text-muted-foreground">
                <div className="flex items-center space-x-2">
                  <Shield className="h-4 w-4 text-success" />
                  <span>100% Confidential</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Heart className="h-4 w-4 text-success" />
                  <span>Available 24/7</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Users className="h-4 w-4 text-success" />
                  <span>Peer Support</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <img 
                src={heroImage} 
                alt="Mental wellness and support illustration" 
                className="rounded-2xl shadow-elevated w-full animate-fade-in"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-card/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 space-y-4">
            <h3 className="text-4xl font-bold text-foreground">
              Comprehensive Mental Health Support
            </h3>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Everything you need to maintain and improve your mental wellbeing throughout your academic journey.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-border/50 shadow-soft hover:shadow-wellness transition-all duration-300 bg-wellness-calm/30">
              <CardHeader className="text-center">
                <MessageCircle className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle className="text-xl">24/7 AI Support</CardTitle>
                <CardDescription>
                  Immediate, empathetic responses to your concerns with our advanced AI companion.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-border/50 shadow-soft hover:shadow-wellness transition-all duration-300 bg-wellness-energy/30">
              <CardHeader className="text-center">
                <Heart className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle className="text-xl">Mood Tracking</CardTitle>
                <CardDescription>
                  Monitor your emotional patterns and discover insights about your mental health journey.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-border/50 shadow-soft hover:shadow-wellness transition-all duration-300 bg-wellness-focus/30">
              <CardHeader className="text-center">
                <Calendar className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle className="text-xl">Professional Counseling</CardTitle>
                <CardDescription>
                  Connect with licensed therapists and counselors who understand student life.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-border/50 shadow-soft hover:shadow-wellness transition-all duration-300 bg-wellness-balance/30">
              <CardHeader className="text-center">
                <BookOpen className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle className="text-xl">Self-Help Resources</CardTitle>
                <CardDescription>
                  Access guided meditations, CBT exercises, and wellness tools at your own pace.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-border/50 shadow-soft hover:shadow-wellness transition-all duration-300 bg-wellness-calm/30">
              <CardHeader className="text-center">
                <Users className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle className="text-xl">Peer Communities</CardTitle>
                <CardDescription>
                  Join safe, moderated spaces to connect with fellow students facing similar challenges.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-border/50 shadow-soft hover:shadow-wellness transition-all duration-300 bg-wellness-energy/30">
              <CardHeader className="text-center">
                <Shield className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle className="text-xl">Complete Privacy</CardTitle>
                <CardDescription>
                  Your data is encrypted and protected. Use anonymously or with full verification.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto space-y-8">
            <h3 className="text-4xl font-bold">
              Ready to Prioritize Your Mental Health?
            </h3>
            <p className="text-xl opacity-90">
              Join thousands of students who are already taking control of their wellbeing with MindSpace.
            </p>
            <Button 
              size="lg"
              variant="secondary"
              onClick={() => setCurrentView('dashboard')}
              className="text-lg px-8 py-3 shadow-elevated hover:scale-105 transition-transform"
            >
              Start Your Journey Today
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t border-border/50 py-12">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4">
            <div className="flex items-center justify-center space-x-2">
              <Brain className="h-6 w-6 text-primary" />
              <span className="text-lg font-semibold bg-gradient-primary bg-clip-text text-transparent">
                MindSpace
              </span>
            </div>
            <p className="text-muted-foreground">
              Supporting student mental health with compassion, technology, and evidence-based care.
            </p>
            <div className="text-sm text-muted-foreground">
              <p>© 2024 MindSpace. Confidential • Secure • Always Available</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;