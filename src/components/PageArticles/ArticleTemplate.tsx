import { ArticleProps } from "../../data/DataBase/Other/articles"
import styles from "./PageArticles.module.scss"

export function ArticleTemplate({ article }: { article: ArticleProps }) {
    return (
        <a target="_blank" href={article.link} className="relative w-full max-w-full h-[360px] overflow-hidden group">
            <div className="absolute z-3 inset-0 bg-[#00000080] group-hover:bg-[#000000ad] flex flex-col justify-center items-center p-4 gap-[10%] transitioned">
                <h3 className={styles.suplabel}>{article.suplabel}</h3>
                <h2 className={styles.label}>{article.label}</h2>
                <h3 className={`${styles.sublabel} relative top-[20%] opacity-0 group-hover:underline group-hover:opacity-100 group-hover:top-[0%] transitioned`}>{article.sublabel}</h3>
            </div>
            <img
                src={article.img}
                alt={article.label}
                className="w-full h-full object-cover"
            />
        </a>
    );
}

