import React from 'react'
import styles from '../styles.module.css'
import { useTranslation } from 'react-i18next'

const Guide = () => {
    const { t } = useTranslation()

    return (
        <div className={styles.guidePage} >
            <span />
            <h1>{t('guidePage.topic')}</h1>
            <p>{t('guidePage.text')}</p>
            <span />
        </div>
    );
}

export default Guide;