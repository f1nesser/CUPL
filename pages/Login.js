import Image from 'next/image'
import NavBar from '../components/navbar/NavBar'
import styles from './login.module.css'
import bgImage from '../public/newHome.jpg'
import { useState } from 'react'
import { useSession, signOut, getCsrfToken } from 'next-auth/react'

export async function getServerSideProps(context) {
    return {
        props: {
            csrfToken: await getCsrfToken(context),
        },
    }
}

export default function Login({ csrfToken }) {
    const { data: session } = useSession()
    return (
        <>
            <div className={styles.container}>
                <NavBar session={session} />
                <div className={styles.contentAndImageContainer}>
                    <div className={styles.imageContainer}>
                        <Image src={bgImage} className={styles.image} />
                    </div>
                    <div className={styles.overlay} />
                    <div className={styles.contentContainer}>
                        {session ? (
                            <Logout userName={session.user.name} />
                        ) : (
                            //prop drilling
                            <Content csrfToken={csrfToken} />
                        )}
                    </div>
                </div>
            </div>
        </>
    )
}

function LoginForm({ csrfToken }) {
    return (
        <>
            <h1>Login</h1>
            <form
                className={styles.form}
                method="post"
                action="/api/auth/callback/credentials"
            >
                <input
                    name="csrfToken"
                    type="hidden"
                    defaultValue={csrfToken}
                />
                <label>
                    <h3>Username</h3>
                </label>
                <input
                    type="text"
                    name="username"
                    placeholder="johnnyappleseed"
                />

                <label>
                    <h3>Password</h3>
                </label>
                <input type="password" name="password" placeholder="password" />
                <button type="submit">login</button>
            </form>
        </>
    )
}

function Logout({ userName }) {
    return (
        <>
            <h1>You are currently signed in as {userName}</h1>
            <button onClick={() => signOut()}>sign out </button>
        </>
    )
}

function SignUpForm() {
    //was this even worth not doing inline?

    let typableInput = [
        {
            name: 'firstName',
            type: 'text',
            placeholder: 'Johnny',
            labelText: 'First Name',
        },
        {
            name: 'lastName',
            type: 'text',
            placeholder: 'AppleSeed',
            labelText: 'Last Name',
        },
        {
            name: 'userName',
            type: 'text',
            placeholder: 'JSeed1',
            labelText: 'Username',
        },
        {
            name: 'major',
            type: 'text',
            placeholder: 'computer science',
            labelText: "What's your major?",
        },
        {
            name: 'homeTown',
            type: 'text',
            placeholder: 'Mililani',
            labelText: "Where's your home town?",
        },
    ]
    let handleSubmit = async (e) => {
        e.preventDefault()
        if (e.target['8'].value != e.target['9'].value) {
            alert('Ensure that your passwords match')
            return
        }
        if (e.target['8'].value === '' || e.target['9'].value === '') {
            alert('Passwords cannot be blank')
            return
        }
        const signUpValues = {
            firstName: e.target['0'].value,
            lastName: e.target['1'].value,
            userName: e.target['2'].value,
            major: e.target['3'].value,
            homeTown: e.target['4'].value,
            year: e.target['5'].value,
            sex: e.target['6'].value,
            clubRole: e.target['7'].value,
            password: e.target['8'].value,
        }
        let res = await fetch('/api/signUp', {
            method: 'POST',
            body: JSON.stringify(signUpValues),
        })
        if (res.status === 406) {
            alert('username aleady taken')
        }
        if (res.status === 200) {
            alert('Account created ')
        }
    }
    return (
        <>
            <h1>Sign Up</h1>
            <form className={styles.form} onSubmit={handleSubmit}>
                {typableInput.map((inputField) => {
                    return (
                        <>
                            <label key={inputField.name}>
                                {inputField.labelText}
                            </label>
                            <input
                                type={inputField.type}
                                name={inputField.name}
                                placeholder={inputField.placeholder}
                            />
                        </>
                    )
                })}
                <label>What year are you?</label>
                <select name="year" id="year">
                    <option value="Freshman">Freshman</option>
                    <option value="Sophmore">Sophmore</option>
                    <option value="Junior">Junior</option>
                    <option value="Senior">Senior</option>
                </select>

                <label htmlFor="gender">What&apos;s your sex?</label>
                <select name="gender" id="gender">
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                </select>
                <label htmlFor="active">Are you an active CUPL member?</label>
                <select name="active" id="active">
                    <option value="inactive">no</option>
                    <option value="active">yes</option>
                </select>
                <label>Password</label>
                <input type="password" name="password" placeholder="password" />
                <label>Confirm Password</label>
                <input
                    type="password"
                    name="confirmPassword"
                    placeholder="confirm password"
                />
                <button type="submit">Sign Up</button>
            </form>
        </>
    )
}

function Content({ csrfToken }) {
    const [newUser, setNewUser] = useState(false)

    return (
        <>
            {newUser ? <SignUpForm /> : <LoginForm csrfToken={csrfToken} />}
            <button type="button" onClick={() => setNewUser(!newUser)}>
                {newUser
                    ? 'Already have an account? Login'
                    : "Don't have an account? Sign up"}
            </button>
        </>
    )
}
