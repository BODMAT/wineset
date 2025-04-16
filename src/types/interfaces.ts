import { User } from "firebase/auth";
import { BankType, CartIdsType, DeliveryType } from "./types";
import { IProduct, IProductWithCartQuantity } from "../architecture/Pruduct";
import { CSSObjectWithLabel } from "react-select";

export interface AuthProps {
    loginActive: boolean;
    setLoginActive: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface SignInProps extends AuthProps {
    setRegisterActive: React.Dispatch<React.SetStateAction<boolean>>;
    title: string;
}

export interface IUser {
    email: string;
    password: string;
}

export interface IUserWithConfirm extends IUser {
    confirmPassword: string;
}

export interface SignUpProps {
    registerActive: boolean;
    setLoginActive: React.Dispatch<React.SetStateAction<boolean>>;
    setRegisterActive: React.Dispatch<React.SetStateAction<boolean>>;
    title: string;
}

export interface BorderedLinkProps {
    to: string;
    children: React.ReactNode | string;
}

export interface ContactUsPopupProps {
    state: IHeaderState;
    setState: React.Dispatch<React.SetStateAction<IHeaderState>>;
}

export interface IHeaderState {
    isScrolledDown: boolean;
    lastScrollTop: number;
    isLargeScreen: boolean;
    isBurgerActive: boolean;
    activeLink: string | null;
    moreInfo: boolean;
}

export interface IFullPrice {
    crossedPrice: null | string
    disountedPrice: null | string
}

export interface IContactUsData {
    name: string;
    email: string;
    text: string;
}

export interface IPersonalData {
    name: string;
    surname: string;
    tel: string;
    email: string;

    delivery: DeliveryType;
    address: string;

    payment: BankType;
    cardNumber: string;
    comment?: string;
}

export interface FullAgedProps {
    setActive: () => void;
}

export interface PopupProps {
    title: string;
    children: React.ReactNode;
    active: boolean;
    setActive: React.Dispatch<React.SetStateAction<boolean>>;
    withoutPadAndCross?: boolean;
}

export interface IPropsBase {
    imgSrc: string;
    supTitle: string;
    title: string;
    subTitle: string;
    contentWidth: number;
}

export interface IPropsWithLink extends IPropsBase {
    subTitleLink: string;
    scrollTo?: never;
    product?: never;
}

export interface IPropsWithScroll extends IPropsBase {
    scrollTo: string;
    product: string;
    subTitleLink?: never;
}

export interface ILink {
    index: number;
    label: string;
    imgSrc: string;
    link: string;
}

export interface UseMapProps {
    lat: number;
    lng: number;
    zoom: number;
    markerLat: number;
    markerLng: number;
    popupContent: string;
}

export interface IAuthState {
    user: User | null;
    firebaseAlert: string | null;
    loading: boolean;
    setFirebaseAlert: (message: string | null) => void;
    logout: () => Promise<void>;
    register: (email: string, password: string) => Promise<void>;
    login: (email: string, password: string) => Promise<void>;
    handleFirebaseAuth: () => Promise<void>;
}

export interface ICart {
    cartIds: CartIdsType[];
    cartProducts: IProductWithCartQuantity[];

    totalCartPriceWithoutDiscount: number;
    totalCartPriceWithDiscount: number;
    totalCartDiscount: number

    updateCartTotals: (products: IProductWithCartQuantity[]) => void;
    initializeCart: () => Promise<void>;
    loadCartProducts: (cartIds: CartIdsType[]) => Promise<IProductWithCartQuantity[]>;

    addToCart: (product: IProductWithCartQuantity, quantity?: number) => void;
    removeFromCart: (product: IProductWithCartQuantity, quantity?: number) => void;
    clearCart: () => void;

    findSameProductInCartById: (id: string) => IProductWithCartQuantity | undefined;
    addToUserCartBeforeLeaving: () => void; // if User auth
}

export interface IFilterState {
    productsByType: Record<string, IProduct[]>;
    filteredProductsByType: Record<string, IProduct[]>;
    filtersByType: Record<string, { discount: string; country: string }>;
    isLoading: boolean;
    setFilters: (productType: string, filters: { discount: string; country: string }) => void;
    loadProductsByType: (productTypes: string[]) => Promise<void>;
}

export interface IAgeState {
    isFullAgedActive: boolean;
    setIsFullAgedActive: (value: boolean) => void;
};

export interface IArticleProps {
    suplabel: string,
    label: string,
    link: string,
    img: string
    sublabel: string
}

export interface CustomSelectStyles {
    control: (base: CSSObjectWithLabel, state: any) => CSSObjectWithLabel;
    singleValue: (base: CSSObjectWithLabel, state: any) => CSSObjectWithLabel;
    placeholder: (base: CSSObjectWithLabel, state: any) => CSSObjectWithLabel;
    dropdownIndicator: (base: CSSObjectWithLabel, state: any) => CSSObjectWithLabel;
    option: (base: CSSObjectWithLabel, state: any) => CSSObjectWithLabel;
    menu: (base: CSSObjectWithLabel) => CSSObjectWithLabel;
}