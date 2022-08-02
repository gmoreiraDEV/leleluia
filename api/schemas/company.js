export default {
    title: 'Empresa',
    name: 'company',
    type: 'document',
    groups: [
        {
            title: 'Endereço',
            name: 'address',
        },
    ],
    fields: [
        {
            title: 'Nome / Razão social',
            name: 'name',
            type: 'string',
        },
        {
            title: 'Telefone',
            name: 'phone',
            type: 'number',
        },
        {
            title: 'CNPJ',
            name: 'cnpj',
            type: 'number',
        },
        {
            title: 'Inscrição Estadual',
            name: 'stateSubscription',
            type: 'number',
        },
        {
            title: 'Logradouro',
            name: 'addressCompanyPublicPlace',
            type: 'string',
            group: 'address',
        },
        {
            title: 'Número',
            name: 'addressCompanyNumber',
            type: 'string',
            group: 'address',
        },
        {
            title: 'Complemento',
            name: 'addressCompanyComplement',
            type: 'string',
            group: 'address',
        },
        {
            title: 'CEP',
            name: 'addressCompanyCep',
            type: 'string',
            group: 'address',
        },
        {
            title: 'Bairro',
            name: 'addressCompanyDistrict',
            type: 'string',
            group: 'address',
        },
        {
            title: 'Cidade',
            name: 'addressCompanyCity',
            type: 'string',
            group: 'address',
        },
        {
            title: 'Estado',
            name: 'addressCompanyState',
            type: 'string',
            group: 'address',
        },
        {
            title: 'País',
            name: 'addressCompanyCountry',
            type: 'string',
            group: 'address',
        },
    ],
}
