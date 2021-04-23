import React from 'react'
import styles from '../styles.module.css'
import { useTranslation } from 'react-i18next'

const MainPage = () => {
    const { t } = useTranslation()

    return (
        <div className={styles.mainPage} >
            <p>{t('mainPage')}</p>
        </div>
    )
}

export default MainPage;