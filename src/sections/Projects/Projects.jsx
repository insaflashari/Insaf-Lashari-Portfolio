import styles from './ProjectsStyles.module.css';
import studybuddy from '../../assets/studybuddy.png';
import adventure from '../../assets/adventure.png';
import ProjectCard from '../../common/ProjectCard';
import aws from '../../assets/aws.png';
import tempctrl from '../../assets/tempctrl.png';
import geesespotter from '../../assets/geesespotter.png';
import light from '../../assets/light.png';



function Projects() {
  return (
    <section id="projects" className={styles.container}>
        <h1 className="sectionTitle">Projects</h1>
        <div className={styles.projectsContainer}>
            <ProjectCard 
              src={studybuddy} 
              link="https://github.com/insaflashari/studybuddy" 
              h3="Study Buddy"
              p="Student Productivity App"
            />
            <ProjectCard 
              src={adventure} 
              link="https://github.com/insaflashari/Choose-Your-Own-Adventure" 
              h3="Choose Your Own Adventure"
              p="Game made with OpenAI"
            />
            <ProjectCard 
              src={aws} 
              link="https://github.com/insaflashari/AWS-Project" 
              h3="AWS Project"
              p="Uses 5 AWS Services"
            />
            <ProjectCard 
              src={tempctrl} 
              link="https://github.com/insaflashari/ECE124-Labs" 
              h3="TempCtrl"
              p="Energy Monitoring & HVAC FPGA"
            />
            <ProjectCard 
              src={geesespotter} 
              link="https://github.com/insaflashari/Geesespotter" 
              h3="GeeseSpotter"
              p="Game for ECE 150"
            />
            <ProjectCard 
              src={light} 
              link="https://github.com/insaflashari/ECE124-Labs" 
              h3="VeriLight"
              p="Traffic Light Controller"
            />
        </div>
    </section>
  );
}

export default Projects;