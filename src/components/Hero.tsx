
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="bg-arcbeige py-16 md:py-24">
      <div className="arc-container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-arcgreen mb-4 leading-tight">
              Scale Your Growth<br/> With Expert Marketing
            </h1>
            <p className="text-lg md:text-xl text-arcgreen-light mb-8 max-w-lg">
              Specialized in DTC Growth & Retention Marketing and Amazon Ads, we help brands reach their full potential.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="cta-button" size="lg">Book a Strategy Call</Button>
              <Button variant="outline" className="border-arcgreen text-arcgreen hover:bg-arcbeige-dark" size="lg">
                Our Services
              </Button>
            </div>
          </div>
          <div className="flex justify-center md:justify-end animate-fade-in">
            <div className="relative">
              <div className="absolute top-0 left-0 w-full h-full bg-arcgreen rounded-xl opacity-10 -rotate-6"></div>
              <div className="relative bg-white p-6 rounded-xl shadow-lg border border-arcbeige-dark">
                <div className="mb-4">
                  <span className="text-4xl font-bold text-arcgreen">250%</span>
                  <p className="text-arcgreen-light">Average Growth</p>
                </div>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-arcgreen">45+</span>
                  <p className="text-arcgreen-light">Brands Scaled</p>
                </div>
                <div>
                  <span className="text-4xl font-bold text-arcgreen">3.5x</span>
                  <p className="text-arcgreen-light">ROI Increase</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
