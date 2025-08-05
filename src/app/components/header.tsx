import Image from "next/image";
import { FaInstagram, FaLinkedin, FaGithub, FaMedium, FaYoutube, FaTwitter } from "react-icons/fa";
const Header = () => {
  return (
    <div className="all-items">
      <div className="header-box">
        <div className="header1">
          <h1 className="header2"> WELCOME TO MY WORLD</h1>
        </div>
        <div className="intro">
  <h1 className="header3">
    Hi, I’m <span className="name">Ayberk Çakar</span>
  <br />
  a
  </h1>
  
</div>




        <div className="paragraph">
          <p>Hi, I am a graduate of Manisa Celal Bayar University
            Software Engineering. Currently, I am studying for a
            Master's Degree in Software Engineering at Manisa Celal
            Bayar University. I work as a Full-Stack Developer at Supply
            Chain Wizard. I am interested in new technologies. I am trying
            to improve myself with the courses I follow from online course
            sites and with the software technology books I read. I am trying
            to develop projects and write medium articles with my new knowledge
            that I have learned.</p>
        </div>
        <div className="icons">
          <h3 className="header4">FIND ME</h3>
          <div className="socials">
          <a href="https://www.instagram.com/ayberkcakar/" target="_blank" rel="noopener noreferrer">
            <FaInstagram size={40} className="icon" />
          </a>
          <a href="https://www.linkedin.com/in/ayberkcakar/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={40} className="icon" />
          </a>
          <a href="https://github.com/AyberkCakar" target="_blank" rel="noopener noreferrer">
            <FaGithub size={40} className="icon" />
          </a>
          <a href="https://x.com/ayberkcakar" target="_blank" rel="noopener noreferrer">
            <FaTwitter size={40} className="icon" />
          </a>
          <a href="https://ayberkcakar.medium.com/" target="_blank" rel="noopener noreferrer">
            <FaMedium size={40} className="icon" />
          </a>
          <a href="https://youtube.com/@ayberkcakar" target="_blank" rel="noopener noreferrer">
            <FaYoutube size={40} className="icon" />
          </a>
          </div>

        </div>

      </div>

      <div className="image">
        <Image className="picture" src="/ayberk.jpg" alt="Ayberk Çakar" width={300} height={300} />
      </div>


    </div>
  );
};

export default Header;