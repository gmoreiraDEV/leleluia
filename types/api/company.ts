export interface ICompany {
    _id: string
    name: string
    phone: string
    cnpj: string
    stateSubscription: string
    address: ICompanyAddress
}

export interface ICompanyAddress {
    addressCompanyPublicPlace: string
    addressCompanyNumber: string
    addressCompanyComplement: string
    addressCompanyCep: string
    addressCompanyDistrict: string
    addressCompanyCity: string
    addressCompanyState: string
    addressCompanyCountry: string
}
