import { Search, SlidersHorizontal } from "lucide-react";

const Features = () => {
  return (
    <section className="py-20 sm:py-32 bg-gradient-to-b from-muted/30 to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
            Core Features
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Everything you need to find the perfect product, simplified
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Feature 1 */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-primary to-primary/50 rounded-3xl opacity-0 group-hover:opacity-10 transition-opacity" />
            <div className="relative h-full bg-card rounded-3xl p-10 border border-border shadow-sm hover:shadow-xl transition-all">
              <div className="mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary/70 rounded-2xl flex items-center justify-center shadow-lg">
                  <Search className="w-8 h-8 text-primary-foreground" />
                </div>
              </div>
              
              <h3 className="text-2xl font-bold text-card-foreground mb-4">
                Search Any Product
              </h3>
              
              <p className="text-muted-foreground leading-relaxed mb-6">
                Find exactly what you're looking for with our powerful search engine. 
                Simply type in any product and discover options that match your needs.
              </p>
              
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                  <span className="text-sm text-muted-foreground">
                    Search across thousands of products
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                  <span className="text-sm text-muted-foreground">
                    Get instant results
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                  <span className="text-sm text-muted-foreground">
                    Find sustainable alternatives
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-primary to-primary/50 rounded-3xl opacity-0 group-hover:opacity-10 transition-opacity" />
            <div className="relative h-full bg-card rounded-3xl p-10 border border-border shadow-sm hover:shadow-xl transition-all">
              <div className="mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary/70 rounded-2xl flex items-center justify-center shadow-lg">
                  <SlidersHorizontal className="w-8 h-8 text-primary-foreground" />
                </div>
              </div>
              
              <h3 className="text-2xl font-bold text-card-foreground mb-4">
                Filter by Price, Quality & Size
              </h3>
              
              <p className="text-muted-foreground leading-relaxed mb-6">
                Narrow down your search with intuitive filters. Sort by price, quality ratings, 
                and size to find products that perfectly match your criteria.
              </p>
              
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                  <span className="text-sm text-muted-foreground">
                    Filter by your budget
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                  <span className="text-sm text-muted-foreground">
                    Sort by quality ratings
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                  <span className="text-sm text-muted-foreground">
                    Choose the right size
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
