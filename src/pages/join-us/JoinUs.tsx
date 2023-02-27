import React from 'react';
import styles from './assets/join-us.module.scss';
import subpageBackground from '../../assets/subpageBackground.png';
import JoinDepartmentContainer from '../../components/join-department-container/JoinDepartmentContainer';
import pr from '../../assets/join-us-images/pr.png';

const departments = {
    'struktura': {
        'header': 'joinUsPage.departments.struktura.header',
        'text': 'joinUsPage.departments.struktura.text',
        'image': pr
    },
    'silniki': {
        'header': 'joinUsPage.departments.silniki.header',
        'text': 'joinUsPage.departments.silniki.text',
        'image': pr
    },
    'pr': {
        'header': 'joinUsPage.departments.pr.header',
        'text': 'joinUsPage.departments.pr.text',
        'image': pr
    },
    'payload': {
        'header': 'joinUsPage.departments.payload.header',
        'text': 'joinUsPage.departments.payload.text',
        'image': pr
    },
    'odzysk': {
        'header': 'joinUsPage.departments.odzysk.header',
        'text': 'joinUsPage.departments.odzysk.text',
        'image': pr
    },
    'elektronika': {
        'header': 'joinUsPage.departments.elektronika.header',
        'text': 'joinUsPage.departments.elektronika.text',
        'image': pr
    },
    'acs': {
        'header': 'joinUsPage.departments.acs.header',
        'text': 'joinUsPage.departments.acs.text',
        'image': pr
    },
    'polifloater': {
        'header': 'joinUsPage.departments.polifloater.header',
        'text': 'joinUsPage.departments.polifloater.text',
        'image': pr
    }
};

export default function JoinUs(){
    return(
        <div className={styles.container}>
            <img src={subpageBackground} alt="subpage background" className={styles.background}/>
            <div className={styles.wrapper}>
                <div className={styles.header}>
                    {__('joinUsPage.header')}
                </div>
                <div className={styles.divider}></div>
                <div className={styles.textContainer}>
                    <JoinDepartmentContainer image={__(departments.pr.image)} header={__(departments.pr.header)} text={__(departments.pr.text)} imageOnLeft={true}/>
                    <JoinDepartmentContainer image={__(departments.silniki.image)} header={__(departments.silniki.header)} text={__(departments.silniki.text)} imageOnLeft={false}/>
                </div>
            </div>
        </div>
    );
}