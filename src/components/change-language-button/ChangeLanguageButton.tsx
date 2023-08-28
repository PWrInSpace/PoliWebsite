import React from 'react';
import Cookies from 'js-cookie';
import { changeLanguage } from 'i18next';
import styles from './change-language-button.module.scss';

export const ChangeLanguageButton = () => {
    const handleChangeLanguage = () => {
        const storedLang = Cookies.get('i18next') ?? 'pl';

        if (storedLang === 'en') {
            changeLanguage('pl');
        } else {
            changeLanguage('en');
        }

        window.location.reload();
    };

    return (
        <button onClick={handleChangeLanguage} className={styles.languageButton}>{__('navbar.language')}</button>
    );
};