import struktura from "../../assets/images/join-us/struktura.png";
import silniki from "../../assets/images/join-us/silniki.png";
import pr from "../../assets/images/join-us/pr.png";
import odzysk from "../../assets/images/join-us/odzysk.png";
import elektronika from "../../assets/images/join-us/elektronika.png";
import acs from "../../assets/images/join-us/acs.png";
import payload from "../../assets/images/join-us/payload.png";
import polifloater from "../../assets/images/join-us/polifloater.png";

interface department {
  header: string;
  text: string;
  image: File;
}

export const Departments: department[] = [
  {
    header: "joinUsPage.departments.airframe.header",
    text: "joinUsPage.departments.airframe.text",
    image: struktura,
  },
  {
    header: "joinUsPage.departments.engines.header",
    text: "joinUsPage.departments.engines.text",
    image: silniki,
  },
  {
    header: "joinUsPage.departments.pr.header",
    text: "joinUsPage.departments.pr.text",
    image: pr,
  },
  {
    header: "joinUsPage.departments.recovery.header",
    text: "joinUsPage.departments.recovery.text",
    image: odzysk,
  },
  {
    header: "joinUsPage.departments.electronics.header",
    text: "joinUsPage.departments.electronics.text",
    image: elektronika,
  },
  {
    header: "joinUsPage.departments.acs.header",
    text: "joinUsPage.departments.acs.text",
    image: acs,
  },
  {
    header: "joinUsPage.departments.payload.header",
    text: "joinUsPage.departments.payload.text",
    image: payload,
  },
  {
    header: "joinUsPage.departments.polifloater.header",
    text: "joinUsPage.departments.polifloater.text",
    image: polifloater,
  },
];
