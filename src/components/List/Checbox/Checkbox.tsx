import { ChangeEvent } from 'react';
import styles from './Checkbox.module.css';

export interface CheckboxProps {
    checked: boolean;
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

export function Checkbox({ checked, onChange }: CheckboxProps) {
    return (
        <label className={styles.container}>
            <input type="checkbox" checked={checked} onChange={(e) => onChange(e)} />
            <span className={styles.checkmark}></span>
        </label>
    )
}
