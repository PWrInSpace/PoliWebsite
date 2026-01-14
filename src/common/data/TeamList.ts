export interface TeamMember {
  image: string;
  name: string;
  role: string;
}

export interface Department {
  name: string;
  members: TeamMember[];
}
// Example: import member1 from "../../assets/images/Team/Board/member1.jpg";
import member1 from "../../assets/images/Team/Mgmt/tmp.png"
import member2 from "../../assets/images/Team/Mgmt/tmp.png"
import member3 from "../../assets/images/Team/Mgmt/tmp.png"
import member4 from "../../assets/images/Team/Mgmt/tmp.png"
import member5 from "../../assets/images/Team/Mgmt/tmp.png"
import member6 from "../../assets/images/Team/Mgmt/tmp.png"
import member7 from "../../assets/images/Team/Mgmt/tmp.png"
import member8 from "../../assets/images/Team/Mgmt/tmp.png"
import member9 from "../../assets/images/Team/Mgmt/tmp.png"
import member10 from "../../assets/images/Team/Mgmt/tmp.png"
import member11 from "../../assets/images/Team/Mgmt/tmp.png"
import member12 from "../../assets/images/Team/Mgmt/tmp.png"
import member13 from "../../assets/images/Team/Mgmt/tmp.png"
import member14 from "../../assets/images/Team/Mgmt/tmp.png"
import member15 from "../../assets/images/Team/Mgmt/tmp.png"
import member16 from "../../assets/images/Team/Mgmt/tmp.png"


// { image: member1, name: "Imię Nazwisko", role: "..." }
export const TeamData: Department[] = [
  {
    name: "Zarząd",
    members: [{ image: member1, name: "Oliwia Opoń", role: "Prezes PWr in Space", },
    { image: member2, name: "Ewa Kasprzak", role: "Wiceprezes ds. biznesu & HR", },
    { image: member3, name: "Bianka Napiórkowska", role: "Wiceprezes ds. Finansów", },
    { image: member4, name: "Stanisław Posacki", role: "Wiceprezes ds. Projektów", },
    { image: member5, name: "Aleksander Szyszka", role: "Wiceprezes ds. Logistyki", }
    ],
  },
  {
    name: "Liderzy",
    members: [{ image: member6, name: "Joanna Król", role: "Marketing i PR", },
    { image: member7, name: "Igor Szuniewicz", role: "Elektronika i Software", },
    { image: member8, name: "Bartosz Kamieniarz", role: "Elektronika i Software", },
    { image: member9, name: "Jędrzej Szczepankiewicz", role: "Silniki", },
    { image: member10, name: "Mikołaj Kubik", role: "Silniki", },
    { image: member11, name: "Maja Grygierczyk", role: "Struktura", },
    { image: member12, name: "Aleksandra Olszewska", role: "Odzysk", },
    { image: member13, name: "Tadeusz Zięba", role: "Ground Support", },
    { image: member14, name: "Tymoteusz Pytko", role: "Ground Support", },
    { image: member15, name: "Arkadiusz Wilczyński", role: "Payload", },
    { image: member16, name: "Jakub Jankiewicz", role: "Areodynamika", },
    ],
  },
  {
    name: "Marketing",
    members: [],
  },
  {
    name: "Ele & Soft",
    members: [],
  },
  {
    name: "Aerodynamika",
    members: [],
  },
  {
    name: "Ground Support",
    members: [],
  },
  {
    name: "Struktura",
    members: [],
  },
  {
    name: "Odzysk",
    members: [],
  },
  {
    name: "Payload",
    members: [],
  },
  {
    name: "Silniki",
    members: [],
  },
];
