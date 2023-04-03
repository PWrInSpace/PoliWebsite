import React from 'react';
import styles from './assets/about-us.module.scss';
import subpageBackground from '../../assets/images/backgrounds/subpageBackground.png';
import IconCircle from '../../assets/icons/IconCircle';
import AboutUsParagraph from './components/AboutUsParagraph';
import NumberContainerComponent from '../../components/number-container-component/NumberContainerComponent';
import { SubpageTitle } from '../../components/subpage-title/SubpageTitle';
import { Paragraphs } from '../../utils/enums/aboutParagraphList';

export default function AboutUs() {
    const createParagraph = () => {
        return Paragraphs.map((paragraph, key) => {
            if (paragraph.image.position === 'right') {
                return (
                    <div className={styles.paragraph} key={key}>
                        <AboutUsParagraph
                            title={__(paragraph.title)}
                            subtitle={__(paragraph.subtitle)}
                            text={__(paragraph.text)}
                            wrapper={styles.firstWrapper}
                        />
                        <img
                            src={String(paragraph.image.src)}
                            alt={paragraph.image.alt}
                            className={styles.paragraphImage}
                        />
                    </div>
                );
            } else if (paragraph.image.position === 'left') {
                return (
                    <div className={styles.paragraph} key={key}>
                        <img
                            src={String(paragraph.image.src)}
                            alt={paragraph.image.alt}
                            className={styles.paragraphImage}
                        />
                        <AboutUsParagraph
                            title={__(paragraph.title)}
                            subtitle={__(paragraph.subtitle)}
                            text={__(paragraph.text)}
                            wrapper={styles.secondWrapper}
                        />
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
                <SubpageTitle title={__('aboutUsPage.header')}/>
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