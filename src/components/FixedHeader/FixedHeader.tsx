import styles from "./FixedHeader.module.scss"
export function FixedHeader() {
    return (
        <header className={styles.header}>
            <div className={styles.header__top}>
                <div className={styles.header__container}>
                    <div className={styles.header__body_top}>
                        <a href="#" className={styles.header__logo}>
                            <img src="./public/logo.svg" alt="logo" />
                        </a>
                        <form action="#" className={styles.header__form}>
                            <input className={styles.header__form_input} type="text" placeholder="Find a drink..." />
                            <button className={styles.header__form_btn} type="submit">
                                <img src="./src/assets/search.svg" alt="search" />
                            </button>
                        </form>
                        <div className={styles.header__buttons}>
                            <button className={styles.header__order}>Make an order</button>
                            <button className={styles.header__contact}>Contact us</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.header__bottom}>
                <div className={styles.header__container}>
                    <div className={styles.header__body_bottom}>
                        <nav className={styles.header__menu}>
                            <ul className={styles.header__ul}>
                                <li className={styles.header__li}>
                                    <a className={styles.header__a} href="#">Gift sets</a>
                                </li>
                                <li className={styles.header__li}>
                                    <a className={styles.header__a} href="#">Wine and alcohol</a>
                                </li>
                                <li className={styles.header__li}>
                                    <a className={styles.header__a} href="#">Delicacies</a>
                                </li>
                                <li className={styles.header__li}>
                                    <a className={styles.header__a} href="#">Glasses and candles</a>
                                </li>
                            </ul>
                        </nav>
                        <div className={styles.header__buy}>
                            <button className={styles.header__wish}>
                                <img src="./src/assets/wish.svg" alt="wishlist" />
                            </button>
                            <button className={styles.header__cart}>
                                <img src="./src/assets/shopping-cart.svg" alt="wishlist" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}