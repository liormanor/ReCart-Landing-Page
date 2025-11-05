import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight, Mail } from "lucide-react";

const CallToAction = () => {
  return (
    <section className="py-20 sm:py-32 relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-teal-600 to-primary" />
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjA1IiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30" />
      
      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8">
          {/* Badge */}
          <div className="inline-block">
            <span className="px-4 py-2 bg-white/20 backdrop-blur-sm text-white rounded-full text-sm font-semibold">
              Join the Movement
            </span>
          </div>
          
          {/* Heading */}
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight max-w-4xl mx-auto">
            Ready to Transform Your Shopping Experience?
          </h2>
          
          {/* Description */}
          <p className="text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
            Be among the first to experience sustainable commerce reimagined. 
            Join our waitlist and get early access to ReCart's revolutionary platform.
          </p>
          
          {/* Email Input Form */}
          <div className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-3">
              <div className="relative flex-1">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
                <Input 
                  type="email" 
                  placeholder="Enter your email"
                  className="pl-11 h-14 bg-white border-white/20 text-foreground placeholder:text-muted-foreground focus-visible:ring-white"
                />
              </div>
              <Button 
                variant="hero" 
                size="xl" 
                className="h-14 bg-foreground text-background hover:bg-foreground/90 hover:scale-105 shadow-xl whitespace-nowrap"
              >
                Get Early Access
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
            <p className="text-sm text-white/70 mt-4">
              No spam, ever. Unsubscribe at any time.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 max-w-3xl mx-auto pt-12 border-t border-white/20">
            <div>
              <div className="text-3xl sm:text-4xl font-bold text-white mb-2">500+</div>
              <div className="text-white/80 text-sm">Businesses Interested</div>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl font-bold text-white mb-2">10K+</div>
              <div className="text-white/80 text-sm">Waitlist Signups</div>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl font-bold text-white mb-2">1M+</div>
              <div className="text-white/80 text-sm">Tons CO₂ to Save</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
