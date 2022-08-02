export default {
    title: 'Notas fiscais',
    name: 'invoice',
    type: 'document',
    groups: [
        {
            name: 'address',
            title: 'Endereço',
        },
    ],
    fields: [
        {
            title: 'Número da nota fiscal',
            name: 'numberInvoice',
            type: 'string',
        },
        {
            title: 'Empresa',
            name: 'company',
            type: 'reference',
            to: [{ type: 'company' }],
        },
        {
            title: 'Destinatário / Remetente',
            name: 'receiver',
            type: 'string',
        },
        {
            title: 'CPF',
            name: 'cpf',
            type: 'string',
        },
        {
            title: 'Status',
            name: 'status',
            type: 'string',
            options: {
                list: [
                    { title: 'Em separação', value: 'onSeparation' },
                    { title: 'Em transporte', value: 'onTransit' },
                    { title: 'Finalizado', value: 'finish' },
                ],
            },
        },
        {
            title: 'Produtos',
            name: 'products',
            type: 'array',
            of: [
                {
                    type: 'reference',
                    to: [{ type: 'product' }],
                },
            ],
        },
        {
            title: 'Logradouro',
            name: 'addressInvoicePublicPlace',
            type: 'string',
            group: 'address',
        },
        {
            title: 'Número',
            name: 'addressInvoiceNumber',
            type: 'string',
            group: 'address',
        },
        {
            title: 'Complemento',
            name: 'addressInvoiceComplement',
            type: 'string',
            group: 'address',
        },
        {
            title: 'CEP',
            name: 'addressInvoiceCep',
            type: 'string',
            group: 'address',
        },
        {
            title: 'Bairro',
            name: 'addressInvoiceDistrict',
            type: 'string',
            group: 'address',
        },
        {
            title: 'Cidade',
            name: 'addressInvoiceCity',
            type: 'string',
            group: 'address',
        },
        {
            title: 'Estado',
            name: 'addressInvoiceState',
            type: 'string',
            group: 'address',
        },
        {
            title: 'País',
            name: 'addressInvoiceCountry',
            type: 'string',
            group: 'address',
        },
    ],
}
