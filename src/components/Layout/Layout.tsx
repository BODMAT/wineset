import { Outlet } from "react-router-dom";
import { FixedHeader } from "../FixedHeader/FixedHeader";
import styles from "./Layout.module.scss";
import { FixedFooter } from "../FixedFooter/FixedFooter";

export function Layout() {
    return (
        <div className={styles.wrapper}>
            <FixedHeader />
            <main className={styles.main}>
                <Outlet />
            </main>
            <FixedFooter />
        </div>
    );
}