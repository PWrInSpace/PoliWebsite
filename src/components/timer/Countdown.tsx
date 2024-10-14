import { useCallback, useEffect, useState } from "react";
import styles from "./countdown.module.scss";
import { Link } from "react-router-dom";

interface IProps {
    date: Date;
    title: string;
    link?: string;
  }
  
export const Countdown = (props: IProps) => {

  const calculateTimeLeft = useCallback(() => {
    const difference = +props.date - +new Date();
    
    if (difference > 0) {
      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      };
    }

    return null;
  }, [props.date]);

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearTimeout(timer);
  });

  const getFormattedNuber = useCallback((value?: number) => {
    if (!value) {
      return "00";
    }

    if (value < 10) {
      return "0" + value;
    }

    return value;
  }, []);

  return (
    <div className={styles.wrapper}>
      {props.link ? <Link to={props.link}> <span className={styles.title}>&raquo;{props.title}&laquo;</span></Link> : <span className={styles.title}>{props.title}</span>}
      <span className={styles.timer}>{getFormattedNuber(timeLeft?.days)}:{getFormattedNuber(timeLeft?.hours)}:{getFormattedNuber(timeLeft?.minutes)}:{getFormattedNuber(timeLeft?.seconds)} </span>
    </div>
  );
};
  