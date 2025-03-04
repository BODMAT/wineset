import styles from "./PageArticles.module.scss"
export function IntroArticles() {
    return (
        <section className={styles.container}>
            <div className="flex items-center justify-between max-lg:flex-col gap-[40px] pt-[40px]">
                <h2 className={`${styles.title} max-w-[555px] max-lg:text-center`}>Articles about wine and strong drinks</h2>
                <div className="flex gap-x-26 gap-y-4 max-w-[740px] max-sm:flex-col">
                    <p className={styles.text}>Simple and clear about wine styles, regions, varieties,  how to choose a wine, what to drink it with and from which glass, the types and characteristics of whiskey, the difference between sparkling wine and champagne.</p>
                    <p className={styles.text}>It also explains the aging process, the influence of climate and soil on taste, how to properly store bottles, the nuances of wine tasting, the key differences between bourbon and scotch, and the secrets behind the finest sparkling wines.</p>
                </div>
            </div>
        </section>
    )
}