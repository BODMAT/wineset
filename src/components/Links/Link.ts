export interface ILink {
    label: string;
    imgSrc: string;
    link: string;
}

export const links: ILink[] = [
    { label: "BASKET OF DELICACIES", imgSrc: "./public/Links/delicacies.jpg", link: "/delicacies" },
    { label: "FRENCH WINE", imgSrc: "./public/Links/wine.jpg", link: "/wine" },
    { label: "TENUTA ARGENTIERA", imgSrc: "./public/Links/tenuta.jpg", link: "/articles" },
]