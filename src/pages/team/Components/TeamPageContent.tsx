import React from "react";
import styles from "./team-page-content.module.scss";
import { TeamData } from "../../../common/data/TeamList";
import { TeamDataProjects } from "../../../common/data/TeamList";
import { DepartmentSection } from "./DepartmentSection";
import { ProjectSection } from "./ProjectSection";

export const TeamPageContent = () => {
  return (
    <div className={styles.container}>
      {TeamData.map((department, index) => (
        <DepartmentSection key={index} department={department} />
      ))}
    </div>
  );
};
export const TeamPageContentProjects = () => {
  return (
    <div className={styles.container}>
      {TeamDataProjects.map((project, index) => (
        <ProjectSection key={index} project={project} />
      ))}
    </div>
  );
};
