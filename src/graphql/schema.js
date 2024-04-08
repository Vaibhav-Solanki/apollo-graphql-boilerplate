export default `#graphql
type Address {
    id: Int!
    customer_id: Int!
    customer: Customer
    address_line1: String!
    address_line2: String
    city: String!
    state: String!
    country: String!
    postal_code: String!
}

type Customer {
    id: Int!
    name: String!
    picture: String
    email: String!
    uid: String!
    password: String
    created_at: String!
    addresses: [Address]
}
type Query {
    customer(id: Int!): Customer
}

type Mutation {
    createCustomer(first_name: String!, last_name: String!, email: String!, password: String!): Customer
}
`
