export interface IProduct {
    id: number;
    name: string;
    price: number;
}

export interface IProductList {
    filterProducts: () => IProduct[];
}