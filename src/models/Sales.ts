import { v4 as uuid } from "uuid";

export class Sales {
    private _idSale: string

    constructor(private _nameProduct: string, private _dateOfSale: string, private _amount: number, private _client?: string) {
        this._idSale = uuid()
    }

    public get idSale() {
        return this._idSale;
    };

    public get nameProduct() {
        return this._nameProduct;
    };

    public get dateOfSale() {
        return this._dateOfSale;
    };

    public get client() {
        return this._client;
    };

    public get amount() {
        return this._amount;
    }

    public get toJson() {
        return ({
            id: this._idSale,
            nomeProduct: this._nameProduct,
            dateOfSale: this.dateOfSale,
            client: this.client,
            amount: this.amount,
        });
    };
}