import React from 'react';
import styles from './assets/join-us.module.scss';
import subpageBackground from '../../assets/subpageBackground.png';
import JoinDepartmentContainer from '../../components/join-department-container/JoinDepartmentContainer';
import acs from '../../assets/join-us-images/acs.png';
import elektronika from '../../assets/join-us-images/elektronika.png';
import odzysk from '../../assets/join-us-images/odzysk.png';
import payload from '../../assets/join-us-images/payload.png';
import polifloater from '../../assets/join-us-images/polifloater.png';
import pr from '../../assets/join-us-images/pr.png';
import webdev from '../../assets/join-us-images/webdev.png';
import silniki from '../../assets/join-us-images/silniki.png';
import struktura from '../../assets/join-us-images/struktura.png';

const departments = {
    'struktura': {
        'header': 'joinUsPage.departments.struktura.header',
        'text': 'joinUsPage.departments.struktura.text',
        'image': struktura
    },
    'silniki': {
        'header': 'joinUsPage.departments.silniki.header',
        'text': 'joinUsPage.departments.silniki.text',
        'image': silniki
    },
    'pr': {
        'header': 'joinUsPage.departments.pr.header',
        'text': 'joinUsPage.departments.pr.text',
        'image': pr
    },
    'payload': {
        'header': 'joinUsPage.departments.payload.header',
        'text': 'joinUsPage.departments.payload.text',
        'image': payload
    },
    'odzysk': {
        'header': 'joinUsPage.departments.odzysk.header',
        'text': 'joinUsPage.departments.odzysk.text',
        'image': odzysk
    },
    'elektronika': {
        'header': 'joinUsPage.departments.elektronika.header',
        'text': 'joinUsPage.departments.elektronika.text',
        'image': elektronika
    },
    'acs': {
        'header': 'joinUsPage.departments.acs.header',
        'text': 'joinUsPage.departments.acs.text',
        'image': acs
    },
    'polifloater': {
        'header': 'joinUsPage.departments.polifloater.header',
        'text': 'joinUsPage.departments.polifloater.text',
        'image': polifloater
    },
    'webdev': {
        'header': 'joinUsPage.departments.webdev.header',
        'text': 'joinUsPage.departments.webdev.text',
        'image': webdev
    }
};

export default function JoinUs(){
    const createParagraphs = () => {
        return Object.keys(departments).map((department, index) => {
            return <JoinDepartmentContainer image={__(departments[department].image)} header={__(departments[department].header)} text={__(departments[department].text)} imageOnLeft={index % 2 === 0} onClick={() => window.open('https://docs.google.com/forms/d/e/1FAIpQLSf-aeTqPVKXVolgZyAsSVKhb2wuBDK5Izzq-5-eBxqQi-xKTw/viewform', '_blank')}/>;
        });
    };

    return(
        <div className={styles.container}>
            <img src={subpageBackground} alt="subpage background" className={styles.background}/>
            <div className={styles.wrapper}>
                <div className={styles.header}>
                    {__('joinUsPage.header')}
                </div>
                <div className={styles.divider}></div>
                <button className={styles.button} onClick={() => window.open('https://docs.google.com/forms/d/e/1FAIpQLSf-aeTqPVKXVolgZyAsSVKhb2wuBDK5Izzq-5-eBxqQi-xKTw/viewform', '_blank')}>
                    {__('joinUsPage.form')}
                </button>
                <div className={styles.textContainer}>
                    {createParagraphs()}
                </div>
            </div>
        </div>
    );
}