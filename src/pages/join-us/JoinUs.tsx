import React from 'react';
import styles from './assets/join-us.module.scss';
import JoinDepartmentContainer from './components/JoinDepartmentContainer';
import { Departments } from '../../common/data/departmentsList';
import { SubpageWrapper } from '../../components/subpage-wrapper/SubpageWrapper';

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
        <SubpageWrapper title={__('joinUsPage.header')}>
            <>
                {/*<button*/}
                {/*    className={styles.button}*/}
                {/*    onClick={() => window.open('https://docs.google.com/forms/d/e/1FAIpQLSf-aeTqPVKXVolgZyAsSVKhb2wuBDK5Izzq-5-eBxqQi-xKTw/viewform', '_blank')}*/}
                {/*>*/}
                {/*    {__('joinUsPage.form')}*/}
                {/*</button>*/}

                <div className={styles.textContainer}>
                    {createParagraphs()}
                </div>
            </>
        </SubpageWrapper>
    );
}