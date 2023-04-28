
import { CoinsynchTitle } from '@/components/coinsynch-title';
import styles from './SignUpModal.module.css';
import { Modal } from '..';
import { Button } from '@/components/button';
import { usersApi } from '@/core/api';
import { useRouter } from 'next/router';
import { useContext, useState } from 'react';
import { AuthContext } from '@/core/context/auth';

export function SignUpModal({
    isSignUpModalOpen,
    closeSignUpModal,
    switchToSignIn,
}) {
    const router = useRouter();
    const { setSession } = useContext(AuthContext);
    const [loading, setLoading] = useState(false);

    const signUpAndNavigateToDashboard = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.name.value;
        const password = e.target.password.value;
        const confirmPassword = e.target.confirmPassword.value;

        setLoading(true);

        if(password !== confirmPassword) {
            console.error('Senhas diferentes');
            return;
        }

        usersApi.post('users', {
            name,
            email,
            password
        }).then((response) => {
            const user = response.data;
            
            setSession(user);
            setLoading(false);
            router.push('/dashboard');
        })
    }
    
    return (
        <Modal isOpen={isSignUpModalOpen} onClose={closeSignUpModal}>
            <h2 className={styles.modal__title}>
                <span>Sign up to</span>
                <CoinsynchTitle />
            </h2>
            <form className={styles.signup}
                onSubmit={signUpAndNavigateToDashboard}>
                <input className={styles.signup__input}
                    disabled={loading}
                    name='name'
                    type="text"
                    placeholder='Name'/>
                <input className={styles.signup__input}
                    disabled={loading}
                    name='email'
                    type="email"
                    placeholder='Email'/>
                <input className={styles.signup__input}
                    disabled={loading}
                    name='password'
                    type="password"
                    placeholder='Password'/>
                <input className={styles.signup__input}
                    disabled={loading}
                    name='confirmPassword'
                    type="password"
                    placeholder='Confirm assword'/>
                <Button disabled={loading} role='submit' label='Sign up'/>
            </form>
            <p className={styles.signup__link}>
                Already have and account?
                <Button transparent
                    label='Sign in to CoinSynch'
                    click={switchToSignIn}/>
            </p>
        </Modal>
    )
}
