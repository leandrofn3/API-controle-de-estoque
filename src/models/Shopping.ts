import { v4 as uuid } from "uuid";

export class Shopping {
    private _idShopping: string

    constructor(private _nameProduct: string, private _supplier: string, private _amount: number){
        this._idShopping = uuid()
    };

    public get idShopping (){
        return this._idShopping;
    };

    public get nameProduct (){
        return this._nameProduct;
    };

    public get supplier (){
        return this._supplier;
    };

    public get amount (){
        return this._amount
    };

    public get toJson (){
        return ({
            id: this.idShopping,
            nameProduct: this._nameProduct,
            supplier: this._supplier,
            amount: this._amount
        });
    }
}