import { FaInstagram, FaLinkedin, FaGithub, FaMedium, FaYoutube, FaTwitter } from "react-icons/fa";

const SocialLinks = () => {
  return (
    
    <div className="icons">
        <h3>FIND ME</h3>
      <a href="https://www.instagram.com/ayberkcakar/" target="_blank" rel="noopener noreferrer">
        <FaInstagram size={30} className="icon" />
      </a>
      <a href="https://www.linkedin.com/in/ayberkcakar/" target="_blank" rel="noopener noreferrer">
        <FaLinkedin size={30} className="icon" />
      </a>
      <a href="https://github.com/AyberkCakar" target="_blank" rel="noopener noreferrer">
        <FaGithub size={30} className="icon" />
      </a>
      <a href="https://x.com/ayberkcakar" target="_blank" rel="noopener noreferrer">
        <FaTwitter size={30} className="icon" />
      </a>
      <a href="https://ayberkcakar.medium.com/" target="_blank" rel="noopener noreferrer">
        <FaMedium size={30} className="icon" />
      </a>
      <a href="https://youtube.com/@ayberkcakar" target="_blank" rel="noopener noreferrer">
        <FaYoutube size={30} className="icon" />
      </a>
      
    </div>
  );
};

export default SocialLinks;