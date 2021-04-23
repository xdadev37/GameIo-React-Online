import React from 'react'
import styles from '../styles.module.css'
import { Trans, useTranslation } from 'react-i18next'

const Game = () => {
    const { t } = useTranslation()

    window.onscroll = () => {
        if (window.scrollY > 750) {
            document.getElementById('gamePage').classList.add(styles.gamePageAnime)
        }
    }

    return (<div id='gamePage' className={styles.gamePage} >
        <div>
            <h2>{t('gamePage.topic')}</h2>
            <Trans i18nKey='gamePage.textOnline'>
                <p><br /><br /></p>
            </Trans>
        </div>
        <div>
            <h2>{t('gamePage.topic2')}</h2>
            <Trans i18nKey='gamePage.textMulti'>
                <p><br /><br /></p>
            </Trans>
        </div>
    </div>)
}

export default Game;