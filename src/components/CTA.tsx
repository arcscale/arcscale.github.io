
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-20 bg-arcgreen">
      <div className="arc-container">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-arcbeige mb-4">Ready to Scale Your Growth?</h2>
          <p className="text-arcbeige-light max-w-2xl mx-auto mb-8">
            Schedule a free strategy call to discuss how we can help you achieve exceptional results with tailored marketing solutions.
          </p>
          <Button className="bg-arcbeige text-arcgreen hover:bg-arcbeige-dark group px-8 py-6 text-lg">
            Book Your Free Strategy Call
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTA;
