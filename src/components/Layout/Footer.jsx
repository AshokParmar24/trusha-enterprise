import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  const menu = [
    { title: "Home", path: "/" },
    { title: "About Us", path: "/about-us" },
    { title: "Products", path: "/products" },
    { title: "Specification", path: "/specification" },
    { title: "Contact Us", path: "/contact-us" },
  ];

  return (
    <footer className="bg-gray-800 text-white py-8 mt-12">
      <div className="container mx-auto px-4">
        {/* Footer Grid with 3 columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

          {/* Quick Links Section */}
          <div className="flex flex-col">
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <div className="flex flex-col space-y-2">
              {menu.map((item, index) => (
                <a
                  key={index}
                  href={item.path}
                  className="text-gray-400 hover:text-white text-lg"
                >
                  {item.title}
                </a>
              ))}
            </div>
          </div>

          {/* Contact Information Section */}
          <div className="flex flex-col">
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <p className="text-gray-400 mb-2">Email: contact@yourcompany.com</p>
            <p className="text-gray-400 mb-2">Address: 123 Main Street, Your City, Country</p>
            <p className="text-gray-400">Phone: +1 234 567 890</p>
          </div>

          {/* Social Media Section */}
          <div className="flex flex-col">
            <h3 className="text-xl font-bold mb-4">Follow Us</h3>
            <div className="flex space-x-4 flex-wrap">
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                <FaFacebook className="text-gray-400 hover:text-white text-3xl" />
              </a>
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                <FaInstagram className="text-gray-400 hover:text-white text-3xl" />
              </a>
              <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="text-gray-400 hover:text-white text-3xl" />
              </a>
              <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                <FaTwitter className="text-gray-400 hover:text-white text-3xl" />
              </a>
            </div>
          </div>

        </div>

        {/* Copyright Section */}
        <div className="text-center mt-8">
          <p className="text-gray-400">&copy; 2025 Your Company. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
