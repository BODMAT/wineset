import { IArticleProps } from "../../types/interfaces";

export function ArticleTemplate({ article }: { article: IArticleProps }) {
    return (
        <a target="_blank" href={article.link} className="relative w-full max-w-full h-[360px] overflow-hidden group">
            <div className="absolute z-3 inset-0 bg-[#00000080] group-hover:bg-[#000000ad] flex flex-col justify-center items-center p-4 gap-[10%] transitioned">
                <h3 className="font-alexbrush font-normal text-white opacity-75 fluid-text [--fmin:24] [--fmax:46]">{article.suplabel}</h3>
                <h2 className="font-inter font-medium uppercase text-center text-white fluid-text [--fmin:20] [--fmax:32]">{article.label}</h2>
                <h3 className="uppercase font-inter font-semibold text-[14px] tracking-[0.25em] [text-decoration-skip-ink:none] text-center text-white relative top-[20%] opacity-0 group-hover:underline group-hover:opacity-100 group-hover:top-[0%] transitioned">{article.sublabel}</h3>
            </div>
            <img
                src={article.img}
                alt={article.label}
                className="w-full h-full object-cover"
            />
        </a>
    );
}
