import styles from './Checkbox.module.css';

export function Checkbox({ checked, onChange }) {
    return (
        <label className={styles.container}>
            <input type="checkbox" checked={checked} onChange={(e) => onChange(e)} />
            <span className={styles.checkmark}></span>
        </label>
    )
}
