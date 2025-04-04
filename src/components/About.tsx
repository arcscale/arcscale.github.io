
import { Button } from "@/components/ui/button";

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="arc-container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center">
            <div className="relative">
              <div className="absolute top-0 left-0 w-full h-full bg-arcgreen rounded-xl opacity-10 rotate-3"></div>
              <div className="relative h-80 w-64 bg-arcbeige-light rounded-xl overflow-hidden border-2 border-arcbeige-dark">
                {/* Founder image placeholder - would be replaced with actual image */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-arcgreen text-lg font-medium">Founder's Image</span>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-4">About the Founder</h2>
            <p className="text-arcgreen-light mb-6">
              With over a decade of experience in growth marketing for DTC brands, our founder has helped numerous companies scale their operations and achieve sustainable growth.
            </p>
            <p className="text-arcgreen-light mb-6">
              After leading marketing teams at several successful e-commerce startups and established brands, they founded Arc Scale with a mission to provide strategic, data-driven marketing solutions that deliver measurable results.
            </p>
            <p className="text-arcgreen-light mb-8">
              Their expertise in retention marketing and Amazon advertising has been featured in industry publications, and they regularly speak at marketing conferences around the world.
            </p>
            <Button className="cta-button">Book a Strategy Call</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
