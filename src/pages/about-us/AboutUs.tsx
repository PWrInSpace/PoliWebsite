import React from 'react';
import styles from './assets/about-us.module.scss';
import subpageBackground from '../../assets/subpageBackground.png';
import firstImage from '../../assets/about-us-page/image1.png';
import secondImage from '../../assets/about-us-page/image2.png';
import IconCircle from '../../icons/IconCircle';
import AboutUsParagraph from '../../components/about-us-paragraph/AboutUsParagraph';
import NumberContainerComponent from '../../components/number-container-component/NumberContainerComponent';

const paragraphs = {
    'firstParagraph': {
        title: 'aboutUsPage.firstParagraph.title',
        subtitle: 'aboutUsPage.firstParagraph.subtitle',
        text: 'aboutUsPage.firstParagraph.text',
        image: {
            src: firstImage,
            alt: 'PWr in Space crew',
            position: 'right'
        }
    },
    'secondParagraph': {
        title: 'aboutUsPage.secondParagraph.title',
        subtitle: 'aboutUsPage.secondParagraph.subtitle',
        text: 'aboutUsPage.secondParagraph.text',
        image: {
            src: secondImage,
            alt: 'PWr in Space crew',
            position: 'left'
        }
    }
};

export default function AboutUs() {
    const createParagraph = () => {
        return Object.keys(paragraphs).map((paragraph, key) => {
            if (paragraphs[paragraph].image.position === 'right') {
                return (
                    <div className={styles.paragraph} key={key}>
                        <AboutUsParagraph title={__(paragraphs[paragraph].title)} subtitle={__(paragraphs[paragraph].subtitle)} text={__(paragraphs[paragraph].text)} wrapper={styles.firstWrapper}/>
                        <img src={paragraphs[paragraph].image.src} alt={paragraphs[paragraph].image.alt} className={styles.paragraphImage}/>
                    </div>
                );
            } else if (paragraphs[paragraph].image.position === 'left') {
                return (
                    <div className={styles.paragraph} key={key}>
                        <img src={paragraphs[paragraph].image.src} alt={paragraphs[paragraph].image.alt} className={styles.paragraphImage}/>
                        <AboutUsParagraph title={__(paragraphs[paragraph].title)} subtitle={__(paragraphs[paragraph].subtitle)} text={__(paragraphs[paragraph].text)} wrapper={styles.secondWrapper}/>
                    </div>
                );
            }
        });
    };

    return (
        <div className={styles.container}>
            <div>
                <img src={subpageBackground} alt="subpage background" className={styles.background}/>
                <div className={styles.firstIconCircle}>
                    <IconCircle/>
                </div>
                <div className={styles.secondIconCircle}>
                    <IconCircle/>
                </div>
            </div>
            <div className={styles.wrapper}>
                <div className={styles.header}>
                    {__('aboutUsPage.header')}
                </div>
                <div className={styles.divider}></div>
                {createParagraph()}
                <div className={styles.numbersContainer}>
                    <NumberContainerComponent number={60} title={__('aboutUsPage.numbers.firstNumber')} />
                    <NumberContainerComponent number={2017} title={__('aboutUsPage.numbers.secondNumber')} />
                    <NumberContainerComponent number={12} title={__('aboutUsPage.numbers.thirdNumber')} />
                </div>
            </div>
        </div>
    );
}