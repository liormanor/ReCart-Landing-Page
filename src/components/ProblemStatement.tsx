import { AlertCircle, TrendingDown, Trash2 } from "lucide-react";

const ProblemStatement = () => {
  return (
    <section className="py-20 sm:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
            The Problem We're Solving
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Modern e-commerce generates massive environmental impact through wasteful practices, 
            unclear sustainability information, and disconnected supply chains.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {/* Problem 1 */}
          <div className="bg-card rounded-2xl p-8 border border-border shadow-sm hover:shadow-md transition-shadow">
            <div className="w-14 h-14 bg-destructive/10 rounded-xl flex items-center justify-center mb-6">
              <Trash2 className="w-7 h-7 text-destructive" />
            </div>
            <h3 className="text-xl font-semibold text-card-foreground mb-4">
              Excessive Waste
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Traditional shopping carts lead to over-purchasing and product waste. 
              Consumers lack visibility into the environmental cost of their purchases.
            </p>
          </div>

          {/* Problem 2 */}
          <div className="bg-card rounded-2xl p-8 border border-border shadow-sm hover:shadow-md transition-shadow">
            <div className="w-14 h-14 bg-destructive/10 rounded-xl flex items-center justify-center mb-6">
              <AlertCircle className="w-7 h-7 text-destructive" />
            </div>
            <h3 className="text-xl font-semibold text-card-foreground mb-4">
              Limited Transparency
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Shoppers struggle to find accurate sustainability data about products, 
              making it difficult to make informed, eco-conscious decisions.
            </p>
          </div>

          {/* Problem 3 */}
          <div className="bg-card rounded-2xl p-8 border border-border shadow-sm hover:shadow-md transition-shadow">
            <div className="w-14 h-14 bg-destructive/10 rounded-xl flex items-center justify-center mb-6">
              <TrendingDown className="w-7 h-7 text-destructive" />
            </div>
            <h3 className="text-xl font-semibold text-card-foreground mb-4">
              Carbon Footprint
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Inefficient logistics and packaging choices contribute to unnecessary 
              carbon emissions throughout the entire shopping journey.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemStatement;
