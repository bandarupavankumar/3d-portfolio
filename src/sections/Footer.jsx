import { socialImgs } from "../constants";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container flex flex-col md:flex-row justify-between items-center gap-4">
        
        {/* Left side */}
        <div className="flex flex-col justify-center">
          <p>Terms & Conditions</p>
        </div>

        {/* Social icons */}
        <div className="socials flex gap-4">
          {socialImgs.map((socialImg, index) => (
            <a
              key={index}
              href={socialImg.url}
              target="_blank"
              rel="noopener noreferrer"
              className="icon"
            >
              <img
                src={socialImg.imgPath}
                alt={socialImg.name}
                className="w-6 h-6 hover:scale-110 transition-transform"
              />
            </a>
          ))}
        </div>

        {/* Right side */}
        <div className="flex flex-col justify-center">
          <p className="text-center md:text-end">
            © {new Date().getFullYear()} . All rights PavanKumar reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
