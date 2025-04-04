
const Clients = () => {
  // In a real implementation, these would be actual client logos
  // For now, we'll use placeholder company names styled as logos
  const clients = [
    "Alpha Brand", "Zenith", "Elevate", 
    "Spectrum", "Pinnacle", "Horizon", 
    "Vertex", "Catalyst", "Meridian"
  ];

  return (
    <section id="clients" className="py-20 bg-arcbeige">
      <div className="arc-container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-4">Trusted by Leading Brands</h2>
          <p className="text-arcgreen-light max-w-2xl mx-auto">
            We've helped these brands achieve exceptional results through strategic growth marketing.
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
          {clients.map((client, index) => (
            <div key={index} className="bg-white rounded-lg p-6 h-24 flex items-center justify-center shadow-sm border border-arcbeige-dark">
              <span className="text-xl font-bold text-arcgreen">
                {client}
              </span>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <p className="italic text-arcgreen-light max-w-2xl mx-auto">
            "Arc Scale transformed our approach to customer retention. Their strategies increased our repeat purchase rate by 78% within just three months."
          </p>
          <p className="mt-4 font-medium text-arcgreen">
            — Marketing Director, Pinnacle Brands
          </p>
        </div>
      </div>
    </section>
  );
};

export default Clients;
