import React from 'react';
import styles from './assets/join-us.module.scss';
import subpageBackground from '../../assets/images/backgrounds/subpageBackground.png';
import JoinDepartmentContainer from './components/JoinDepartmentContainer';
import { SubpageTitle } from '../../components/subpage-title/SubpageTitle';
import { Departments } from '../../utils/enums/departmentsList';

export default function JoinUs(){
    const createParagraphs = () => {
        return Departments.map((department, index) => {
            return <JoinDepartmentContainer
                image={String(department.image)}
                header={__(department.header)}
                text={__(department.text)}
                key={index}
            />;
        });
    };

    return(
        <div className={styles.container}>
            <img src={subpageBackground} alt="subpage background" className={styles.background}/>
            <div className={styles.wrapper}>
                <SubpageTitle title={__('joinUsPage.header')}/>

                {/*<button className={styles.button} onClick={() => window.open('https://docs.google.com/forms/d/e/1FAIpQLSf-aeTqPVKXVolgZyAsSVKhb2wuBDK5Izzq-5-eBxqQi-xKTw/viewform', '_blank')}>*/}
                {/*    {__('joinUsPage.form')}*/}
                {/*</button>*/}

                <div className={styles.textContainer}>
                    {createParagraphs()}
                </div>
            </div>
        </div>
    );
}