import { FaInstagram, FaLinkedin, FaGithub, FaMedium, FaYoutube, FaTwitter } from "react-icons/fa";

const SocialLinks = () => {
  return (
    
    <div className="mt-10 flex gap-6 justify-center">
        <h3>FIND ME</h3>
      <a href="https://www.instagram.com/ayberkcakar/" target="_blank" rel="noopener noreferrer">
        <FaInstagram size={30} className="hover:text-pink-500 transition" />
      </a>
      <a href="https://www.linkedin.com/in/ayberkcakar/" target="_blank" rel="noopener noreferrer">
        <FaLinkedin size={30} className="hover:text-blue-500 transition" />
      </a>
      <a href="https://github.com/AyberkCakar" target="_blank" rel="noopener noreferrer">
        <FaGithub size={30} className="hover:text-gray-300 transition" />
      </a>
      <a href="https://x.com/ayberkcakar" target="_blank" rel="noopener noreferrer">
        <FaTwitter size={30} className="hover:text-red-500 transition" />
      </a>
      <a href="https://ayberkcakar.medium.com/" target="_blank" rel="noopener noreferrer">
        <FaMedium size={30} className="hover:text-white transition" />
      </a>
      <a href="https://youtube.com/@ayberkcakar" target="_blank" rel="noopener noreferrer">
        <FaYoutube size={30} className="hover:text-red-500 transition" />
      </a>
      <a href="https://youtube.com/@ayberkcakar" target="_blank" rel="noopener noreferrer">
        <FaYoutube size={30} className="hover:text-red-500 transition" />
      </a>
    </div>
  );
};

export default SocialLinks;