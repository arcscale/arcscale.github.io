
const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-white border-t border-arcbeige-dark">
      <div className="arc-container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <img src="/lovable-uploads/2a652c1a-4658-4b3e-8fb5-c57d367f400b.png" alt="Arc Scale Logo" className="h-10 mb-4" />
            <p className="text-arcgreen-light mb-4 max-w-sm">
              Expert growth marketing consultancy specializing in DTC retention, growth strategies, and Amazon ads.
            </p>
          </div>
          
          <div>
            <h3 className="font-bold text-arcgreen mb-4">Services</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-arcgreen-light hover:text-arcgreen">DTC Growth Marketing</a></li>
              <li><a href="#" className="text-arcgreen-light hover:text-arcgreen">DTC Retention Marketing</a></li>
              <li><a href="#" className="text-arcgreen-light hover:text-arcgreen">Amazon Ads</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-arcgreen mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="#about" className="text-arcgreen-light hover:text-arcgreen">About</a></li>
              <li><a href="#clients" className="text-arcgreen-light hover:text-arcgreen">Clients</a></li>
              <li><a href="#" className="text-arcgreen-light hover:text-arcgreen">Contact</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-arcbeige-dark mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-arcgreen-light text-sm">
              &copy; {currentYear} Arc Scale. All rights reserved.
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a href="#" className="text-arcgreen-light hover:text-arcgreen">Privacy Policy</a>
              <a href="#" className="text-arcgreen-light hover:text-arcgreen">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
