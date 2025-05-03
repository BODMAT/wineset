import { ArticleProps } from "./interfaces";

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