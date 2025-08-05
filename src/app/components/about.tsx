import Image from "next/image";
const   About = () => {
    return (
        <div className="about">
        
        
        <div className="paraghraph">
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
        
        <div className="image">
            <Image className="pictures" src="/ayberk.jpg" alt="Ayberk Çakar" width={300} height={300} />
         </div>
       
        </div>
    );
};

export default About;


   