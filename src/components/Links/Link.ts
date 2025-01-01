export interface ILink {
    index: number;
    label: string;
    imgSrc: string;
    link: string;
}

export const links: ILink[] = [
    { index: 1, label: "BASKET OF DELICACIES", imgSrc: "./public/Links/delicacies.jpg", link: "/delicacies" },
    { index: 2, label: "FRENCH WINE", imgSrc: "./public/Links/wine.jpg", link: "/wine" },
    { index: 3, label: "TENUTA ARGENTIERA", imgSrc: "./public/Links/tenuta.jpg", link: "/articles" },
]