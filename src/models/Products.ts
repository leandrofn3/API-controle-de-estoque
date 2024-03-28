import { v4 as uuid } from "uuid";

export class Products {
    private _id: string;

    constructor(private _nameProduct: string, private _description: string, private _inventoryQuantity: number, private _purchasePrice: number, private _salePrice: number) {
        this._id = uuid()
    };

    public get idProduct() {
        return this._id;
    };

    public get nameProduct() {
        return this._nameProduct;
    };

    public get description() {
        return this._description;
    };

    public get inventoryQuantity() {
        return this._inventoryQuantity;
    };

    public get purchasePrice() {
        return this._purchasePrice;
    };

    public get salePrice() {
        return this._salePrice
    };

    public get toJson (){
        return({
            id: this.idProduct,
            nameProduct: this.nameProduct,
            description: this.description,
            inventoryQuantity: this.inventoryQuantity,
            purchasePrice: this.purchasePrice,
            salePrice: this.salePrice
        });
    };
}