import { ICompany } from './company'

export enum Status {
    ON_SEPARATION = 'onSeparation',
    ON_TRANSIT = 'onTransit',
    FINISH = 'finish',
}

export interface IProduct {
    name: string
    quantity: string
}

export interface IInvoice {
    _id: string
    numberInvoice: string
    receiver: string
    cpf: string
    company: ICompany
    status: Status
    products: IProduct[]
    addressInvoicePublicPlace: string
    addressInvoiceNumber: string
    addressInvoiceComplement: string
    addressInvoiceCep: string
    addressInvoiceDistrict: string
    addressInvoiceCity: string
    addressInvoiceState: string
    addressInvoiceCountry: string
}
