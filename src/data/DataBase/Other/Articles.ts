export type ArticleProps = {
    suplabel: string,
    label: string,
    link: string,
    img: string
    sublabel: string
}
export class Article {
    private _suplabel: string;
    private _label: string;
    private _sublabel: string;
    private _link: string;
    private _img: string;

    constructor({ suplabel, label, link, img, sublabel = "read the article" }: ArticleProps) {
        this._suplabel = suplabel;
        this._label = label;
        this._sublabel = sublabel;
        this._link = link;
        this._img = img
    }

    get suplabel() {
        return this._suplabel;
    }
    get label() {
        return this._label;
    }
    get sublabel() {
        return this._sublabel;
    }
    get link() {
        return this._link;
    }
    get img() {
        return this._img;
    }
}

const A1 = new Article({
    suplabel: "Wine",
    label: "THE WINE OF GRENACHE: STYLE COMPARISON",
    link: "https://www.winecellar.co.za/grenache/?srsltid=AfmBOop22ge3BuyPtDxjThREZQVpEI1abbxv8zFAdF44TEIcZBEkgstx",
    img: "/ArticlesPage/1.png",
    sublabel: "read the article"
});

const A2 = new Article({
    suplabel: "Spirits",
    label: "LITTLE GROUNDERS INSIDE CHAMPAGNE",
    link: "https://www.champagne.fr/en/discovering-champagne",
    img: "/ArticlesPage/2.png",
    sublabel: "read the article"
});

const A3 = new Article({
    suplabel: "Whiskey",
    label: "INVESTMENT IN ARMAGNAC: IS IT WORTH?",
    link: "https://splintinvest.com/en/blog/invest-in-armagnac/",
    img: "/ArticlesPage/3.png",
    sublabel: "read the article"
});

const A4 = new Article({
    suplabel: "Wine",
    label: "THE WINE OF GRENACHE: STYLE COMPARISON",
    link: "https://www.guildsomm.com/public_content/features/articles/b/guildsomm-blog/posts/grenache-profile",
    img: "/ArticlesPage/4.png",
    sublabel: "read the article"
});

const A5 = new Article({
    suplabel: "Geography",
    label: "WINE REGIONS OF THE WORLD",
    link: "https://worldwineregions.com/wwrmap/#view=4.32/48.73/17.8",
    img: "/ArticlesPage/5.png",
    sublabel: "read the article"
});

const A6 = new Article({
    suplabel: "Gin",
    label: "THE HISTORY AND STYLES OF GIN",
    link: "https://www.thewhiskyexchange.com/inspiration/article/17553/gin",
    img: "/ArticlesPage/6.png",
    sublabel: "read the article"
});

export const ArticlesInfo: Article[] = [A1, A2, A3, A4, A5, A6];