import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'
import person from './invoices'
import company from './company'
import product from './product'

export default createSchema({
    name: 'default',
    types: schemaTypes.concat([person, company, product]),
})
