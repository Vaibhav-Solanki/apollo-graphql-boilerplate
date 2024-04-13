export type BrandType = {
    id: number;
    name: string;
    description?: string;
    website?: string;
    created_at: string; // Assuming timestamp with time zone is represented as a string
}

// categories
export type CategoryType = {
    id: number;
    name: string;
    description?: string;
    parent_category_id?: number;
    created_at: string; // Assuming timestamp with time zone is represented as a string
}

// products
export type ProductType = {
    id: number;
    brand_id: number;
    category_id: number;
    name: string;
    description?: string;
    price: number;
    stock_quantity: number;
    reserved_quantity: number;
    created_at: string; // Assuming timestamp with time zone is represented as a string
}

// product_images
export type ProductImageType = {
    id: number;
    product_id: number;
    url: string;
    created_at: string; // Assuming timestamp with time zone is represented as a string
}

// customers
export type CustomerType = {
    id: number;
    name?: string;
    picture?: string;
    email: string;
    uid: string;
    password?: string;
    created_at: string; // Assuming timestamp with time zone is represented as a string
}

// addresses
export type AddressType = {
    id: number;
    customer_id: number;
    address_line1: string;
    address_line2?: string;
    city: string;
    state: string;
    country: string;
    postal_code: string;
    created_at: string; // Assuming timestamp with time zone is represented as a string
}

// orders
export type OrderType = {
    id: number;
    customer_id: number;
    order_date: string; // Assuming timestamp with time zone is represented as a string
    total_amount: number;
    status: string;
    shipping_address_id: number;
    payment_method?: string;
    value_distribution: any; // Adjust this type according to your specific JSON structure
    created_at: string; // Assuming timestamp with time zone is represented as a string
    payment_status: number;
}

// order_items
export type OrderItemType = {
    id: number;
    order_id: number;
    product_id: number;
    quantity: number;
    unit_price: number;
    created_at: string; // Assuming timestamp with time zone is represented as a string
}

// carts
export type CartType = {
    id: number;
    customer_id: number;
    product_id: number;
    quantity: number;
    created_at: string; // Assuming timestamp with time zone is represented as a string
}

// order_payments
export type OrderPaymentType = {
    id: number;
    order_id: number;
    amount: number;
    payment_date: string; // Assuming timestamp with time zone is represented as a string
    payment_status: string;
    payment_method?: string;
    created_at: string; // Assuming timestamp with time zone is represented as a string
}

// reviews
export type ReviewType = {
    id: number;
    product_id: number;
    customer_id: number;
    rating?: number;
    review_text?: string;
    review_date: string; // Assuming timestamp with time zone is represented as a string
}

// files
export type FileType = {
    id: number;
    customer_id: number;
    file: string;
    file_type: string;
    url: string;
    created_at: string; // Assuming timestamp with time zone is represented as a string
}
