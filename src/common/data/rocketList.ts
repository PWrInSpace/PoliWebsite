import r1 from '../../assets/images/rockets/r1.png';
import r2 from '../../assets/images/rockets/r2.png';
import r2s from '../../assets/images/rockets/r2s.png';
import r3 from '../../assets/images/rockets/r3.png';
import r4 from '../../assets/images/rockets/r4.png';
import r4v2 from '../../assets/images/rockets/r4v2.png';
import r5 from '../../assets/images/rockets/r5.png';

interface rocket {
    name: string;
    length: string;
    thrust: string;
    weight: string;
    velocity: string;
    image: File;
}

export const Rockets: rocket[] = [
    {
        name: 'R1',
        length: '750 MM',
        thrust: '210 N',
        weight: '0.8 KG',
        velocity: '120 M/S',
        image: r1
    },
    {
        name: 'R2',
        length: '1900 MM',
        thrust: '450 N',
        weight: '5.5 KG',
        velocity: '160 M/S',
        image: r2
    },
    {
        name: 'R3',
        length: '3000 MM',
        thrust: '1600 N',
        weight: '20 KG',
        velocity: '260 M/S',
        image: r3
    },
    {
        name: 'R2S',
        length: '2500 MM',
        thrust: '1500 N',
        weight: '10 KG',
        velocity: '300 M/S',
        image: r2s
    },
    {
        name: 'R4S',
        length: '2600 MM',
        thrust: '1500 N',
        weight: '15 KG',
        velocity: '130 M/S',
        image: r4
    },
    {
        name: 'R4',
        length: '4000 MM',
        thrust: '2500 N',
        weight: '35 KG',
        velocity: '272 M/S',
        image: r4
    },
    {
        name: 'R4V2',
        length: '4007 MM',
        thrust: '2550 N',
        weight: '36 KG',
        velocity: '240 M/S',
        image: r4v2
    },
    {
        name: 'R5',
        length: '??? MM',
        thrust: '??? N',
        weight: '??? KG',
        velocity: '??? M/S',
        image: r5
    }
];
