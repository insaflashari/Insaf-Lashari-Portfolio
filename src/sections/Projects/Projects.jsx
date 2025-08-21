import styles from './ProjectsStyles.module.css';
import studybuddy from '../../assets/studybuddy.png';
import adventure from '../../assets/adventure.png';
import ProjectCard from '../../common/ProjectCard';
import aws from '../../assets/aws.png';
import tempctrl from '../../assets/tempctrl.png';



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
              h3="Amazon AWS Project"
              p="Uses Amplify, Lambda, IAM, API Gateway and DynamoDB"
            />
            <ProjectCard 
              src={tempctrl} 
              link="https://github.com/insaflashari/ECE124-Labs" 
              h3="TempCtrl"
              p="Energy Monitoring & HVAC FPGA Project"
            />
        </div>
    </section>
  );
}

export default Projects;