import React from 'react';
import styles from './assets/join-us.module.scss';
import subpageBackground from '../../assets/images/backgrounds/subpageBackground.png';
import JoinDepartmentContainer from './components/JoinDepartmentContainer';
import acs from '../../assets/images/join-us/acs.png';
import elektronika from '../../assets/images/join-us/elektronika.png';
import odzysk from '../../assets/images/join-us/odzysk.png';
import payload from '../../assets/images/join-us/payload.png';
import polifloater from '../../assets/images/join-us/polifloater.png';
import pr from '../../assets/images/join-us/pr.png';
import webdev from '../../assets/images/join-us/webdev.png';
import silniki from '../../assets/images/join-us/silniki.png';
import struktura from '../../assets/images/join-us/struktura.png';
import { SubpageTitle } from '../../components/subpage-title/SubpageTitle';

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
    'webdev': {
        'header': 'joinUsPage.departments.webdev.header',
        'text': 'joinUsPage.departments.webdev.text',
        'image': webdev
    },
    'payload': {
        'header': 'joinUsPage.departments.payload.header',
        'text': 'joinUsPage.departments.payload.text',
        'image': payload
    },
    'polifloater': {
        'header': 'joinUsPage.departments.polifloater.header',
        'text': 'joinUsPage.departments.polifloater.text',
        'image': polifloater
    }
};

export default function JoinUs(){
    const createParagraphs = () => {
        return Object.keys(departments).map((department, index) => {
            return <JoinDepartmentContainer image={__(departments[department].image)} header={__(departments[department].header)} text={__(departments[department].text)} onClick={() => window.open('https://docs.google.com/forms/d/e/1FAIpQLSf-aeTqPVKXVolgZyAsSVKhb2wuBDK5Izzq-5-eBxqQi-xKTw/viewform', '_blank')} key={index}/>;
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