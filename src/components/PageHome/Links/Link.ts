export interface ILink {
    index: number;
    label: string;
    imgSrc: string;
    link: string;
}

export const links: ILink[] = [
    { index: 1, label: "BASKET OF DELICACIES", imgSrc: "/HomePage/Links/delicacies.jpg", link: "/Delicacies" },
    { index: 2, label: "FRENCH WINE", imgSrc: "/HomePage/Links/wine.jpg", link: "/Wine-and-alcohol" },
    { index: 3, label: "TENUTA ARGENTIERA", imgSrc: "/HomePage/Links/tenuta.jpg", link: "/Articles" },
]