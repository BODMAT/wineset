import styles from "./PageArticles.module.scss"
import { ArticlesInfo } from "../../data/Other/Articles"
import { ArticleTemplate } from "./ArticleTemplate"
import { Link } from "react-router-dom"
import { useOpacity } from "../../hooks/useOpacity";
import { IArticleProps } from "../../types/interfaces";
export function Articles() {
    const { opacity, blockRef } = useOpacity();
    return (
        <section ref={blockRef} className={`${styles.container} relative flex flex-wrap gap-[10px] !pt-[70px] !pb-[70px] !max-md:pt-[40px]`}>
            {ArticlesInfo.map((article: IArticleProps, index: number) => {
                return (
                    <div key={index} className="flex-[0_1_calc(50%-10px)] max-lg:flex-[1_1_100%] relative z-2">
                        <ArticleTemplate article={article} />
                    </div>
                )
            })}
            <Link className={`pt-[20px] hover:underline ${styles.viewall}`} to="/Soon">View all</Link>
            <div style={{
                opacity: opacity,
            }}
                className="absolute w-[902px] h-[509px] top-[-5%] left-[-10%] rotate-180 max-xl:top-0">
                <img src="/WineSpots/wine-spot-1.png" alt="wine-spot-1" />
            </div>
        </section>
    )
}