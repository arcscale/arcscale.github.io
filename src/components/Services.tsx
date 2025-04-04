
import { ArrowRight } from "lucide-react";

const ServiceCard = ({ title, description, icon }: { title: string; description: string; icon: JSX.Element }) => {
  return (
    <div className="service-card group">
      <div className="mb-4 text-arcgreen">{icon}</div>
      <h3 className="text-xl font-bold mb-2 text-arcgreen">{title}</h3>
      <p className="text-arcgreen-light mb-4">{description}</p>
      <div className="flex items-center text-arcgreen font-medium group-hover:translate-x-1 transition-transform">
        Learn more <ArrowRight className="ml-2 h-4 w-4" />
      </div>
    </div>
  );
};

const Services = () => {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="arc-container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-4">Our Services</h2>
          <p className="text-arcgreen-light max-w-2xl mx-auto">
            We provide tailored marketing solutions to help your brand reach its full potential and achieve sustainable growth.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <ServiceCard 
            title="DTC Growth Marketing" 
            description="Strategic customer acquisition campaigns that scale your direct-to-consumer business with sustainable growth tactics and optimized conversion rates."
            icon={
              <div className="bg-arcbeige p-3 rounded-lg inline-block">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M21 21H7.8C6.11984 21 5.27976 21 4.63803 20.673C4.07354 20.3854 3.6146 19.9265 3.32698 19.362C3 18.7202 3 17.8802 3 16.2V3M21 7L15.5089 12.5196C15.1997 12.8313 15.0451 12.9872 14.8655 13.0615C14.7073 13.1267 14.5345 13.1461 14.3659 13.1177C14.1737 13.0856 13.9943 12.9668 13.6357 12.7294L10.3643 10.4706C10.0057 10.2332 9.82635 10.1144 9.63408 10.0823C9.46555 10.0539 9.29272 10.0733 9.13452 10.1385C8.95486 10.2128 8.80027 10.3687 8.49108 10.6804L3 16.2" stroke="#0D4235" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            }
          />
          
          <ServiceCard 
            title="DTC Retention Marketing" 
            description="Customer retention strategies that maximize lifetime value through personalized email marketing, loyalty programs, and post-purchase engagement."
            icon={
              <div className="bg-arcbeige p-3 rounded-lg inline-block">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 11H15M9 7H15M9 15H12M22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C22 4.92893 22 7.28595 22 12Z" stroke="#0D4235" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            }
          />
          
          <ServiceCard 
            title="Amazon Ads" 
            description="Specialized Amazon advertising campaigns that increase visibility, optimize product listings, and drive conversions on the world's largest marketplace."
            icon={
              <div className="bg-arcbeige p-3 rounded-lg inline-block">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9.13456 9C9.51962 7.8044 10.6566 7 12 7C13.6569 7 15 8.34315 15 10C15 11.3075 14.1779 12.4254 13 12.874M12 17C9.23858 17 7 14.7614 7 12C7 9.23858 9.23858 7 12 7C14.7614 7 17 9.23858 17 12C17 14.7614 14.7614 17 12 17ZM12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21Z" stroke="#0D4235" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            }
          />
        </div>
      </div>
    </section>
  );
};

export default Services;
