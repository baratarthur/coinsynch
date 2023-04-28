import { CoinsynchTitle } from "@/components/coinsynch-title";
import { Modal } from "..";
import { Button } from "@/components/button";

import styles from './SignInModal.module.css';
import { usersApi } from "@/core/api";
import { useRouter } from "next/router";
import { useContext, useState } from "react";
import { AuthContext } from "@/core/context/auth";

export function SignInModal({
    isSignInModalOpen,
    closeSignInModal,
    switchToSignUp
}) {
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const { setSession } = useContext(AuthContext);

    const loginAndNavigateToDashboard = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        setLoading(true);

        usersApi.get('users', {
            params: {
                email,
                password
            }
        }).then((response) => {
            const user = response.data[0];

            if(user) {
                setSession(user);
                setLoading(false);
                router.push('/dashboard');
            } else {
                console.error("usuário não encontrado ou senha incorreta!");
            }
        })
    }
    
    return (
        <Modal isOpen={isSignInModalOpen} onClose={closeSignInModal}>
            <h2 className={styles.modal__title}>
                <span>Sign in to</span>
                <CoinsynchTitle />
            </h2>
            <form className={styles.signin}
                onSubmit={loginAndNavigateToDashboard}>
                <input className={styles.signin__input}
                    disabled={loading}
                    name="email"
                    type="email"
                    placeholder='Email'/>
                <input className={styles.signin__input}
                    disabled={loading}
                    name="password"
                    type="password"
                    placeholder='Password'/>
                <Button disabled={loading}
                    role='submit'
                    label='Sign in'/>
            </form>
            <p className={styles.signup__link}>
                Don&apos;t have an account?
                <Button transparent
                    label='Sign up to CoinSynch'
                    click={switchToSignUp}/>
            </p>
        </Modal>
    )
}
