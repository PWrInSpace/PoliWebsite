import React from 'react';
import styles from './assets/rocket-specs.module.scss';
import SmallLengthIcon from '../../icons/SmallLengthIcon';
import SmallThrustIcon from '../../icons/SmallThrustIcon';
import SmallVelocityIcon from '../../icons/SmallVelocityIcon';
import SmallWeightIcon from '../../icons/SmallWeightIcon';
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