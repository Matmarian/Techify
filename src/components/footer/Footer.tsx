import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-Fifth text-First h-12">
      <div className="container mx-auto flex items-center justify-between h-full">
        {/* Íconos de redes sociales alineados a la derecha */}
        <div className="flex gap-4 ml-auto">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebook size={30} />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram size={30} />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <FaTwitter size={30} />
          </a>
        </div>

        {/* Texto centrado */}
        <div className="absolute left-1/2 transform -translate-x-1/2">
          <h4>
            Techify &copy; {new Date().getFullYear()}. All rights reserved.
          </h4>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
