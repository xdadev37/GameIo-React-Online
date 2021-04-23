import React from 'react'
import styles from '../styles.module.css'
import { useTranslation } from 'react-i18next'

const About = () => {
    const { t } = useTranslation()

    return (<div id='about' className={styles.about} >
        <nav>
            <h3>{t('aboutPage.callInfo')}</h3>
            <i>{t('aboutPage.callNo')}</i>
            <i>{t('aboutPage.address')}</i>
        </nav>
        <nav>
            <h3>{t('aboutPage.aboutUs')}</h3>
            <i>{t('aboutPage.JDCo')}</i>
            <i>{t('aboutPage.Entertainment')}</i>
            <i>{t('aboutPage.Tehran')}</i>
        </nav>
    </div>);
}

export default About;