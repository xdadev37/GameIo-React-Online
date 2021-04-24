import React, { useState, useEffect, useMemo } from 'react'
import styles from '../styles.module.css'
import Login from '../Login/index'
import Home from './HomeComponent'
import { useTranslation } from 'react-i18next'

const Navbar = () => {
    const [loginButton, setLoginButton] = useState(false)
    const [loggedIn, setLoggedIn] = useState(true)
    const [loginButtonText, setLoginButtonText] = useState()
    const { t, i18n } = useTranslation()
    const changeLanguage = (lang) => {
        i18n.changeLanguage(lang)
    }


    const red = '#ff3b30'
    const logoutLeave = useMemo(() => {
        const logoutLeave = {
            color: red,
            borderColor: red
        }
        return logoutLeave
    }, [])
    const [logoutStyle, setLogoutStyle] = useState(logoutLeave)

    useEffect(() => {
        const logout = {
            backgroundColor: red
        }
        if (loggedIn === false) { setLoginButtonText(<li onClick={() => { setLoginButton(false); setLoggedIn(true); }} style={logoutStyle} className={styles.login} onMouseOver={() => setLogoutStyle(logout)} onMouseUp={() => setLogoutStyle(logoutLeave)} >{t('navbar.logout')}</li>) }
        else { setLoginButtonText(<li onClick={() => setLoginButton(true)} className={styles.login} >{t('navbar.login')}</li>) }
    }, [loggedIn, logoutLeave, logoutStyle, t])

    return (<div className={styles.navbar}>
        <span onClick={() => { document.getElementById('navbar').classList.toggle(styles.hamMenuOpened) }}></span>
        <nav className={styles.leftNav} >
            <Home />
            <li onClick={() => {
                window.scrollTo(0, 750)
            }} >{t('navbar.guide')}</li>
            <li onClick={() => {
                window.scrollTo(0, 1500)
            }} >{t('navbar.game')}</li>
            <a href="#about"><li >{t('navbar.about')}</li></a>
        </nav>
        <nav className={styles.rightNav} >
            <button onClick={() => { changeLanguage('en'); document.getElementsByTagName('html')[0].setAttribute('style', 'direction: ltr;') }}>EN</button>
            <button onClick={() => { changeLanguage('fa'); document.getElementsByTagName('html')[0].setAttribute('style', 'direction: rtl;') }}>FA</button>
            {loginButton ? <Login setLoggedIn={setLoggedIn} setLoginButton={setLoginButton} /> : loginButtonText}
        </nav >
    </div >);
}

export default Navbar;