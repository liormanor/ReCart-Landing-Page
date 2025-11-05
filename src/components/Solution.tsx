import { Leaf, Search, SlidersHorizontal } from "lucide-react";

const Solution = () => {
  return (
    <section className="py-20 sm:py-32 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-6">
            <div className="inline-block">
              <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold">
                Our Solution
              </span>
            </div>
            
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground leading-tight">
              Find What You Need, Shop Sustainably
            </h2>
            
            <p className="text-xl text-muted-foreground leading-relaxed">
              ReCart makes it easy to search for products and filter through options based on 
              what matters most to you—all while supporting sustainable choices.
            </p>
            
            <div className="space-y-4 pt-4">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Search className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">
                    Universal Product Search
                  </h3>
                  <p className="text-muted-foreground">
                    Search for any product you need across a wide range of categories 
                    and discover sustainable options.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <SlidersHorizontal className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">
                    Smart Filtering
                  </h3>
                  <p className="text-muted-foreground">
                    Easily filter results by price range, quality ratings, and available sizes 
                    to find exactly what you're looking for.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Leaf className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">
                    Sustainability First
                  </h3>
                  <p className="text-muted-foreground">
                    Every search highlights eco-friendly alternatives, helping you make 
                    choices that are better for the planet.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Visual Element */}
          <div className="relative">
            <div className="bg-gradient-to-br from-primary to-primary/70 rounded-3xl p-12 shadow-xl">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                    <Search className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-white">
                    <div className="text-sm opacity-90">Products Found</div>
                    <div className="text-3xl font-bold">10,000+</div>
                    <div className="text-sm opacity-90">across all categories</div>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4 pt-4">
                  <div className="bg-white/10 rounded-xl p-4 text-center">
                    <div className="text-2xl font-bold text-white">Easy</div>
                    <div className="text-sm text-white/80">Search</div>
                  </div>
                  <div className="bg-white/10 rounded-xl p-4 text-center">
                    <div className="text-2xl font-bold text-white">Smart</div>
                    <div className="text-sm text-white/80">Filters</div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/20 rounded-full blur-3xl -z-10" />
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-primary/30 rounded-full blur-3xl -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solution;
