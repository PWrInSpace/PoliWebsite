import React from 'react';
import styles from './assets/about-us.module.scss';
import IconCircle from '../../assets/icons/IconCircle';
import AboutUsParagraph from './components/AboutUsParagraph';
import NumberContainerComponent from '../../components/number-container-component/NumberContainerComponent';
import { Paragraphs } from '../../utils/enums/aboutParagraphList';
import { SubpageWrapper } from '../../components/subpage-wrapper/SubpageWrapper';

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
        <SubpageWrapper title={__('aboutUsPage.header')}>
            <>
                <div>
                    <div className={styles.firstIconCircle}>
                        <IconCircle/>
                    </div>
                    <div className={styles.secondIconCircle}>
                        <IconCircle/>
                    </div>
                </div>
                {createParagraph()}
                <div className={styles.numbersContainer}>
                    <NumberContainerComponent number={60} title={__('aboutUsPage.numbers.firstNumber')} />
                    <NumberContainerComponent number={2017} title={__('aboutUsPage.numbers.secondNumber')} />
                    <NumberContainerComponent number={12} title={__('aboutUsPage.numbers.thirdNumber')} />
                </div>
            </>
        </SubpageWrapper>
    );
}
