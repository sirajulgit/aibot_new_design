

const Footer = () => {
  return (
    <footer className="site_footer">
      <div className="container mx-auto px-4">
        <div className="footer_wrapper">
          <div className="footer_item">
            <h4 className="text-lg font-semibold mb-3">Quick Links</h4>
            <ul className="space-y-2">
              {['Home', 'Company', 'Services', 'About Us', 'Data', 'Pricing'].map((item, index) => (
                <li key={index}><a href="#" className="hover:text-gray-400">{item}</a></li>
              ))}
            </ul>
          </div>

          <div className="footer_item">
            <h4 className="text-lg font-semibold mb-3">Our Features</h4>
            <ul className="space-y-2">
              {['AI', 'Infinite Canvas', 'Teams (coming soon)', 'Fonts', 'Mockups', 'Content Library'].map((item, index) => (
                <li key={index}><a href="#" className="hover:text-gray-400">{item}</a></li>
              ))}
            </ul>
          </div>

          <div className="footer_item">
            <h4 className="text-lg font-semibold mb-3">Resources</h4>
            <ul className="space-y-2">
              {['Plans', 'For Education', 'Licensing', 'Templates', 'Create Designs', 'Tools'].map((item, index) => (
                <li key={index}><a href="#" className="hover:text-gray-400">{item}</a></li>
              ))}
            </ul>
          </div>

          <div className="footer_item">
            <h4 className="text-lg font-semibold mb-3">More</h4>
            <ul className="space-y-2">
              {['Blog', 'Testimonials', 'Request for Demo'].map((item, index) => (
                <li key={index}><a href="#" className="hover:text-gray-400">{item}</a></li>
              ))}
            </ul>
          </div>
        </div>

        <div className="footer_bottom flex flex-col md:flex-row justify-between items-center mt-8 border-t border-gray-700 pt-4">
          <div className="text-sm">© Copyright 2025 All rights reserved.</div>
          <div className="social mt-4 md:mt-0">
            <ul className="flex space-x-4">
              {['facebook', 'insta', 'twitter', 'linkedin'].map((platform, index) => (
                <li key={index}>
                  <a href="#" className="hover:opacity-75">
                    <img src={`/images/${platform}.png`} alt={platform} className="w-6 h-6" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
