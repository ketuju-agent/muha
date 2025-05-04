import { faker } from "@faker-js/faker";

export interface Product {
    id: string;
    name: string;
    category: string;
    price: number;
    stock: number;
    createdAt: string;
}

const products: Product[] = Array.from({ length: 50 }, () => ({
    id: faker.string.uuid(),
    name: faker.commerce.productName(),
    category: faker.commerce.department(),
    price: parseFloat(faker.commerce.price()),
    stock: faker.number.int({ min: 0, max: 100 }),
    createdAt: faker.date.past().toISOString(),
}));


export const fakeProducts = {
    getProducts: ({ page = 1, limit = 10, search = "", categories = "" }) => {
        let filtered = products;

        if (search) {
            filtered = filtered.filter((p) =>
                p.name.toLowerCase().includes(search.toLowerCase())
            );
        }

        if (categories) {
            filtered = filtered.filter((p) => p.category === categories);
        }

        const total_products = filtered.length;
        const start = (page - 1) * limit;
        const paginated = filtered.slice(start, start + limit);

        return { products: paginated, total_products };
    },

    createProduct: (data: Omit<Product, "id" | "createdAt">) => {
        const newProduct: Product = {
            id: faker.string.uuid(),
            createdAt: new Date().toISOString(),
            ...data,
        };
        products.push(newProduct);

        return newProduct;
    },

    updateProduct: (
        id: string,
        data: Partial<Omit<Product, "id" | "createdAt">>,
    ) => {
        const index = products.findIndex((p) => p.id === id);
        if (index === -1) return null;

        products[index] = { ...products[index], ...data };

        return products[index];
    },

    deleteProduct: (id: string) => {
        const index = products.findIndex((p) => p.id === id);
        if (index === -1) return null;

        return products.splice(index, 1);
    },

    showProduct: (id: string) => {
        const product = products.find((p) => p.id === id);
        console.log(product)

        return product || null;
    }
};
