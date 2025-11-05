import Hero from "@/components/Hero";
import ProblemStatement from "@/components/ProblemStatement";
import Solution from "@/components/Solution";
import TargetAudience from "@/components/TargetAudience";
import Features from "@/components/Features";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <ProblemStatement />
      <Solution />
      <TargetAudience />
      <Features />
      <CallToAction />
      <Footer />
    </main>
  );
};

export default Index;
