import liquid1 from "../../assets/images/projects/liquid1.jpg";
import liquid2 from "../../assets/images/projects/liquid2.png";
import secondImage from "../../assets/images/about-us-page/image2.png";

export interface ParagraphImage {
  src: File;
  alt: string;
  position: string;
}

interface paragraph {
  title: string;
  subtitle: string;
  text: string;
  image: ParagraphImage;
  specification?: {
    details: string;
    image: ParagraphImage;
  };
}

export const Paragraphs: paragraph[] = [
  {
    title: "projects.firstParagraph.title",
    subtitle: "projects.firstParagraph.subtitle",
    text: "projects.firstParagraph.text",
    image: {
      src: liquid1,
      alt: "Liquid engine",
      position: "right",
    },
    specification: {
      details: "projects.firstParagraph.details",
      image: {
        src: liquid2,
        alt: "Liquid engine model",
        position: "right",
      },
    }
  },
];
