import styles from './SkillsStyles.module.css';
import checkMarkIcon from '../../assets/checkmark-dark.svg';
import SkillList from '../../common/SkillList';

function Skills() {
  return (
    <section id="skills" className={styles.container}>
        <h1 className="sectionTitle">Skills</h1>
        <div className={styles.skillList}>
            <SkillList src={checkMarkIcon} skill="HTML" />
            <SkillList src={checkMarkIcon} skill="CSS" />
            <SkillList src={checkMarkIcon} skill="JAVASCRIPT" />
            <SkillList src={checkMarkIcon} skill="C++/C/C#" />
            <SkillList src={checkMarkIcon} skill="PYTHON" />
        </div>
        < hr />
        <div className={styles.skillList}>
            <SkillList src={checkMarkIcon} skill="React.js" />
            <SkillList src={checkMarkIcon} skill="Node.js" />
            <SkillList src={checkMarkIcon} skill="MySQL" />
            <SkillList src={checkMarkIcon} skill="Flutter" />
        </div>
        < hr />
        <div className={styles.skillList}>
            <SkillList src={checkMarkIcon} skill="Vite" />
            <SkillList src={checkMarkIcon} skill="MATLAB" />
            <SkillList src={checkMarkIcon} skill="Git" />
            <SkillList src={checkMarkIcon} skill="JSX" />
            <SkillList src={checkMarkIcon} skill="AGi32" />
        </div>
        < hr />
        

    </section>
  );
}

export default Skills;