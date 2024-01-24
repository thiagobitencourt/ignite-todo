import styles from './Header.module.css';
import { LogoIcon } from '../Icons/Icons';

export function Header() {
    return (
        <header className={styles.header}>
            <LogoIcon />
        </header>
    )
}
