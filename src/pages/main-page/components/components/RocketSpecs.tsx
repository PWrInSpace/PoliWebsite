import React from 'react';
import styles from './assets/rocket-specs.module.scss';
import SmallLengthIcon from '../../../../assets/icons/SmallLengthIcon';
import SmallThrustIcon from '../../../../assets/icons/SmallThrustIcon';
import SmallVelocityIcon from '../../../../assets/icons/SmallVelocityIcon';
import SmallWeightIcon from '../../../../assets/icons/SmallWeightIcon';
import RocketSpecsWrapper from './RocketSpecsWrapper';

interface IProps {
    length: string;
    thrust: string;
    weight: string;
    velocity: string;
}

export default function RocketSpecs(props: IProps) {
    return(
        <div className={styles.specsContainer}>
            <RocketSpecsWrapper icon={<SmallLengthIcon/>} text={__('mainPage.ourProjects.rockets.specs.length')} value={props.length}/>
            <RocketSpecsWrapper icon={<SmallThrustIcon/>} text={__('mainPage.ourProjects.rockets.specs.thrust')} value={props.thrust}/>
            <RocketSpecsWrapper icon={<SmallWeightIcon/>} text={__('mainPage.ourProjects.rockets.specs.weight')} value={props.weight}/>
            <RocketSpecsWrapper icon={<SmallVelocityIcon/>} text={__('mainPage.ourProjects.rockets.specs.velocity')} value={props.velocity}/>
        </div>
    );
}