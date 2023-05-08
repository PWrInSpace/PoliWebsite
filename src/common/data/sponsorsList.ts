import airproducts from '../../assets/images/sponsors/airproducts.png';
import ataszek from '../../assets/images/sponsors/ataszek.png';
import computercontrols from '../../assets/images/sponsors/computercontrols.png';
import ilot from '../../assets/images/sponsors/ilot.png';
import solidexpert from '../../assets/images/sponsors/solidexpert.png';
import wenagroup from '../../assets/images/sponsors/wenagroup.png';
import pwr from '../../assets/images/sponsors/pwr.png';
import w12n from '../../assets/images/sponsors/w12n.png';
import w10 from '../../assets/images/sponsors/w10.png';
import manus from '../../assets/images/sponsors/manus.png';
import symkom from '../../assets/images/sponsors/symkom.png';
import ansys from '../../assets/images/sponsors/ansys.png';
import scanway from '../../assets/images/sponsors/scanway.png';
import satland from '../../assets/images/sponsors/satland.png';
import mitutoyo from '../../assets/images/sponsors/mitutoyo.png';
import wilhelm from '../../assets/images/sponsors/wilhelm.png';
import ministerstwoEdukacjiNauki from '../../assets/images/sponsors/ministerstwo-edukacji-nauki.png';

interface Image {
    src: File;
    alt: string;
    webpage: string;
}

export const Images: Image[] = [
    {
        src: pwr,
        alt: 'Politechnika Wrocławska',
        webpage: 'https://pwr.edu.pl/'
    },
    {
        src: w12n,
        alt: 'Wydział Elektroniki, Fotoniki i Mikrosystemów Politechniki Wrocławskiej',
        webpage: 'https://wefim.pwr.edu.pl/'
    },
    {
        src: w10,
        alt: 'Wydział Mechaniczny Politechniki Wrocławskiej',
        webpage: 'https://wm.pwr.edu.pl/'
    },
    {
        src: manus,
        alt: 'Fundacja Manus przy Politechnice Wrocławskiej',
        webpage: 'https://manus.pl/'
    },
    {
        src: ministerstwoEdukacjiNauki,
        alt: 'Ministerstwo Edukacji i Nauki',
        webpage: 'https://www.gov.pl/web/edukacja-i-nauka'
    },
    {
        src: airproducts,
        alt: 'Air Products logo',
        webpage: 'https://www.airproducts.com.pl/'
    },
    {
        src: ataszek,
        alt: 'Ataszek logo',
        webpage: 'https://ataszek.pl/'
    },
    {
        src: computercontrols,
        alt: 'Computer Controls logo',
        webpage: 'https://www.ccontrols.net/'
    },
    {
        src: ilot,
        alt: 'ILot logo',
        webpage: 'https://ilot.lukasiewicz.gov.pl/'
    },
    {
        src: symkom,
        alt: 'Symkom logo',
        webpage: 'https://symkom.pl'
    },
    {
        src: ansys,
        alt: 'Ansys logo',
        webpage: 'https://www.ansys.com'
    },
    {
        src: solidexpert,
        alt: 'Solid Expert logo',
        webpage: 'https://solidexpert.com/'
    },
    {
        src: wenagroup,
        alt: 'Wena Group logo',
        webpage: 'http://www.wenagroup.com/'
    },
    {
        src: scanway,
        alt: 'Scanway Space logo',
        webpage: 'https://scanway.space'
    },
    {
        src: satland,
        alt: 'Satland logo',
        webpage: 'https://www.prototypy.com/t/1,Strona_glowna'
    },
    {
        src: mitutoyo,
        alt: 'Mitutoyo logo',
        webpage: 'https://mitutoyo.pl/pl_pl'
    },
    {
        src: wilhelm,
        alt: 'Wilhelm logo',
        webpage: 'https://www.coindustry.pl/Maszyny-katalogowe-menu.html'
    }
];
