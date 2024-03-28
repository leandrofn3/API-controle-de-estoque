import { v4 as uuid } from "uuid";

export class Suppliers {
    private _idSuppliers: string

    constructor(private _nameSuppliers: string, private _contact: number, private _deliveryDetails: string) {
        this._idSuppliers = uuid()
    }

    public get id (){
        return this._idSuppliers;
    };

    public get nameSupplier (){
        return this._nameSuppliers;
    };

    public get contact (){
        return this._contact;
    };

    public get deliveryDetails (){
        return this._deliveryDetails;
    };

    public get toJson() {
        return ({
            id:  this._idSuppliers,
            nome: this.nameSupplier,
            contato: this.contact,
            detalhesDaEntrega: this._deliveryDetails
        })
    }
}