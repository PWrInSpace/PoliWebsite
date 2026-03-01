import React from "react";
import styles from "./department-section.module.scss";
import { Project } from "../../../common/data/TeamList";
import { TeamMemberCard } from "./TeamMemberCard";

interface ProjectsSectionProps {
    project: Project;
}

export const ProjectSection: React.FC<ProjectsSectionProps> = ({
  project,
}) => {
  if (project.members.length === 0) {
    return null;
  }

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>{__(project.name)}</h2>
      <div className={styles.divider}></div>
        <div className={styles.membersGrid}>
          {project.members.map((member, index) => (
            <TeamMemberCard key={index} member={member} />
          ))}
        </div>
    </div>
  );
}
