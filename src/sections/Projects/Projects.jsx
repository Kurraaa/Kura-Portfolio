import styles from "./ProjectsStyles.module.css";
import arkosmosdiscord from "../../assets/1.png";
import todolist from "../../assets/ToDoListe.png";
import ProjectCard from "../../common/ProjectCard";

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={arkosmosdiscord}
          link="https://discord.gg/JKJXTTEKqt"
          h3="Arkosmos"
          p="Arkosmos Discord Server"
        />
        <ProjectCard
          src={todolist}
          link="https://discord.gg/JKJXTTEKqt"
          h3="To Do Liste Web"
          p="To Do Liste im Browser"
        />
      </div>
    </section>
  );
}

export default Projects;
