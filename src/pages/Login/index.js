import React, { useState } from 'react'
import styles from '../styles.module.css'
import { useTranslation } from 'react-i18next'
import axios from 'axios'

const Login = props => {
    const { t } = useTranslation()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleEmail = (e) => {
        setEmail(e.target.value)
    }
    const handlePassword = (e) => {
        setPassword(e.target.value)
    }

    const submit = () => {
        axios.post('https://reqres.in/api/login', {
            email: email,
            password: password
        }).then(res => {
            console.log(res)
            if (res.status === 200) {
                props.setLoggedIn(false)
                props.setLoginButton(false)
            } else {
                alert('Incorrect')
            }
        }).catch(error => {
            console.log(error)
        })
    }

    return (<div className={styles.loginPage}>
        <form>
            <span onClick={() => { props.setLoginButton(false); }}></span>
            <label htmlFor="email">{t('loginPage.email')}
                <input type="email" onChange={handleEmail} placeholder='eve.holt@reqres.in' />
            </label>
            <label htmlFor="password">{t('loginPage.password')}
                <input type="password" onChange={handlePassword} placeholder='cityslicka' />
            </label>
            <button onClick={(e) => { e.preventDefault(); submit() }}>{t('loginPage.login')}</button>
        </form>
    </div>);
}

export default Login;