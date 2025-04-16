import { KindOfProduct } from "../architecture/Pruduct";
import { IPropsWithLink, IPropsWithScroll } from "./interfaces";

export type DeliveryType = 'courier' | 'nova-poshta' | 'ukrposhta' | 'self-pickup';
export type BankType = "Privat24" | "Monobank" | "Abank" | "Sense Bank";
export type ProductContextType = {
    product: KindOfProduct;
};
export type SpecialOfferPropsType = IPropsWithLink | IPropsWithScroll;

export type MenuType = [string, string[]]
export type CartIdsType = [string, KindOfProduct, number]; // [id, KindOfProduct, cartQuantity]