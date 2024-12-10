import styles from "./project-paragraph.module.scss";
import { ParagraphImage } from "src/common/data/projectParagraphList";

interface IProps {
  title: string;
  subtitle: string;
  text: string;
  wrapper: string;
  details?: string;
  detailsImage?: ParagraphImage;
}

export const ProjectParagraph = (props: IProps) => {
  return (
    <div className={classes(styles.textWrapper, props.wrapper)}>
      <div className={styles.title}>{props.title}</div>
      <div className={styles.subtitle}>{props.subtitle}</div>
      <div className={styles.text}>{props.text}</div>
      <div className={styles.detailsWrapper}>
        <div>
          {props.details?.split("\n").map((line, key) => (
            <p key={key}>{line}</p>
          ))}
        </div>

        {props.detailsImage && 
         <img
           src={String(props.detailsImage.src)}
           alt={props.detailsImage.alt}
           className={styles.paragraphImage}
         />
        }
     
      </div>
    </div>
  );
};
