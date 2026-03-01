import React from "react";
import styles from "./department-section.module.scss";
import { Department } from "../../../common/data/TeamList";
import { TeamMemberCard } from "./TeamMemberCard";

interface DepartmentSectionProps {
  department: Department;
}

export const DepartmentSection: React.FC<DepartmentSectionProps> = ({
  department,
}) => {
  if (department.members.length === 0) {
    return null;
  }

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>{__(department.name)}</h2>
      <div className={styles.divider}></div>
        <div className={styles.membersGrid}>
          {department.members.map((member, index) => (
            <TeamMemberCard key={index} member={member} />
          ))}
        </div>
    </div>
  );
}; //
