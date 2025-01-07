import liquid1 from "../../assets/images/projects/liquid1.jpg";
import liquid2 from "../../assets/images/projects/liquid2.png";
import wyrzutnia from "../../assets/images/projects/wyrzutnia.jpg";
import wyrzutnia2 from "../../assets/images/projects/wyrzutnia2.png";
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
  {
    title: "projects.secondParagraph.title",
    subtitle: "projects.secondParagraph.subtitle",
    text: "projects.secondParagraph.text",
    image: {
      src: wyrzutnia,
      alt: "Launch rail Celestia",
      position: "right",
    },
    specification: {
      details: "projects.secondParagraph.details",
      image: {
        src: wyrzutnia2,
        alt: "Launch rail Celestia model",
        position: "right",
      },
    }
  }
];
