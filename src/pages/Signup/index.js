import React from 'react'
import styles from '../styles.module.css'
import Home from '../Navbar/HomeComponent'
import { useTranslation } from 'react-i18next'

const Signup = () => {
    const { t } = useTranslation()

    return (<div className={styles.signUp}>
        <nav className={styles.leftNav}>
            <Home />
        </nav>
        <div className={styles.signUpPage} >
            <form>
                <h1>{t('signUp.topic')}</h1>
                <br />
                <div className={styles.initialForm}>
                    <label htmlFor="fname">{t('signUp.fname')}
                        <input required type="text" placeholder=' First Name' />
                    </label>
                    <label htmlFor="lname">{t('signUp.lname')}
                        <input required type="text" placeholder=' Last Name' />
                    </label>
                </div>
                <br />
                <hr width='80%' />
                <h3>{t('signUp.birthday')}</h3>
                <div className={styles.birthdayForm}>
                    <label htmlFor="year">{t('signUp.year')}
                        <input required type="number" placeholder=' Year' />
                    </label>
                    <label htmlFor="month">{t('signUp.month')}
                        <input required type="text" placeholder=' Month' />
                    </label>
                    <label htmlFor="day">{t('signUp.day')}
                        <input required type="number" placeholder=' Day' />
                    </label>
                </div>
                <br />
                <hr width='80%' />
                <label htmlFor="phone">{t('signUp.phoneNo')}</label>
                <input required type="number" placeholder=' Phone no.' />
                <label htmlFor="address">{t('signUp.address')}</label>
                <input required type="text" placeholder=' Address ...' />
                <label htmlFor="email">{t('signUp.email')}</label>
                <input required type="email" placeholder=' E-mail ...' />
                <label htmlFor="pwd">{t('signUp.password')}</label>
                <input required type="password" placeholder=' Password ...' />
                <p>
                    <input type="checkbox" name='checkbox' />{t('signUp.checkbox')}</p>
                <button>{t('signUp.submit')}</button>
            </form>
        </div>
    </div>);
}

export default Signup;