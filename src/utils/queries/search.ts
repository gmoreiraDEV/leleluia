export const searchInvoice = (searchTerm: string) => {
    const query = `
    *[_type == 'invoice' && numberInvoice match '${searchTerm}*' || cpf match '${searchTerm}*'] {
        _id,
        cpf
    }
    `
    return query
}
export const searchInvoiceByCPF = (cpf: string) => {
    const query = `
    *[_type == 'invoice' && cpf match '${cpf}'] {
        ...,
        "products": *[_type == "product"]{name, quantity},
        company-> {
            ...
        }
    }
    `
    return query
}
export const searchInvoiceByID = (id: string) => {
    const query = `
    *[_type == 'invoice' && _id match '${id}'] {
        ...,
        "products": *[_type == "product"]{name, quantity},
        company-> {
            ...
        }
    }
    `
    return query
}
