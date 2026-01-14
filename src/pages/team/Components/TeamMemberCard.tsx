import React from "react";
import styles from "./team-member-card.module.scss";
import { TeamMember } from "../../../common/data/TeamList";

interface TeamMemberCardProps {
  member: TeamMember;
}

export const TeamMemberCard: React.FC<TeamMemberCardProps> = ({ member }) => {
  return (
    <div className={styles.container}>
      <img src={member.image} alt={`${member.name} profile picture`} />
      <div className={styles.name}>{member.name}</div>
      <div className={styles.role}>{member.role}</div>
    </div>
  );
};
