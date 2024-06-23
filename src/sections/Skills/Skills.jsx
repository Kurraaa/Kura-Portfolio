import styles from "./SkillsStyles.module.css";
import checkMarkIcon from "../../assets/LightPunkt.png";
import SkillList from "../../common/SkillList";

function Skills() {
  return (
    <section id="skills" className={styles.container}>
      <h1 className="sectionTitle">Projects in Work</h1>
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="Discord Server" />
        <SkillList src={checkMarkIcon} skill="Arkosmos Bots" />
        <SkillList src={checkMarkIcon} skill="Arkosmos Website" />
        <SkillList src={checkMarkIcon} skill="ToDo List im Browser" />
        <SkillList src={checkMarkIcon} skill="ToDo List App" />
        <hr />
      </div>
    </section>
  );
}

export default Skills;
