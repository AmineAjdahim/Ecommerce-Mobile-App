import { CartItemsModel } from './cartItems.model';

export class CollectionData {
    imageSource: any;
    text: string;
}

export class AppStateModel {
    count: number;
    cartItems: CartItemsModel[];
    products: CartItemsModel[];
    collectionData: any[];
}