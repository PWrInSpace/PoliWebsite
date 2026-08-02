import image1 from "../../assets/images/Newsletter-images/image1.jpg";
import image2 from "../../assets/images/Newsletter-images/image2.jpg";
import image3 from "../../assets/images/Newsletter-images/image3.jpg";
import image4 from "../../assets/images/Newsletter-images/image4.jpg";
import image5 from "../../assets/images/Newsletter-images/image5.jpg";
import image6 from "../../assets/images/Newsletter-images/image6.jpg";
import logo from "../../assets/images/Newsletter-images/logo.png";
import group87 from "../../assets/images/Newsletter-images/Group 87.svg";
import dniInfo from "../../assets/images/Newsletter-images/IMG_9941.jpg";
import farOutComp from "../../assets/images/Newsletter-images/IMG_8671.jpg";
import festynOlesnica from "../../assets/images/Newsletter-images/IMG_6691.jpg";
import kfbLaby from "../../assets/images/Newsletter-images/KFB.jpg";
import riverCup from "../../assets/images/Newsletter-images/IMG_7779.jpg";
import Czeroc from "../../assets/images/Newsletter-images/IMG_1891.jpg";


export interface NewsletterAsset {
  id: string;
  fileName: string;
  src: string;
  alt: string;
}


export const newsletterAssets: NewsletterAsset[] = [
  {
    id: "logo",
    fileName: "logo.png",
    src: logo,
    alt: "PWr in Space logo",
  },
  {
    id: "group-87",
    fileName: "Group 87.svg",
    src: group87,
    alt: "Newsletter graphic",
  },
  {
    id: "image1",
    fileName: "image1.jpg",
    src: image1,
    alt: "Newsletter image 1",
  },
  {
    id: "image2",
    fileName: "image2.jpg",
    src: image2,
    alt: "Newsletter image 2",
  },
  {
    id: "image3",
    fileName: "image3.jpg",
    src: image3,
    alt: "Newsletter image 3",
  },
  {
    id: "image4",
    fileName: "image4.jpg",
    src: image4,
    alt: "Newsletter image 4",
  },
  {
    id: "image5",
    fileName: "image5.jpg",
    src: image5,
    alt: "Newsletter image 5",
  },
  {
    id: "image6",
    fileName: "image6.jpg",
    src: image6,
    alt: "Newsletter image 6",
  },
  {
    id: "dni-info",
    fileName: "DniInfo.jpg",
    src: dniInfo,
    alt: "Dni Info",
  },
  {
    id: "far-out-comp",
    fileName: "FarOutComp.jpg",
    src: farOutComp,
    alt: "Far Out Comp",
  },
  {
    id: "festyn-olesnica",
    fileName: "FestynOlesnica.jpg",
    src: festynOlesnica,
    alt: "Festyn Olesnica",
  },
  {
    id: "kfb-laby",
    fileName: "KFBLaby.jpg",
    src: kfbLaby,
    alt: "KFB Laby",
  },
  {
    id: "river-cup",
    fileName: "RiverCup.jpg",
    src: riverCup,
    alt: "River Cup",
  },
    {
    id: "Czeroc",
    fileName: "Czeroc.jpg",
    src: Czeroc,
    alt: "czeroc",
  }
];
