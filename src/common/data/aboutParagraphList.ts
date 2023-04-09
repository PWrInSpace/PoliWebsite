import firstImage from '../../assets/images/about-us-page/image1.png';
import secondImage from '../../assets/images/about-us-page/image2.png';

interface paragraph {
    title: string;
    subtitle: string;
    text: string;
    image: {
        src: File;
        alt: string;
        position: string;
    };
}

export const Paragraphs: paragraph[] = [
    {
        title: 'aboutUsPage.firstParagraph.title',
        subtitle: 'aboutUsPage.firstParagraph.subtitle',
        text: 'aboutUsPage.firstParagraph.text',
        image: {
            src: firstImage,
            alt: 'PWr in Space crew',
            position: 'right'
        }
    },
    {
        title: 'aboutUsPage.secondParagraph.title',
        subtitle: 'aboutUsPage.secondParagraph.subtitle',
        text: 'aboutUsPage.secondParagraph.text',
        image: {
            src: secondImage,
            alt: 'PWr in Space crew',
            position: 'left'
        }
    }
];