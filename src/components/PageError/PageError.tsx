import styles from "./PageError.module.scss"

export function PageMessage({ message }: { message: string }) {
    return (
        <div className={styles.err}>{message}</div>
    )
}