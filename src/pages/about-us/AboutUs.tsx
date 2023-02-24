import React from 'react';
import styles from './assets/about-us.module.scss';
import subpageBackground from '../../assets/subpageBackground.png';
import firstImage from '../../assets/aboutUsPage/image1.png';
import secondImage from '../../assets/aboutUsPage/image2.png';
import IconCircle from '../../icons/IconCircle';
import AboutUsParagraph from '../../components/about-us-paragraph/AboutUsParagraph';
import NumberContainerComponent from '../../components/number-container-component/NumberContainerComponent';

export default function AboutUs() {
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
                <div className={styles.paragraph}>
                    <AboutUsParagraph title={__('aboutUsPage.firstParagraph.title')} subtitle={__('aboutUsPage.firstParagraph.subtitle')} text={__('aboutUsPage.firstParagraph.text')} wrapper={styles.firstWrapper}/>
                    <img src={firstImage} alt="PWr in Space crew" className={styles.paragraphImage} />
                </div>
                <div className={styles.paragraph}>
                    <img src={secondImage} alt="PWr in Space crew" className={styles.paragraphImage} />
                    <AboutUsParagraph title={__('aboutUsPage.secondParagraph.title')} subtitle={__('aboutUsPage.secondParagraph.subtitle')} text={__('aboutUsPage.secondParagraph.text')} wrapper={styles.secondWrapper}/>
                </div>
                <div className={styles.numbersContainer}>
                    <NumberContainerComponent number={1234} title={__('aboutUsPage.numbers.firstNumber')} />
                    <NumberContainerComponent number={1234} title={__('aboutUsPage.numbers.secondNumber')} />
                    <NumberContainerComponent number={1234} title={__('aboutUsPage.numbers.thirdNumber')} />
                </div>
            </div>
        </div>
    );
}