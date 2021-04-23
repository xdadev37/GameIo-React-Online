import React from 'react'
import styles from '../styles.module.css'
import { useTranslation } from 'react-i18next'

const Home = () => {
    const { t } = useTranslation()

    return (<>
        <a href='/' ><span className={styles.logo} >\/<sup>\/</sup>\/</span></a>
        <a href='/' ><li>{t('home')}</li></a>
    </>);
}

export default Home;